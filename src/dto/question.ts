export interface QuestionsDTO {
    id: number;
    title: string;
    content?: string;
    authorId?: number;
    options: string;
}