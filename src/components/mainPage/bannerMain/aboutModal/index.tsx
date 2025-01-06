'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useTheme } from 'next-themes'
import clsx from 'clsx'
import { Button } from '@/components/ui/button'

export const AboutModal = () => {
  const { theme } = useTheme()
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className='w-full h-max rounded-lg bg-btnViolet hover:bg-btnVioletHover transition-colors delay-100 text-lg py-4'>
          <p className='font-semibold'>Discover Doctors</p>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            className={clsx(
              'fixed inset-0 bg-black/50',
              'transition-opacity duration-200'
            )}
          />
          <Dialog.Content
            className={clsx(
              'fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2',
              'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg',
              'w-full max-w-[20rem] sm:max-w-md mx-auto'
            )}
          >
            <div className='flex justify-between items-center mb-4'>
              <Dialog.Title className='text-lg font-bold dark:text-white'>
                Meus Perfis
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className='text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'>
                  <p className='h-6 w-6'>x</p>
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
              Aqui você pode acessar meus perfis nas redes sociais.
            </Dialog.Description>

            <div className='space-y-6'>
              <div className='flex items-center p-4 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700'>
                <img
                  src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4393c1ee0ede97c39fe96ce3a5c1cad9~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=38419&refresh_token=b95c172c7047b8807f207894df9158f5&x-expires=1736258400&x-signature=qfVxOG6cISfre9Y2I%2BvKgahBn3s%3D&shp=a5d48078&shcp=81f88b70'
                  alt='Perfil TikTok'
                  className='w-14 h-14 rounded-full mr-4'
                />
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    TikTok
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300'>
                    @doutor_universo09
                  </p>
                  <a
                    href='https://www.tiktok.com/@doutor_universo09'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 dark:text-blue-400 underline text-sm'
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
              <div className='flex items-center p-4 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700'>
                <img
                  src='http://aws-br-pic.kwai.net/bs2/overseaHead/20240831061504_BMTUwMDAxNjMzODYwMzg5_s.jpg?ocid=20211'
                  className='w-14 h-14 rounded-full mr-4'
                />
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    Kwai
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300'>
                    @doutor_universo09
                  </p>
                  <a
                    href='https://www.kwai.com/@doutor_universo09'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 dark:text-blue-400 underline text-sm'
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
