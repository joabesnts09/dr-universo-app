import { BannerArticle } from './bannerArticle'
import { BannerMain } from './bannerMain'


export const MainPage = () => {

  return (
    <>
      <section className='flex flex-col gap-16 w-[90%] mx-auto mt-0 items-center justify-center'>
        <BannerMain/>
        <BannerArticle/>
      </section>
    </>
  )
}