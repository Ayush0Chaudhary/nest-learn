import { TeacherDTO } from 'src/dto/teacher';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TeacherService {
    private prismaServices;
    constructor(prismaServices: PrismaService);
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
