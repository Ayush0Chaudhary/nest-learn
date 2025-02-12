import { TeacherService } from './teacher.service';
export declare class TeacherController {
    private teacherService;
    constructor(teacherService: TeacherService);
    getTeachers(): Promise<{
        id: number;
        email: string;
        password: string;
    }[]>;
}
