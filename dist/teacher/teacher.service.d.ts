import { PrismaService } from 'src/prisma/prisma.service';
export declare class TeacherService {
    private prismaServices;
    constructor(prismaServices: PrismaService);
    getTeachers(): Promise<{
        id: number;
        email: string;
        password: string;
    }[]>;
}
