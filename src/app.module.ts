import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { TeacherService } from './teacher/teacher.service';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherModule } from './teacher/teacher.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [TeacherModule, QuestionModule],
  controllers: [AppController, TeacherController],
  providers: [AppService, PrismaService, TeacherService],
})
export class AppModule {}
