import { TeacherService } from './teacher.service';
import { TeacherDTO } from 'src/dto/teacher';
export declare class TeacherController {
    private teacherService;
    constructor(teacherService: TeacherService);
    getTeachers(): Promise<{
        id: number;
        email: string;
        name: string | null;
    }[]>;
    createTeacher(teacher: TeacherDTO): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
}
