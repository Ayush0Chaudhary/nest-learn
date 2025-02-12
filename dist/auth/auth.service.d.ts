import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeacherService } from 'src/teacher/teacher.service';
export declare class AuthService {
    private prismaService;
    private jwtService;
    private teacherService;
    constructor(prismaService: PrismaService, jwtService: JwtService, teacherService: TeacherService);
    validateUser(email: string, password: string): Promise<any>;
    registerUser(email: string, password: string, name: string, type: string): Promise<any>;
    encryptPassword(password: string): Promise<string>;
    verifyPassword(password: string, hash: string): Promise<boolean>;
}
