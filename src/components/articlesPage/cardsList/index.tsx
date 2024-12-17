'use client'

import { useEffect, useState } from 'react'
import { CardArticle } from '../cardArticle';

interface ArticleData {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
  tiktokLink: string;
  kwaiLink: string;
}

export const CardList = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/articles.json");
        const data: ArticleData[] = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {articles.map((article) => (
              <CardArticle
                key={article.id}
                name={article.name}
                date={article.date}
                image={article.image}
                description={article.description}
                tiktokLink={article.tiktokLink}
                kwaiLink={article.kwaiLink}
              />
            ))}
          </div>
    </>
  )
}