import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionsDTO } from 'src/dto/question';

@Controller('api/v1/question')
export class QuestionController {
    constructor(private questionService: QuestionService) { }

    @Get()
    async getQuestions() {
        return this.questionService.getQuestions();
    }

    @Post()
    async createQuestion( @Body() question: QuestionsDTO) {
        return this.questionService.createQuestion(question);
    }

    @Get('/:id')
    async getQuestionById(@Param() id: number) {
        return this.questionService.getQuestionById(parseInt(id["id"], 10));
    }

}
