import Image from 'next/image'
import illustrationSpace from '../../../../public/image/svg/spaceAinimate.svg'
import { AboutModal } from './aboutModal'

export const BannerMain = () => {
  return (
    <>
      <div className='w-full max-w-screen flex flex-col items-center sm:flex-row sm:flex-wrap lf:flex-nowrap sm:justify-center sm:gap-5 2xl:justify-evenly'>
        <div className='w-max sm:min-w-[400px] sm:max-w-[700px]'>
          <Image
            className='w-full 2xl:w-[510px] object-cover'
            src={illustrationSpace}
            alt='Imagem de planetas, meteoros e estrelas'
            priority
          />
        </div>

        <div className='w-full max-w-[570px] flex items-center justify-center flex-col gap-6 sm:min-w-[400px]'>
          <h1 className='text-3xl font-bold tracking-tighter text-center text-text sm:text-5xl'>
            Bem-vindo ao Doutor Universo Blog!
          </h1>
          <p className='text-textPrimary text-xl text-center sm:text-2xl'>
            Explore o cosmos com curiosidades, fenômenos astronômicos e eventos
            celestes em um só lugar. Descubra o universo de forma fascinante!
          </p>
          <div className='w-full max-w-sm sm:max-w-none'>
            <AboutModal />
          </div>
        </div>
      </div>
    </>
  )
}
