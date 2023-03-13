import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedText } from '06-entities/FormattedText';
import { PageLoader } from '07-shared/ui/PageLoader/PageLoader';
import { useAppDispatch, useAppSelector } from '07-shared/hooks/appHooks';
import { classNames } from '07-shared/lib/classNames/classNames';
import { getArticle, getArticleIsLoading } from '../model/selectors/article.selectors';
import { fetchArticle } from '../model/services/fetchArticle/fetchArticle.thunk';
import classes from './Article.module.scss';

const Article = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const article = useAppSelector(getArticle);
    const isLoading = useAppSelector(getArticleIsLoading);

    useEffect(() => {
        if (id) {
            const articleId = Number(id);
            dispatch(fetchArticle(articleId));
        }
    }, [id]);

    return (
        <div className={classNames(classes.Article)}>
            {isLoading
                ? <PageLoader />
                : <FormattedText text={article.text} />}
        </div>
    );
};

export default Article;
