import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  BookMinus,
  CalendarCheck,
  Contact2,
  Home,
  PanelLeftOpenIcon,
} from 'lucide-react'
import LogoMain from '../../../public/image/logo/logo1.jpg'
import Image from 'next/image'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip'

export const SideBar = () => {
  return (
    <>
      <div className='flex w-full flex-col '>
        <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col'>
          <nav className='flex flex-col items-center gap-4 px-2 py-5'>
            <TooltipProvider>
              <Link
                href='#'
                className='w-6 h-6 flex bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base'
                prefetch={false}
              >
                <Image
                  src={LogoMain}
                  alt='logo'
                  className='rounded-full shrink-0'
                />
                <span className='sr-only'>Logo do site</span>
              </Link>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='#'
                    className='h-9 w-9 flex shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                    prefetch={false}
                  >
                    <Home className='h-5 w-5' />
                    <span className='sr-only'>Início</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>Início</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='#'
                    className='h-9 w-9 flex shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                    prefetch={false}
                  >
                    <CalendarCheck className='h-5 w-5' />
                    <span className='sr-only'>Calendário de Eventos</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>Calendário de Eventos</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='#'
                    className='h-9 w-9 flex shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                    prefetch={false}
                  >
                    <BookMinus className='h-5 w-5' />
                    <span className='sr-only'>Artigos</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>Artigos</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='#'
                    className='h-9 w-9 flex shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                    prefetch={false}
                  >
                    <Contact2 className='h-5 w-5' />
                    <span className='sr-only'>Contatos</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>Contatos</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>

        <div className='sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14 '>
          <header className='sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
            <Sheet>
              <SheetTrigger asChild>
                <Button size='icon' variant='outline' className='sm:hidden'>
                  <PanelLeftOpenIcon />
                  <span className='sr-only'>Open and Close Menu</span>
                </Button>
              </SheetTrigger>

              <SheetTitle>Menu</SheetTitle>

              <SheetContent side='left' className='sm:max-w-x'>
                <SheetDescription className='sr-only'>
                  Menu mobile
                </SheetDescription>

                <nav className='grid gap-6 text-lg font-medium'>
                  <Link
                    href='#'
                    className='w-10 h-10 flex bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base'
                    prefetch={false}
                  >
                    <Image
                      src={LogoMain}
                      alt='logo'
                      className='rounded-full shrink-0'
                    />
                    <span className='sr-only'>Logo do site</span>
                  </Link>

                  <Link
                    href='#'
                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                    prefetch={false}
                  >
                    <Home className='h-5 w-5 transition-all' />
                    Início
                  </Link>

                  <Link
                    href='#'
                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                    prefetch={false}
                  >
                    <CalendarCheck className='h-5 w-5 transition-all' />
                    Calendário de Eventos
                  </Link>

                  <Link
                    href='#'
                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                    prefetch={false}
                  >
                    <BookMinus className='h-5 w-5 transition-all' />
                    Artigos
                  </Link>

                  <Link
                    href='#'
                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                    prefetch={false}
                  >
                    <Contact2 className='h-5 w-5 transition-all' />
                    Contatos
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </header>
        </div>
      </div>
    </>
  )
}
