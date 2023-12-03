import * as api from '@/API/articles';
import { ArticleType } from '@/Types/Articles';
import { useQuery } from 'react-query';

export function useArticle(id: string | string[] | undefined) {
  return useQuery<ArticleType>(['article', id], () => api.getArticle(id));
}

export function useArticleList(page: number) {
  return useQuery<ArticleType[]>(['articleList'], () =>
    api.getArticles()
  );
}