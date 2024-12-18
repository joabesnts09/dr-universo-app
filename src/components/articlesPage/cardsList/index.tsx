'use client'

import { useEffect, useState } from 'react'
import { CardArticle } from '../cardArticle'
import { InputSearcher } from '@/components/inputSearcher'

interface ArticleData {
  id: number
  name: string
  date: string
  description: string
  image: string
  tiktokLink: string
  kwaiLink: string
}

export const CardList = () => {
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState(true)
  
  const handleSearch = (value: string) => {
    setSearch(value)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/articles.json')
        const data: ArticleData[] = await response.json()

        console.log(search);
        
        const lowerSearch = search.toLowerCase()
        const filteredArticles: ArticleData[] = data.filter((article) =>
          article.name.toLowerCase().includes(lowerSearch)
        )
        setArticles(filteredArticles)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [search])

  return (
    <>
      <div className='flex flex-col w-full gap-6'>
        <InputSearcher onSearch={handleSearch}/>

        <div className='border-b w-full'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {articles.map((article, index) => (
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
      </div>

    </>
  )
}
