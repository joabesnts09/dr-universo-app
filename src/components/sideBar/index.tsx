'use client'
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
} from '@/components/ui/tooltip'
import { ThemeSwitcher } from '../themeSwitcher'
import { useState } from 'react'

export const SideBar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  const [pageSelected, setPageSelected] = useState<boolean>(false)

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
  const handlePageMenu = () => {
    setPageSelected(!pageSelected)
  }

  return (
    <>
      <div className='flex w-full flex-col '>
        <aside
          className={`fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col 
          ${openSidebar && 'w-[300px] '}
          `}
        >
          <nav
            className={`w-full flex flex-col gap-4 px-2 py-5 
            ${openSidebar ? 'items-start' : 'items-center'}
            `}
          >
            <TooltipProvider>
              <div className='w-full h-max'>
                <Button
                  className='h-9 w-full flex gap-4 shrink-0 items-center justify-start rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-transparent hover:bg-bgBtnColor'
                  onClick={handleOpenSidebar}
                >
                  <PanelLeftOpenIcon
                    className={`h-5 w-5 transition duration-500 ${
                      openSidebar && 'rotate-180'
                    }`}
                  />

                  <p className={`${!openSidebar && 'sr-only'}`}>
                    Abrir / Fechar Sidebar
                  </p>
                </Button>
              </div>

              <div className='border-b w-full'></div>
              <Link
                href='#'
                className={`w-full h-9 flex gap-4 bg-transparent text-lg items-center text-primary-foreground md:text-base`}
                prefetch={false}
              >
                <div className='flex gap-4'>
                  <Image
                    src={LogoMain}
                    alt='logo'
                    className='h-9 w-9 rounded-sm shrink-0'
                  />
                  <p
                    className={`text-muted-foreground transition-colors hover:text-foreground ${
                      !openSidebar && 'sr-only'
                    }`}
                  >
                    Doutor Universo
                  </p>
                </div>
              </Link>

              <div className='border-b w-full'></div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='#'
                    className={`w-full h-9 flex gap-4 shrink-0 items-center justify-start rounded-lg text-muted-foreground transition-colors hover:text-foreground ${'bg-bgBtnColor rounded-lg'}`}
                    prefetch={false}
                  >
                    <div className='flex gap-4 items-center'>
                      <Home className='h-5 w-5 mx-2' />
                      <p className={`${!openSidebar && 'sr-only'}`}>Início</p>
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side='right'
                  className={`${openSidebar && 'sr-only'}`}
                >
                  Início
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='#'
                    className='w-full h-9 flex gap-4 shrink-0 items-center justify-start rounded-lg text-muted-foreground transition-colors hover:text-foreground '
                    prefetch={false}
                  >
                    <div className='flex gap-4 items-center'>
                      <CalendarCheck className='h-5 w-5 mx-2' />
                      <p className={`${!openSidebar && 'sr-only'}`}>
                        Calendário de Eventos
                      </p>
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side='right'
                  className={`${openSidebar && 'sr-only'}`}
                >
                  Calendário de Eventos
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='#'
                    className='h-9 w-full flex gap-4 shrink-0 items-center justify-start rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                    prefetch={false}
                  >
                    <div className='flex gap-4 items-center'>
                      <BookMinus className='h-5 w-5 mx-2' />
                      <p className={`${!openSidebar && 'sr-only'}`}>Artigos</p>
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side='right'
                  className={`${openSidebar && 'sr-only'}`}
                >
                  Artigos
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='#'
                    className='h-9 w-full flex gap-4 shrink-0 items-center justify-start rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                    prefetch={false}
                  >
                    <div className='flex gap-4 items-center'>
                      <Contact2 className='h-5 w-5 mx-2' />
                      <p className={`${!openSidebar && 'sr-only'}`}>Contatos</p>
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side='right'
                  className={`${openSidebar && 'sr-only'}`}
                >
                  Contatos
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className='border-b w-full'></div>

            <ThemeSwitcher openSidebar={openSidebar} />
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
                  <div className='flex items-center justify-start gap-4'>
                    <Link
                      href='#'
                      className='w-10 h-10 flex bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base'
                      prefetch={false}
                    >
                      <Image
                        src={LogoMain}
                        alt='logo'
                        className='rounded-lg shrink-0'
                      />
                      <span className='sr-only'>Logo do site</span>
                    </Link>
                    <p className='text-muted-foreground hover:text-foreground'>
                      Doutor Universo
                    </p>
                  </div>

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
