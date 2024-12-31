import Image from 'next/image'
import imageNotFound from '../../../public/image/svg/404Image.svg'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const NotFoundPage = () => {
  return (
    <>
      <section className='flex flex-col gap-10 xl:gap-24 w-[90%]  xl:w-[80%] 2xl:w-[75%] mx-auto mt-0 items-center justify-center'>
        <div className='flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 items-center justify-center h-screen'>
          <div className='lg:w-[40%] flex flex-col items-center lg:items-start justify-center gap-4'>
            <div className='flex flex-col items-center lg:items-start justify-center gap-4'>
              <h1 className='w-max text-3xl font-bold tracking-tighter text-center lg:text-start text-text sm:text-5xl'>
                Ooops !
              </h1>
              <p className='text-textPrimary text-xl text-center lg:text-start sm:text-2xl text-wrap max-w-[470px]'>
                Parece que você se perdeu no universo... Vamos te levar de
                volta!
              </p>
            </div>

            <div className='flex flex-col items-center lg:items-start justify-center'>
              <Link href='/' className='w-max'>
                <Button className='w-full px-7 sm:px-10 md:px-20 bg-btnViolet py-8 hover:bg-btnVioletHover transition-colors delay-100 text-lg'>
                  <p className='font-semibold'>Voltar para a página inicial</p>
                </Button>
              </Link>
            </div>
          </div>

          <div className='w-max sm:min-w-[400px] sm:max-w-[700px] lg:w-[60%]'>
            <Image
              className='w-full 2xl:w-[700px] object-cover'
              src={imageNotFound}
              alt='Imagem de planetas, meteoros e estrelas'
              priority
            />
          </div>
        </div>
      </section>
    </>
  )
}
