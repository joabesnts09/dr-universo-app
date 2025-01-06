'use client'

import spaceMan from '../../../../public/image/svg/spaceMan.svg'
import { useEffect, useState } from 'react'
import { CardArticle } from '../cardArticle'
import { InputSearcher } from '@/components/inputSearcher'
import { SkeletonCard } from '@/components/articlesPage/cardArticle/skeletonCard'
import Image from 'next/image'

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/articles/`)

        const data: ArticleData[] = await response.json()

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

        <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {loading
            ? Array.from({ length: 9 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : articles?.map((article) => (
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

        {articles.length === 0 && (
          <div className='w-full flex flex-col gap-6 items-center justify-center'>
            <h2 className='text-2xl font-bold tracking-tighter text-center text-text sm:text-5xl'>
            &#x1F914; Nenhum artigo encontrado!
            </h2>
            <div className='w-full sm:min-w-[400px] sm:max-w-[700px] lg:w-[60%]'>
              <Image
                className='w-full 2xl:w-[700px] object-cover'
                src={spaceMan}
                alt='Imagem de um astronauta'
                priority
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
