import { BannerArticle } from './bannerArticle'
import { BannerMain } from './bannerMain'


export const MainPage = () => {

  return (
    <>
      <section className='flex flex-col gap-10 xl:gap-24 w-[90%]  xl:w-[80%] 2xl:w-[75%] mx-auto mt-0 items-center justify-center'>
        <BannerMain/>
        <div className='border-b w-full'></div>
        <BannerArticle/>
        <div className='border-b w-full'></div>
      </section>
    </>
  )
}