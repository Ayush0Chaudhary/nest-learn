import { TestService } from './test.service';
import { AddQuestiontoTestDto, CreateTestDto } from 'src/dto/create-test.dto';
export declare class TestController {
    private testService;
    constructor(testService: TestService);
    getTests(): Promise<{
        id: number;
        teacherId: number | null;
    }[]>;
    createTest(createTestDto: CreateTestDto): Promise<{
        id: number;
        teacherId: number | null;
    }>;
    addQuestionToTest(addQuestiontoTestDto: AddQuestiontoTestDto): Promise<{
        id: number;
        teacherId: number | null;
    }>;
}
