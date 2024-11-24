import { BannerMain } from './bannerMain'
import bgPilares from '../../../public/image/bg/pilaresBg.png'

export const MainPage = () => {
// bg-[url(''../../../../public/image/bg/pilaresBg.png'')] bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center
  return (
    <>
      {/* <section className="bg-[url('/image/bg/pilaresBg.png')] bg-center bg-cover bg-no-repeat bg-fixed h-[400px] w-full flex items-center justify-center"> */}
      <section className='w-[90%] mx-auto mt-0'>
        <BannerMain/>
      </section>
    </>
  )
}