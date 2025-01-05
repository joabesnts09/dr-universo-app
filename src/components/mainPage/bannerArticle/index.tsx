'use client'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'
import Articles from '../../../app/articles/page'

interface IArticleData {
  id: number
  name: string
  date: string
  description: string
  imgUrl: string
  tiktokLink: string
  kwaiLink: string
}

export const BannerArticle = () => {
  const [articles, setArticles] = useState<IArticleData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('http://127.0.0.1:8000/api/articles/')
        const data: IArticleData[] = await response.json()

        setArticles(data)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [articles])

  return (
    <>
      <div className='flex flex-col w-full gap-10 xl:gap-16'>
        <div>
          <h2 className='text-3xl font-bold tracking-tighter text-center text-textPrimary sm:text-4xl'>
            Confira os ultimos artigos postados.
          </h2>
        </div>

        <div className='flex max-w-screen h-max sm:hidden'>
          <Carousel
            className='w-full'
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {articles.slice(0, 3).map((article) => (
                <CarouselItem key={article.id}>
                  <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                    <div className='rounded-xl overflow-hidden'>
                      <Image
                        className='w-full h-[250px] object-cover'
                        src={article.imgUrl}
                        alt={article.name || 'Article Image'}
                        width={0} 
                        height={0} 
                        sizes='100vw'
                      />
                    </div>

                    <div className='flex items-center justify-center h-[96px]'>
                      <h3 className='text-2xl font-bold tracking-tighter'>
                        {article.name}
                      </h3>
                    </div>

                    <div>
                      <Link href='/articles' className='w-full'>
                        <Button className='w-full bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100'>
                          <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                            Ver mais...
                          </p>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className='hidden sm:flex'>
          <Carousel
            className='w-full'
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              
            {articles.slice(0, 5).map((article) => (

              <CarouselItem key={article.id} className='md:basis-1/2 lg:basis-1/3'>
                <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                <div className='rounded-xl overflow-hidden'>
                      <Image
                        className='w-full h-[310px] md:h-[200px] lg:h-[170px] xl:h-[200px] 2xl:h-[250px] object-cover'
                        src={article.imgUrl}
                        alt={article.name || 'Article Image'}
                        width={0} 
                        height={0} 
                        sizes='100vw'
                      />
                    </div>

                  <div className='flex items-start justify-center h-[96px]'>
                    <h3 className='text-2xl font-bold tracking-tighter'>
                      {article.name}
                    </h3>
                  </div>

                  <div>
                    <Link href='/articles' className='w-full'>
                      <Button className='w-full bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100'>
                        <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                          Ver mais...
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  )
}
