import { Injectable } from '@nestjs/common';
import { TeacherDTO } from 'src/dto/teacher';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeacherService {
    constructor( private prismaServices : PrismaService) { }

    async getTeachers() {
        return this.prismaServices.teacher.findMany();
    }

    async createTeacher(teacher: TeacherDTO) {
        return this.prismaServices.teacher.create({
            data: {
                name: teacher.name,
                email: teacher.email
            },
        });
   }          
}
