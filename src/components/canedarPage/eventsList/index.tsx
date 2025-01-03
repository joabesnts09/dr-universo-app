'use client'
import { InputSearcher } from '@/components/inputSearcher'
import { useEffect, useState } from 'react'
import { CardCalendar } from '../cardCalendar'
import { SkeletonCalendar } from '../skeletonCalendar'

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

        const response = await fetch(`http://127.0.0.1:8000/api/events/`)
        const data: IEventsProps[] = await response.json()

        const lowerSearch = search.toLowerCase()
        const filteredArticles: IEventsProps[] = data.filter((article) =>
          article.name.toLowerCase().includes(lowerSearch)
        )
        setEventsData(filteredArticles)
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
        <div className='flex items-center justify-between'>
          <h1 className='hidden lg:flex text-purple-600 dark:text-purple-200 text-3xl font-bold'>
            Eventos astronomicos de 2025
          </h1>
          <InputSearcher onSearch={handleSearch} placeholder='Buscar Evento...' />
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
      </div>
    </>
  )
}
