import Link from 'next/link';
import React, {FC} from 'react'
import styles from "@/components/Article/Article.module.scss"
import { ArticleType } from '@/Types/Articles';
import { generateDate } from '@/tools';

type ArticleWithLinkProps = {
  article: ArticleType
}
const Article:FC<ArticleWithLinkProps> = ({article}) => {
  const {title, id, body} = article;
  const postDate = generateDate(id);
  
  return (
    <Link className={styles.article} href="/post/[id]" as={`/post/${article.id}`}>
      <article>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{postDate}</p>
        <p>{body}</p>
      </article>
    </Link>
  )
}

export default Article;