import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { TeacherService } from './teacher/teacher.service';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherModule } from './teacher/teacher.module';
import { QuestionModule } from './question/question.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TeacherModule, QuestionModule,AuthModule],
  controllers: [AppController, TeacherController, AuthController],
  providers: [AppService, PrismaService, TeacherService, AuthService],
})
export class AppModule {}
