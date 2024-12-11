import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const AstronomicalEvents = () => {
  return (
    <>
      <div className='flex flex-col gap-10 '>
        <div>
          <h2 className='text-3xl font-bold tracking-tighter text-center text-textPrimary sm:text-4xl'>
            Próximo evento astronômico
          </h2>
        </div>

        <div className='md:hidden'>
          <Card className='border-0 p-3 sm:p-4 bg-slate-600/20 dark:bg-slate-500/5 rounded-lg'>
            <CardContent className='w-full flex flex-col gap-3 p-0'>
              <div className='w-full'>
                <img
                  className='w-full rounded-t-lg'
                  src='https://images-assets.nasa.gov/image/PIA00404/PIA00404~medium.jpg'
                  alt='Lua'
                />
              </div>

              <CardHeader>
                <CardTitle>Eclipse Lunar</CardTitle>
                <CardDescription>Dia: 22/12/2024</CardDescription>
              </CardHeader>
            </CardContent>
            <div className='flex flex-col gap-3 w-full p-6 pt-0'>
              <p>
                A cena mais intensa de um eclipse solar, que aconteceu em 1969.
                O eclipse lunar foi o maior feito em um eclipse solar desde o
                início da história da astronomia.
              </p>
            </div>

            <CardFooter className='flex gap-4'>
              <Button className='w-max bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100 font-bold'>
                Ver mais...
              </Button>
              <Button className='w-max bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100 font-bold'>
                Todos eventos
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className='hidden md:flex'>
          <div className='flex w-full p-6 bg-slate-600/20 dark:bg-slate-500/5 rounded-lg justify-between items-center'>
            <div className='w-max'>
              <div className='w-full max-w-[350px] 2xl:max-w-[450px]'>
                  <img
                    className='w-ful object-cover rounded-lg'
                    src='https://images-assets.nasa.gov/image/PIA00404/PIA00404~medium.jpg'
                    alt='Lua'
                  />
                </div>
            </div>

            <div className='w-1/2'>
              <div className='flex flex-col gap-3 w-full pl-6'>
                
                <div>
                    <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-bold tracking-tighter text-textPrimary text-[#b996ff]'>Eclipse Lunar</h2>
                    <p className='font-bold text-[1rem] 2xl:text-xl'>Dia: 22/12/2024</p>
                </div>
                
                <p className='text-sm lg:text-[1rem] 2xl:text-xl'>
                  A cena mais intensa de um eclipse solar, que aconteceu em 1969.
                  O eclipse lunar foi o maior feito em um eclipse solar desde o
                  início da história da astronomia.
                  A cena mais intensa de um eclipse solar, que aconteceu em 1969.
                  O eclipse lunar foi o maior feito em um eclipse solar desde o
                  início da história da astronomia.
                  A cena mais intensa de um eclipse solar, que aconteceu em 1969.
                  O eclipse lunar foi o maior feito em um eclipse solar desde o
                  início da história da astronomia.
                </p>

                <div className='flex gap-4 items-center justify-end'>
                  <Button className='w-max bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100 font-bold'>
                    Ver mais...
                  </Button>
                  <Button className='w-max bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100 font-bold'>
                    Todos eventos
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
