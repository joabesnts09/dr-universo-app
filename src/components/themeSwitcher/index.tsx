'use client'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { SunIcon } from '../svg/sun'
import { MoonIcon } from '../svg/moon'

interface IThemeSwitcherProps {
  openSidebar: boolean
}

export const ThemeSwitcher = ({ openSidebar }: IThemeSwitcherProps) => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {openSidebar ? (
        <div className={`w-full flex justify-between items-center rounded-lg py-2 px-4
        ${theme === 'dark'
          ? ' bg-gray-700 hover:bg-gray-500'
          : ' bg-yellow-200 hover:bg-yellow-100'}`}>

          <div className='flex items-center gap-4'>
            {
              theme === 'dark'? (
                <>
                  <MoonIcon />
                  <p className='text-base font-bold text-nowrap'>Tema escuro</p>
                </>
              ) : (
                <>
                  <SunIcon />
                  <p className='text-base font-bold text-nowrap'>Tema claro</p>
                </>
              )
            }

          </div>

          <label className='flex items-center cursor-pointer'>
            <div
              className={`
        relative w-14 h-8 flex items-center rounded-full p-1 
        ${
          theme === 'dark'
            ? 'justify-end bg-gray-600'
            : 'justify-start bg-yellow-300'
        }`}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <MoonIcon className={`absolute left-1 h-5 w-5 max-w-5 transition-opacity ${
                  theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}/>

              <div className='w-6 h-6 bg-white rounded-full shadow-md transition-transform'></div>
                
                <SunIcon className={`absolute right-1 h-5 w-5 max-w-5 transition-opacity ${
                  theme === 'dark' ? 'opacity-0' : 'opacity-100'
                }`} />
            </div>
          </label>
        </div>
      ) : (
        <Button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className={`transition-opacity px-2.5 py-6
          ${
            theme === 'dark'
              ? 'justify-end bg-gray-700 hover:bg-gray-500'
              : 'justify-start bg-yellow-200 hover:bg-yellow-100'
          }
          `}
        >
          {theme === 'light' ? (
            <SunIcon />
          ) : (
            <MoonIcon />
          )}
        </Button>
      )}
    </>
  )
}
