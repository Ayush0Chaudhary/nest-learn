export interface CreateTestDto {
    teacherEmail: string;
}


export interface AddQuestiontoTestDto {
    testId: number;
    question: string;
}