'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

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
                  <MoonIcon className='h-5 w-5 text-blue-500' />
                  <p className='text-base font-bold'>Tema escuro</p>
                </>
              ) : (
                <>
                  <SunIcon className='h-5 w-5 text-yellow-500' />
                  <p className='text-base font-bold'>Tema claro</p>
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
              <MoonIcon
                className={`absolute left-1 h-5 w-5 text-blue-500 transition-opacity ${
                  theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Bola do switch */}
              <div className='w-6 h-6 bg-white rounded-full shadow-md transition-transform'></div>

              <SunIcon
                className={`absolute right-1 h-5 w-5 text-yellow-500 transition-opacity ${
                  theme === 'dark' ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </label>
        </div>
      ) : (
        <Button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className={`transition-opacity py-6
          ${
            theme === 'dark'
              ? 'justify-end bg-gray-700 hover:bg-gray-500'
              : 'justify-start bg-yellow-200 hover:bg-yellow-100'
          }
          `}
        >
          {theme === 'light' ? (
            <SunIcon className={`text-yellow-500`} />
          ) : (
            <MoonIcon className={`text-blue-500 `} />
          )}
        </Button>
      )}
    </>
  )
}
