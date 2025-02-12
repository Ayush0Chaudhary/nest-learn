import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { TeacherService } from 'src/teacher/teacher.service';
import { TeacherDTO } from 'src/dto/teacher';


@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private teacherService: TeacherService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const student = await this.prismaService.student.findUnique(
      {
        where: {
          email: email
        }
      }
    )

    const teacher = await this.prismaService.teacher.findUnique({
      where: {
        email: email
      }
    })

    if (student && this.verifyPassword(password, student.password)) {
      const payload = { sub: student.id, email: student.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else if (teacher && this.verifyPassword(password, teacher.password)) {
      const payload = { sub: teacher.id, email: teacher.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    else {
      return new UnauthorizedException();
    }
  }

  async registerUser(email: string, password: string, name: string, type: string): Promise<any> {
    if (!email || !password || !name) {
      return new UnauthorizedException();
    }
    const user = await this.prismaService.student.findUnique({
      where: {
        email: email
      }
    });

    const teacher = await this.prismaService.teacher.findUnique({
      where: {
        email: email
      }
    });

    if (user || teacher) {
      return new UnauthorizedException();
    } else {
      const hash = await this.encryptPassword(password);

      var payload;
        if (type == 'teacher') {
          const teacher = await this.prismaService.teacher.create({
            data: {
              email: email,
              password: hash
            }
          });
          payload = { sub: teacher.id, email: teacher.email };
        } else if (type == "student") {
          const student = await this.prismaService.student.create({
            data: {
              email: email,
              password: hash
            }
          });
          payload = { sub: student.id, email: student.email };
        }
        
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
