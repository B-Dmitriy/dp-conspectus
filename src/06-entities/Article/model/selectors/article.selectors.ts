import { RootState } from '01-app/providers/store/lib/store';
import { articleTemplate } from '../slice/article.slice';

export const getArticleIsLoading = (state: RootState) => state?.article?.isLoading || false;
export const getArticle = (state: RootState) => state?.article?.article || articleTemplate;
