'use client'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
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
import useHandleModal from '@/hooks/useSideBar'
import { PanelLeftIcon } from '../svg/panelLeft'
import { HomeMenuIcon } from '../svg/menuHome'
import { BookMenuIcon } from '../svg/bookMenu'
import { CalendarCheckIcon } from '../svg/calendarCheck'
import { ContactPersonIcon } from '../svg/contactPerson'

export const SideBar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  const [pageSelected, setPageSelected] = useState<boolean>(false)
  const modalId: string = 'sidebarId'

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
  const handlePageMenu = () => {
    setPageSelected(!pageSelected)
  }


  useHandleModal('sidebarId', setOpenSidebar)

  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'Calendar', path: '/calendar' },
  ]

  return (
    <>
      <div className='flex w-full flex-col '>
        <aside
          id={modalId}
          className={`fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col 
          ${openSidebar && 'w-[300px] '}
          transition-all duration-200 ease-out
          `}
        >
          <nav
            className={`w-full flex flex-col gap-4 px-2 py-5 
            ${openSidebar ? 'items-start' : 'items-center'}
            transition-all duration-300 ease-in
            `}
          >
            <TooltipProvider>
              <div className='w-full h-max'>
                <Button
                  className={`h-9 w-full flex gap-4 shrink-0 items-center justify-start rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-transparent hover:bg-hoverBgBtn ${
                    openSidebar ? 'justify-start' : 'justify-center'
                  }`}
                  onClick={handleOpenSidebar}
                >
                  <PanelLeftIcon
                    className={`h-5 w-5 max-w-5 transition duration-500 ${
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
                href='/'
                className={`w-full h-9 flex gap-4 bg-transparent text-lg items-center text-primary-foreground md:text-base`}
                prefetch={false}
              >
                <div className={`flex gap-4 items-center 
                  ${openSidebar && 'pl-2'}
                  `}>
                  <Image
                    src={LogoMain}
                    alt='logo'
                    className='h-9 w-9 rounded-sm shrink-0'
                  />
                  <p
                    className={`text-muted-foreground transition-colors hover:text-foreground text-nowrap ${
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
                    href='/'
                    className={`w-full h-9 flex gap-4 shrink-0 items-center rounded-lg  transition-colors hover:text-foreground hover:bg-hoverBgBtn ${
                      pageSelected
                        ? 'text-foreground bg-bgBtnColor rounded-lg'
                        : 'text-muted-foreground'
                    }
                    ${openSidebar ? 'justify-start pl-4' : 'justify-center'}
                    ${pathname === menuItems[0].path && 'bg-bgBtnColor'}
                  `}
                    prefetch={false}
                  >
                    <div className='flex gap-4 items-center'>
                      <HomeMenuIcon />
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
                    href='/articles'
                    className={`w-full h-9 flex gap-4 shrink-0 items-center rounded-lg  transition-colors hover:text-foreground hover:bg-hoverBgBtn ${
                      pageSelected
                        ? 'text-foreground bg-bgBtnColor rounded-lg'
                        : 'text-muted-foreground'
                    }
                    ${openSidebar ? 'justify-start pl-4' : 'justify-center'}
                    ${pathname === menuItems[1].path && 'bg-bgBtnColor'}
                    `}
                    prefetch={false}
                  >
                    <div className='flex gap-4 items-center'>
                      <BookMenuIcon />
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
                    href='/calendar'
                    className={`w-full h-9 flex gap-4 shrink-0 items-center rounded-lg  transition-colors hover:text-foreground hover:bg-hoverBgBtn ${
                      pageSelected
                        ? 'text-foreground bg-bgBtnColor rounded-lg'
                        : 'text-muted-foreground'
                    }
                    ${openSidebar ? 'justify-start pl-4' : 'justify-center'}
                    ${pathname === menuItems[2].path && 'bg-bgBtnColor'}
                    `}
                    prefetch={false}
                  >
                    <div className='flex gap-4 items-center'>
                      <CalendarCheckIcon />
                      <p className={`text-nowrap ${!openSidebar && 'sr-only'}`}>
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

              {/* <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='#contacts'
                    className={`w-full h-9 flex gap-4 shrink-0 items-center rounded-lg  transition-colors hover:text-foreground hover:bg-hoverBgBtn ${
                      pageSelected
                        ? 'text-foreground bg-bgBtnColor rounded-lg'
                        : 'text-muted-foreground'
                    }
                    ${openSidebar ? 'justify-start pl-4' : 'justify-center'}
                    `}
                    prefetch={false}
                  >
                    <div className='flex gap-4 items-center'>
                      <ContactPersonIcon />
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
              </Tooltip> */}
            </TooltipProvider>

            <div className='border-b w-full'></div>

            <ThemeSwitcher openSidebar={openSidebar} />
          </nav>
        </aside>

        <div className='sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14 '>
          <header className='fixed w-full top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
            <Sheet>
              <SheetTrigger asChild>
                <Button size='icon' variant='outline' className='sm:hidden'>
                  <PanelLeftIcon
                    className={`h-5 w-5 max-w-5 transition duration-500`}
                  />
                  <span className='sr-only'>Open and Close Menu</span>
                </Button>
              </SheetTrigger>

              <SheetTitle>Menu</SheetTitle>

              <SheetContent side='left' className='sm:max-w-x'>
                <SheetDescription className='sr-only'>
                  Menu mobile
                </SheetDescription>

                <nav className='grid gap-4 text-lg font-medium'>
                  <div className='flex items-center justify-start gap-4 mb-3'>
                    <Link
                      href='/'
                      className={`w-10 h-10 flex bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base `}
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
                    href='/'
                    className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground rounded-lg py-1
                      ${pathname === menuItems[0].path && 'bg-bgBtnColor'}
                      `}
                    prefetch={false}
                  >
                    <HomeMenuIcon className='transition-all' />
                    Início
                  </Link>

                  <Link
                    href='/articles'
                    className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground rounded-lg py-1
                      ${pathname === menuItems[1].path && 'bg-bgBtnColor'}
                      `}
                    prefetch={false}
                  >
                    <BookMenuIcon className='transition-all' />
                    Artigos
                  </Link>

                  <Link
                    href='/calendar'
                    className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground rounded-lg py-1
                      ${pathname === menuItems[2].path && 'bg-bgBtnColor'}
                      `}
                    prefetch={false}
                  >
                    <CalendarCheckIcon className='transition-all' />
                    Calendário de Eventos
                  </Link>

                  {/* <Link
                    href='#'
                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground rounded-lg py-1'
                    prefetch={false}
                  >
                    <ContactPersonIcon className='transition-all' />
                    Contatos
                  </Link> */}

                  <ThemeSwitcher openSidebar={true} />
                </nav>
              </SheetContent>
            </Sheet>
          </header>
        </div>
      </div>
    </>
  )
}
