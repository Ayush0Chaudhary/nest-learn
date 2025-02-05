import { QuestionService } from './question.service';
import { QuestionsDTO } from 'src/dto/question';
export declare class QuestionController {
    private questionService;
    constructor(questionService: QuestionService);
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
