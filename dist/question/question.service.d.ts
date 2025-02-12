import { QuestionsDTO } from 'src/dto/question';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class QuestionService {
    private prismaServices;
    constructor(prismaServices: PrismaService);
    getQuestions(): Promise<{
        id: number;
        text: string;
        testid: number;
    }[]>;
    createQuestion(question: QuestionsDTO): Promise<void>;
    getQuestionById(id: number): Promise<{
        id: number;
        text: string;
        testid: number;
    }>;
}
