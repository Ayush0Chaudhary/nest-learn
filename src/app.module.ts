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
import { StudentModule } from './student/student.module';
import { TestModule } from './test/test.module';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';

@Module({
  imports: [TeacherModule, QuestionModule,AuthModule, StudentModule, TestModule],
  controllers: [AppController, TeacherController, AuthController, TestController],
  providers: [AppService, PrismaService, TeacherService, AuthService, TestService],
})
export class AppModule {}
