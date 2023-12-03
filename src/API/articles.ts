import { ArticleType } from "@/Types/Articles";
import axios from "@/lib/axios";
export const getArticles = async () => {
  const {data} = await axios.get('/posts');
  return data as ArticleType[];
};

export const getArticle = async (id: string | string[] | undefined) => {
  const {data} = await axios.get(`/posts/${id}`);
  return data as ArticleType;
};