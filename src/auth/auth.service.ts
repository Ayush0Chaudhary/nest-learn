import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private jwtService: JwtService,
      ) {}
    
      async getMe(id: number): Promise<any> {
        const user = await this.prismaService.user.findUnique(
            {
                where : {
                    id: id
                }
            }
        );
        if (user) {
          delete user.password;
          return user;
        } else {
          return new UnauthorizedException();
        }
      }
    
      async validateUser(email: string, password: string): Promise<any> {
        const user = await this.prismaService.user.findUnique(
            {
                where : {
                    email : email
                }
            }
        )
    
        if (user && this.verifyPassword(password, user.password)) {
          const payload = { sub: user.id, email: user.email };
          return {
            access_token: await this.jwtService.signAsync(payload),
          };
        } else {
          return new UnauthorizedException();
        }
      }
    
      async registerUser(email: string, password: string, name: string, type: string): Promise<any> {
        if(!email|| !password  || !name ){
            return new UnauthorizedException();
        }
        const user = await this.prismaService.user.findUnique({
            where : {
                email: email
            }
        });
        if (user) {
          return new UnauthorizedException();
        } else {
          const hash = await this.encryptPassword(password);
          const newUser = await this.prismaService.user.create({
            data: {
              email: email,
              password: hash,
              name: name,
              type: type,
            },
          });
          const payload = { sub: newUser.id, email: newUser.email };
          return {
            access_token: await this.jwtService.signAsync(payload),
          };
        }
      }
    
      async encryptPassword(password: string): Promise<string> {
        const saltRounds = 10;
        try {
          const hash = await bcrypt.hash(password, saltRounds);
          return hash;
        } catch (err) {
          throw new Error('Error encrypting password: ' + err.message);
        }
      }
    
      async verifyPassword(password: string, hash: string): Promise<boolean> {
        try {
          const isMatch = await bcrypt.compare(password, hash);
          return isMatch;
        } catch (err) {
          throw new Error('Error verifying password: ' + err.message);
        }
      }
}
