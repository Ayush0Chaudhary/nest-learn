import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { TeacherModule } from 'src/teacher/teacher.module';
import { StudentModule } from 'src/student/student.module';

@Module({
    imports: [
        JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '6000s' },
    }),
    TeacherModule, StudentModule
],
    controllers: [AuthController],
    providers: [AuthService, PrismaService]
})
export class AuthModule { }
