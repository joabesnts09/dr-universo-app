'use client'
import { useTheme } from 'next-themes'
import { EventModal } from '../eventModal'

interface ICalendarCardProps {
  title: string
  date: string
  time: string
  day: string
  month: string
}

export const CalendarEvent = ({
  title,
  date,
  time,
  day,
  month,
}: ICalendarCardProps) => {
  const { theme } = useTheme()

  return (
    <>
      <div
        className={`flex flex-col w-[260px] h-[380px] md:w-[300px] md:h-[420px] lg:w-[360px] lg:h-[480px] rounded-3xl shadow-xl overflow-hidden border ${
          theme === 'dark'
            ? 'border-gray-800 bg-gray-900'
            : 'border-gray-200 bg-white'
        }`}
      >
        <div
          className={`relative flex items-center justify-center h-[40%] ${
            theme === 'dark'
              ? 'bg-gray-900 text-purple-300'
              : 'bg-gradient-to-br from-purple-300 via-white to-purple-100 text-purple-600'
          }`}
        >
          <div
            className={`absolute inset-0 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-purple-800 via-gray-900 to-indigo-800'
                : 'bg-gradient-to-br from-purple-400 via-white to-purple-200 blur-2xl opacity-30'
            }`}
          ></div>
          <h2
            className={`z-10 text-[50px] md:text-[60px] lg:text-[80px] font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-purple-600'
            }`}
          >
            {day}<span className={theme === 'dark' ? 'text-purple-200' : 'text-purple-400'}>/</span>{month}
          </h2>
        </div>

        <div className='flex flex-col justify-between flex-grow p-6'>
          <div>
            <h3
              className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-purple-700'
              }`}
            >
              {title}
            </h3>
            <p
              className={`mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {date} - {time}
            </p>
          </div>

          <div className='mt-4 flex gap-4 flex-col-reverse justify-between items-center'>
            <EventModal
              title={title}
              date={date}
              time={time}
              imgUrl='https://images-assets.nasa.gov/image/PIA00404/PIA00404~medium.jpg'
              description="Aqui estão mais detalhes sobre o evento, como descrição completa, informações adicionais, etc."
            />
            {/* <button
              className={`w-full py-2 px-4 rounded-full font-medium shadow-md hover:shadow-lg ${
                theme === 'dark'
                  ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              } transition-all`}
            >
              Saber mais
            </button> */}
            <div
              className={`flex items-center gap-2 text-sm ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
              }`}
            >
              <span>📅</span>
              <span>Veja mais detalhes sobre o evento.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
