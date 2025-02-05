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

        return this.prismaServices.questions.create({
            data: {
                title: question.title,
                content: question.content,
                authorId: question.authorId,
                options: question.options
            },
        });

    }

    async getQuestionById(id: number) {
        return this.prismaServices.questions.findUnique({
            where: {
                id: id
            }
        });
    }
}
