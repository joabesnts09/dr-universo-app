'use client'
import spaceMan from '../../../../public/image/svg/spaceMan.svg'
import { InputSearcher } from '@/components/inputSearcher'
import { useEffect, useState } from 'react'
import { CardCalendar } from '../cardCalendar'
import { SkeletonCalendar } from '../skeletonCalendar'
import Image from 'next/image'

interface IEventsProps {
  id: string
  name: string
  description: string
  imgUrl: string
  dateEvent: string
  timeEvent: string
}

export const EventsList = () => {
  const [eventsData, setEventsData] = useState<IEventsProps[]>([])
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
        const response = await fetch(
          `${apiUrl}api/events/`
        )

        if (!response.ok) {
          setEventsData([])
          return
        }

        const contentType = response.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
          setEventsData([])
          return
        }

        const data: IEventsProps[] = await response.json()

        const lowerSearch = search.toLowerCase()
        const filteredArticles: IEventsProps[] = data.filter((article) =>
          article.name.toLowerCase().includes(lowerSearch)
        )
        setEventsData(filteredArticles)
      } catch (error) {
        setEventsData([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [search])

  return (
    <>
      <div className='flex flex-col w-full gap-6 mt-6 mb-10 lg:my-10'>
        <div className='flex items-center justify-between'>
          <h1 className='hidden lg:flex text-purple-600 dark:text-purple-200 text-3xl font-bold'>
            Eventos astronomicos de 2025
          </h1>
          <InputSearcher
            onSearch={handleSearch}
            placeholder='Buscar Evento...'
          />
        </div>

        <div className='border-b w-full'></div>

        <div className='w-full flex flex-col gap-4'>
          {loading
            ? Array.from({ length: 9 }).map((_, index) => (
                <SkeletonCalendar key={index} />
              ))
            : eventsData?.map((events) => (
                <CardCalendar
                  key={events.id}
                  name={events.name}
                  description={events.description}
                  imgUrl={events.imgUrl}
                  dateEvent={events.dateEvent}
                  timeEvent={events.timeEvent}
                />
              ))}
        </div>

        {eventsData.length === 0 && (
          <div className='w-full flex flex-col gap-6 items-center justify-center'>
            <h2 className='text-2xl font-bold tracking-tighter text-center text-text sm:text-5xl'>
              &#x1F914; Nenhum evento encontrado!
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
