import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getArticles } from '@/API/articles';
import { ArticleType } from '@/Types/Articles';
import styles from "@/pages/home.module.scss"
import ArticleSkeleton from '@/components/ArticleSkeleton';
import Article from '@/components/Article';
function Home() {
  const { data: articles, isLoading } = useQuery<ArticleType[]>({
    queryKey: ['articles'],
    queryFn: () => getArticles(),
  });

  if(isLoading) {
    return (
      <>
      {Array(10).fill(0).map((_, i) => (
        <ArticleSkeleton key={i} />
      ))}
    </>
    )
  }
  const sortedArticles = articles?.sort((a, b) => b.id - a.id);

  return (
    <main className={styles.main}>
      <div className={styles.articles}>
        {sortedArticles?.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}

export default Home;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['articles'], () => getArticles());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}