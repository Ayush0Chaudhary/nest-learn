import { QuestionsDTO } from 'src/dto/question';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class QuestionService {
    private prismaServices;
    constructor(prismaServices: PrismaService);
    getQuestions(): Promise<{
        id: number;
        title: string;
        content: string | null;
        authorId: number | null;
        options: string;
    }[]>;
    createQuestion(question: QuestionsDTO): Promise<{
        id: number;
        title: string;
        content: string | null;
        authorId: number | null;
        options: string;
    }>;
    getQuestionById(id: number): Promise<{
        id: number;
        title: string;
        content: string | null;
        authorId: number | null;
        options: string;
    }>;
}
