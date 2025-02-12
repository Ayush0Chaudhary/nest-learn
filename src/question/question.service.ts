import { Injectable } from '@nestjs/common';
import { QuestionsDTO } from 'src/dto/question';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionService {

    constructor(private prismaServices: PrismaService) { }


    async getQuestions() {
        return this.prismaServices.questions.findMany();
    }

    async createQuestion(question: QuestionsDTO) {



    }

    async getQuestionById(id: number) {
        return this.prismaServices.questions.findUnique({
            where: {
                id: id
            }
        });
    }
}
