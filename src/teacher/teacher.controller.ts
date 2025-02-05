import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherDTO } from 'src/dto/teacher';

@Controller('api/v1/teacher')
export class TeacherController {
    constructor( private teacherService: TeacherService ) {}

    @Get()
    async getTeachers() {
        return this.teacherService.getTeachers();
    }

    @Post()
    async createTeacher(@Body() teacher: TeacherDTO) {
        return this.teacherService.createTeacher(teacher);
    }
}
