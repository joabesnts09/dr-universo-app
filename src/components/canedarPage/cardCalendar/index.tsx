'use client'

import { useTheme } from 'next-themes'
import { EventModal } from '../eventModal'
import { NegativeEvent } from './negativeEvent'

interface IEventDetailsModalProps {
  name: string
  description: string
  imgUrl: string
  dateEvent: string
  timeEvent: string
}

export const CardCalendar = ({
  name,
  description,
  imgUrl,
  dateEvent,
  timeEvent,
}: IEventDetailsModalProps) => {
  const { theme } = useTheme()

  const eventDate = new Date(dateEvent.split('-').reverse().join('-'))
  const currentDate = new Date()

  const isFutureEvent = eventDate > currentDate

  const truncatedText =
    description.length > 60 ? `${description.substring(0, 60)}...` : description

  return (
    <>
      <div
        className={`relative flex flex-col lg:flex-row w-full ${
          !isFutureEvent && 'border-b-8 border-red-500 rounded-b-[.8rem]'}`}
      >
        {!isFutureEvent && <NegativeEvent />}
        <div
          className={`w-full lg:w-1/3 p-6 flex items-center justify-center rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 text-white'
              : 'bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 text-purple-900'
          }`}
        >
          <h2 className='text-4xl font-extrabold tracking-tight text-center lg:text-left'>
            {dateEvent.split('-')[0]}
            <span className='text-purple-400'>/</span>
            {dateEvent.split('-')[1]}
          </h2>
        </div>

        <div
          className={`w-full lg:w-2/3 p-6 flex flex-col justify-between bg-white ${
            theme === 'dark' ? 'shadow-lg' : 'shadow-xl'
          } rounded-b-lg lg:rounded-b-none lg:rounded-r-lg`}
        >
          <div>
            <h2 className='text-2xl font-bold text-purple-900 mb-2'>{name}</h2>
            <p className='text-gray-700'>{truncatedText}</p>
          </div>

          <div className='flex items-center justify-between mt-4 lg:justify-end'>
            <EventModal
              title={name}
              description={description}
              date={dateEvent.replace(/-/g, '/')}
              time={timeEvent}
              imgUrl={imgUrl}
            />
          </div>
        </div>
      </div>
    </>
  )
}
