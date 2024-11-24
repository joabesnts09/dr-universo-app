import Image from 'next/image'
import Link from 'next/link'
import illustrationSpace from '../../../../public/image/svg/spaceAinimate.svg'
import { Button } from '@/components/ui/button'

export const BannerMain = () => {
  return (
    <>
      <div className='flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5'>
        <div className='w-max max-w-[400px] sm:min-w-[400px] sm:max-w-[700px]'>
          <Image className='' src={illustrationSpace} alt='' />
        </div>

        <div className='w-full max-w-[570px] flex items-center justify-center flex-col gap-6 sm:min-w-[400px]'>
          <h1 className='text-3xl font-bold tracking-tighter text-center text-titlePrimary sm:text-5xl'>
            Bem vindo ao Doutor Uiverso Blog!
          </h1>
          <p className='text-textPrimary text-xl text-center sm:text-2xl'>
            Explore o cosmos com curiosidades, fenômenos astronômicos e eventos
            celestes em um só lugar. Descubra o universo de forma fascinante!
          </p>
          <Link className='w-full max-w-sm sm:max-w-none' href='#'>
            <Button className='w-full bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100 text-lg py-6'>
              <p className='font-semibold'>Discover Doctors</p>
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
