
import Image from 'next/image'
import solarSystem from '../../../public/image/svg/solarSystem.svg'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const NoEvents = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-center w-full'>
      <div className='w-max sm:min-w-[400px] sm:max-w-[700px] lg:w-[50%]'>
        <Image
          className='w-full 2xl:w-[510px] object-cover'
          src={solarSystem}
          alt='Ilustração do sistema solar'
          priority
        />
      </div>

      <div className='lg:w-[50%] flex flex-col items-center lg:items-start justify-center gap-4'>
        <div className='flex flex-col items-center lg:items-start justify-center gap-4'>
          <h1 className='w-max text-3xl font-bold tracking-tighter text-center lg:text-start text-titlePrimary sm:text-5xl'>
            Nenhum evento encontrado
          </h1>
          <div className='w-full h-px bg-border'></div>
          <p className='text-textPrimary text-xl text-center lg:text-start sm:text-2xl text-wrap max-w-[470px]'>
            No momento, não há eventos astronômicos próximos.
          </p>
        </div>

        <div className='flex flex-col items-center lg:items-start justify-center'>
          <Link href='/calendar' className='w-max'>
            <Button className='w-full px-7 sm:px-10 md:px-20 bg-btnViolet py-8 hover:bg-btnVioletHover transition-colors delay-100 text-lg'>
              <p className='font-semibold'>Ver todos eventos</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}