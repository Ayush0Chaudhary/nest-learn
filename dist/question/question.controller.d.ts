import { QuestionService } from './question.service';
import { QuestionsDTO } from 'src/dto/question';
export declare class QuestionController {
    private questionService;
    constructor(questionService: QuestionService);
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
