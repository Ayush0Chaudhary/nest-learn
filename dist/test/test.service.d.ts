import { PrismaService } from 'src/prisma/prisma.service';
export declare class TestService {
    private prismaServices;
    constructor(prismaServices: PrismaService);
    getTests(): Promise<{
        id: number;
        teacherId: number | null;
    }[]>;
    createTest(teacherEmail: string): Promise<{
        id: number;
        teacherId: number | null;
    }>;
    addQuestiontoTest(question: string, testId: number): Promise<{
        id: number;
        teacherId: number | null;
    }>;
}
