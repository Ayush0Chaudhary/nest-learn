import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private prismaService;
    private jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    getMe(id: number): Promise<any>;
    validateUser(email: string, password: string): Promise<any>;
    registerUser(email: string, password: string, name: string, type: string): Promise<any>;
    encryptPassword(password: string): Promise<string>;
    verifyPassword(password: string, hash: string): Promise<boolean>;
}
