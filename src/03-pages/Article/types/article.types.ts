export interface Article {
    id: number | null;
    section_id: number | null;
    title: string;
    text: string;
    tags: string[];
}

export interface ArticleState {
    isLoading: boolean;
    article: Article | null;
}
