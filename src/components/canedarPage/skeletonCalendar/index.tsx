import { Skeleton } from '@/components/ui/skeleton'
import { useTheme } from 'next-themes'

export const SkeletonCalendar = () => {
  const { theme } = useTheme()

  return (
    <>
      <div className='flex flex-col lg:flex-row w-full'>
        <div
          className={`w-full lg:w-1/3 p-6 flex items-center justify-center rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 text-white'
              : 'bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 text-purple-900'
          }`}
        >
          <Skeleton className='h-16 w-16 rounded-lg' />
        </div>

        <div
          className={`w-full lg:w-2/3 p-6 flex flex-col justify-between bg-white ${
            theme === 'dark'
              ? 'shadow-lg bg-gray-800 text-white'
              : 'shadow-xl bg-gray-100 text-black'
          } rounded-b-lg lg:rounded-b-none lg:rounded-r-lg`}
        >
          <div>
            <Skeleton className='h-8 w-3/4 mb-4 rounded-md' />
            <Skeleton className='h-4 w-full mb-2 rounded-md' />
            <Skeleton className='h-4 w-5/6 rounded-md' />
          </div>

          <div className='flex items-center justify-between mt-4 lg:justify-end'>
            <Skeleton className='h-10 w-32 rounded-md' />
          </div>
        </div>
      </div>
    </>
  )
}
