import { getArticle } from '@/API/articles';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { generateDate } from '@/tools';
import styles from '@/pages/post/Post.module.scss'
import ArticleSkeleton from '@/components/ArticleSkeleton';
const PostPage = () => {
    const router = useRouter()
    const {id} = router.query;
    const { data: article, isError, isLoading } = useQuery(['article', id], () => getArticle(id))
    if (isLoading) {
      return <ArticleSkeleton />;
    }
  
    if (isError) {
      return <p>Error occurred while fetching data.</p>;
    }
    if(article) {
        const {title, id, body} = article;
        const postDate = generateDate(id);
        return (
            <article>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.date}>{postDate}</p>
                <p>{body}</p>
            </article>
        )
    }

    return (
        <>....</>
    )


}


export async function getServerSideProps({id}:{id: string}) {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['article', id], () => getArticle(id))
  
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  }

export default PostPage;