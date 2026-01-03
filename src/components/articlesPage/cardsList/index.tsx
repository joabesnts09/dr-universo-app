'use client'

import { useEffect, useState } from 'react'
import { CardArticle } from '../cardArticle'
import { InputSearcher } from '@/components/inputSearcher'
import { SkeletonCard } from '@/components/articlesPage/cardArticle/skeletonCard'
import { NoArticles } from '@/components/noEmptys/noArtigos'

interface ArticleData {
  id: number
  name: string
  date: string
  description: string
  imgUrl: string
  tiktokLink: string
  kwaiLink: string
}

export const CardList = () => {
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState(true)

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
        const response = await fetch(`${apiUrl}api/articles/`)

        if (!response.ok) {
          setArticles([])
          return
        }

        const contentType = response.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
          setArticles([])
          return
        }

        const data: ArticleData[] = await response.json()

        const lowerSearch = search.toLowerCase()
        const filteredArticles: ArticleData[] = data.filter((article) =>
          article.name.toLowerCase().includes(lowerSearch)
        )
        setArticles(filteredArticles)
      } catch {
        setArticles([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [search])

  return (
    <>
      <div className='flex flex-col w-full gap-6 mt-6 mb-10 lg:my-10'>
        <div className='flex w-full items-center justify-between'>
          <h1 className='hidden lg:flex text-purple-600 dark:text-purple-200 text-3xl font-bold'>
            Artigos Recentes
          </h1>
          <InputSearcher
            onSearch={handleSearch}
            placeholder='Buscar Artigo...'
          />
        </div>

        <div className='border-b w-full'></div>

        {loading ? (
          <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : articles.length > 0 ? (
          <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {articles.map((article) => (
              <CardArticle
                key={article.id}
                name={article.name}
                date={article.date}
                imgUrl={article.imgUrl}
                description={article.description}
                tiktokLink={article.tiktokLink}
                kwaiLink={article.kwaiLink}
              />
            ))}
          </div>
        ) : (
          <NoArticles />
        )}
      </div>
    </>
  )
}
