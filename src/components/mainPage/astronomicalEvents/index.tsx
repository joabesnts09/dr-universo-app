'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SkeletonNextEvent } from './skeletonNextEvent'

interface IEventsProps {
  id: string
  name: string
  description: string
  imgUrl: string
  dateEvent: string
  timeEvent: string
}

export const AstronomicalEvents = () => {
  const [eventsData, setEventsData] = useState<IEventsProps[]>([])
  const [filteredEvent, setFilteredEvent] = useState<IEventsProps | null>(null)
  const [loading, setLoading] = useState(true)

  const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split('-').map(Number)
    return new Date(year, month - 1, day)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}api/events/`
        )

        const data: IEventsProps[] = await response.json()

        setEventsData(data)

        const currentDate = new Date()

        const futureEvents = data.filter((event) => {
          const eventDate = parseDate(event.dateEvent)
          return eventDate >= currentDate
        })

        const closestEvent = futureEvents.reduce((prev, curr) => {
          const prevDate = parseDate(prev.dateEvent)
          const currDate = parseDate(curr.dateEvent)
          return currDate < prevDate ? curr : prev
        }, futureEvents[0])

        setFilteredEvent(closestEvent)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className='w-full flex flex-col gap-10 '>
        <div>
          <h2 className='text-3xl font-bold tracking-tighter text-center text-textPrimary sm:text-4xl'>
            Próximo evento astronômico
          </h2>
        </div>

        <div className='md:hidden'>
          {loading ? (
            <SkeletonNextEvent />
          ) : (
            <Card className='border-0 p-3 sm:p-4 bg-slate-600/20 dark:bg-slate-500/5 rounded-lg'>
              <CardContent className='w-full flex flex-col gap-3 p-0'>
                <div className='w-full'>
                  <Image
                    className='w-full max-h-[450px] object-cover rounded-lg'
                    src={filteredEvent?.imgUrl || '/path-to-default-image.jpg'}
                    alt={filteredEvent?.name || 'Event Image'}
                    width={0}
                    height={0}
                    sizes='100vw'
                    layout='responsive'
                  />
                </div>

                <CardHeader>
                  <CardTitle>{filteredEvent?.name}</CardTitle>
                  <CardDescription>
                    Dia: {filteredEvent?.dateEvent.replace(/-/g, '/')}
                  </CardDescription>
                </CardHeader>
              </CardContent>
              <div className='flex flex-col gap-3 w-full p-6 pt-0'>
                <p>{filteredEvent?.description}</p>
              </div>

              <CardFooter className='flex justify-end'>
                <Button className='w-max bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100 font-bold'>
                  Todos eventos
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div className='hidden md:flex w-full'>
          {loading ? (
            <SkeletonNextEvent />
          ) : (
            <div className='flex w-full p-6 bg-slate-600/20 dark:bg-slate-500/5 rounded-lg justify-between items-center'>
              <div className='w-max'>
                <div className='w-full max-w-[450px] 2xl:max-w-[550px] '>
                  <Image
                    className='w-full max-h-[450px] object-cover rounded-lg'
                    src={filteredEvent?.imgUrl || '/path-to-default-image.jpg'}
                    alt={filteredEvent?.name || 'Event Image'}
                    width={0}
                    height={0}
                    sizes='100vw'
                    layout='responsive'
                  />
                </div>
              </div>

              <div className='w-1/2'>
                <div className='flex flex-col gap-3 w-full pl-6'>
                  <div>
                    <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-bold tracking-tighter text-textPrimary text-[#b996ff]'>
                      {filteredEvent?.name}
                    </h2>
                    <p className='font-bold text-[1rem] 2xl:text-xl'>
                      Dia: {filteredEvent?.dateEvent.replace(/-/g, '/')}
                    </p>
                  </div>

                  <p className='text-sm lg:text-[1rem] 2xl:text-xl'>
                    {filteredEvent?.description}
                  </p>

                  <div className='flex gap-4 items-center justify-end'>
                    <Link href='/calendar'>
                      <Button className='w-max bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100 font-bold'>
                        Ver todos eventos
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
