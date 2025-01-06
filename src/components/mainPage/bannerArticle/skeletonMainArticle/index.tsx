import { Skeleton } from '@/components/ui/skeleton'

export const SkeletonMainArticle = () => {
  return (
    <>
      <div className='w-full pl-4'>
        <div className='w-full flex sm:hidden'>
          <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>

            <div className='rounded-xl overflow-hidden'>
              <Skeleton className='w-full h-[250px] object-cover bg-purple-300/50 dark:bg-purple-700/30' />
            </div>

            <div className='flex items-center justify-center h-[96px]'>
              <Skeleton className='w-2/3 h-6 bg-purple-300/50 dark:bg-purple-700/30' />
            </div>

            <div>
              <Skeleton className='w-full h-10 bg-purple-400/50 dark:bg-purple-800/30 rounded-lg' />
            </div>
          </div>
        </div>

        <div className='w-full hidden sm:flex'>
          <div className='w-full'>
            <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
              <div className='rounded-xl overflow-hidden'>
                <Skeleton className='w-full h-[310px] md:h-[200px] lg:h-[170px] xl:h-[200px] 2xl:h-[250px] object-cover bg-purple-300/50 dark:bg-purple-700/30' />
              </div>

              <div className='flex items-start justify-center h-[96px]'>
                <Skeleton className='w-3/4 h-6 bg-purple-300/50 dark:bg-purple-700/30' />
              </div>

              <div>
                <Skeleton className='w-full h-10 bg-purple-400/50 dark:bg-purple-800/30 rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
