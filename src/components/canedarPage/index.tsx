import { CardCalendar } from './cardCalendar'
import { EventsList } from './eventsList'

export const CalendarPage = () => {
    

  return (
    <>
      <section className='flex flex-col gap-10 xl:gap-24 w-[90%]  xl:w-[80%] 2xl:w-[75%] mx-auto mt-0 items-center justify-center'>
        <div className='w-full flex flex-col gap-8'>
          <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
            
            <EventsList />
        
          </div>

        </div>
      </section>
    </>
  )
}
