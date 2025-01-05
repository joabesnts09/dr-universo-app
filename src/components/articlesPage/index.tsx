import { CardList } from './cardsList'

export const ArticlesPage = () => {

  return (
    <>
      <section className='flex flex-col gap-10 xl:gap-24 w-[90%]  xl:w-[80%] 2xl:w-[75%] mx-auto mt-0 items-center justify-center'>
        <div className='w-full flex flex-col gap-8 pb-10'>

          <CardList />

        </div>
      </section>
    </>
  )
}
