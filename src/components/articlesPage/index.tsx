import { InputSearcher } from './inputSearcher'

export const ArticlesPage = () => {

  return (
    <>
      <section className='flex flex-col gap-10 xl:gap-24 w-[90%]  xl:w-[80%] 2xl:w-[75%] mx-auto mt-0 items-center justify-center'>
        {/* <div className='border-b w-full'></div> */}
        <div>
          <InputSearcher />
        </div>
      </section>
    </>
  )
}