import { Skeleton } from '../../../ui/skeleton'

export const SkeletonCard = () => {
  return (
    <>
      <div className='max-w-md w-full mx-auto bg-background border border-borderColor rounded-lg shadow-lg overflow-hidden flex flex-col'>
        <div className='relative w-full sm:min-w-[290px] sm:max-w-[500px] 2xl:w-[500px] h-48 bg-secondary'>
          <Skeleton className='w-full h-full rounded-t-md' />
        </div>

        <div className='flex flex-col flex-1 p-5 text-foreground'>
          <Skeleton className='w-3/4 h-6 mb-2' /> 
          <Skeleton className='w-1/2 h-5 mb-2' />
          <Skeleton className='w-full h-16 mb-4' /> 
        </div>

        <div className='flex items-center justify-start gap-4 p-5 bg-background'>
          <Skeleton className='w-24 h-10 rounded-md' />
          <Skeleton className='w-24 h-10 rounded-md' />
        </div>
      </div>
    </>
  )
}
