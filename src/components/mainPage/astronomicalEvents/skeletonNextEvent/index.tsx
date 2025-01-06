import { Skeleton } from '@/components/ui/skeleton'

export const SkeletonNextEvent = () => {
  return (
    <>
      <div className='w-full'>
        <div className='w-full md:hidden'>
          <div className='border-0 p-3 sm:p-4 bg-slate-600/20 dark:bg-slate-500/5 rounded-lg'>

            <div className='w-full flex flex-col gap-3 p-0'>

              <div className='w-full'>
                <Skeleton className='w-full max-h-[450px] object-cover rounded-lg h-[250px] bg-purple-300/50 dark:bg-purple-700/30' />
              </div>

              <div>
                <Skeleton className='w-2/3 h-6 bg-purple-300/50 dark:bg-purple-700/30' />
                <Skeleton className='w-1/3 h-4 mt-2 bg-purple-300/50 dark:bg-purple-700/30' />
              </div>
            </div>

            <div className='flex flex-col gap-3 w-full p-6 pt-0'>
              <Skeleton className='w-full h-16 bg-purple-300/50 dark:bg-purple-700/30' />
            </div>

            <div className='flex justify-end'>
              <Skeleton className='w-36 h-10 bg-purple-400/50 dark:bg-purple-800/30 rounded-lg' />
            </div>
          </div>
        </div>

        <div className='hidden md:flex w-full'>
          <div className='flex w-full p-6 bg-slate-600/20 dark:bg-slate-500/5 rounded-lg justify-between items-center'>
            <div className='w-full'>
              <div className='w-full max-w-[450px] 2xl:max-w-[550px] max-h-[400px] 2xl:max-h-[500px]'>
                <Skeleton className='w-full max-h-[450px] object-cover rounded-lg h-[250px] bg-purple-300/50 dark:bg-purple-700/30' />
              </div>
            </div>

            <div className='w-1/2'>
              <div className='flex flex-col gap-3 w-full pl-6'>
                <div>
                  <Skeleton className='w-3/4 h-8 bg-purple-300/50 dark:bg-purple-700/30' />
                  <Skeleton className='w-1/2 h-4 mt-2 bg-purple-300/50 dark:bg-purple-700/30' />
                </div>

                <Skeleton className='w-full h-16 mt-4 bg-purple-300/50 dark:bg-purple-700/30' />

                <div className='flex gap-4 items-center justify-end'>
                  <Skeleton className='w-36 h-10 bg-purple-400/50 dark:bg-purple-800/30 rounded-lg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
