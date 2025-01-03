'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { useTheme } from 'next-themes'
import Image from 'next/image'

interface IEventDetailsModalProps {
  title: string
  date: string
  time: string
  description: string
  imgUrl: string
}

export const EventModal = ({
  title,
  date,
  time,
  description,
  imgUrl,
}: IEventDetailsModalProps) => {
  const { theme } = useTheme()

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className='bg-purple-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition duration-300'>
            Ver detalhes
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay
            className={`fixed inset-0 ${
              theme === 'dark' ? 'bg-black/80' : 'bg-black/50'
            } backdrop-blur-sm z-50`}
          />
          <Dialog.Content
            className={`fixed top-1/2 left-1/2 w-full max-w-md p-8 rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 ${
              theme === 'dark'
                ? 'bg-card text-card-foreground'
                : 'bg-white text-gray-800'
            } z-50`}
          >
            <Dialog.Title
              className={`text-2xl font-extrabold ${
                theme === 'dark' ? 'text-titlePrimary' : 'text-purple-700'
              }`}
            >
              {title}
            </Dialog.Title>
            <Dialog.Description
              className={`mt-2 ${
                theme === 'dark' ? 'text-textPrimary' : 'text-gray-600'
              }`}
            >
              {date} - {time}h
            </Dialog.Description>

            <div className='mt-4'>
              <img
                src={imgUrl}
                alt='Event Image'
                className='rounded-lg w-full h-56 object-cover'
                width={360}
                height={240}
              />
            </div>

            <p
              className={`mt-4 ${
                theme === 'dark' ? 'text-textPrimary' : 'text-gray-800'
              }`}
            >
              {description}
            </p>

            <div className='mt-6 flex justify-end'>
              <Dialog.Close
                asChild
                className={`w-max cursor-pointer py-2 px-4 rounded-full font-medium shadow-md hover:shadow-lg ${
                  theme === 'dark'
                    ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                } transition-all`}
              >
                <p>Fechar</p>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
