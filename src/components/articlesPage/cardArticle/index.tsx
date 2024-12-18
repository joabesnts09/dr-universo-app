import { KwaiIcon } from '@/components/svg/kwaiIcon'
import { TiktokIcon } from '@/components/svg/tiiktokIcon'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface IEventCardProps {
  name: string
  date: string
  image?: string
  description: string
  tiktokLink: string
  kwaiLink: string
  priority?: boolean
}

export const CardArticle = ({
  name,
  date,
  image,
  description,
  tiktokLink,
  kwaiLink,

  
}: IEventCardProps) => {
  
  return (
    <>
      <div className='max-w-md mx-auto bg-background border border-borderColor rounded-lg shadow-lg overflow-hidden'>
        <div className='relative h-48 bg-secondary'>

        <Image
          src={image? image: 'https://via.placeholder.com/400x200'}
          className='rounded-t-md object-cover'
          alt={name}
          fill
          priority
          unoptimized
        />
        </div>

        <div className='p-5 text-foreground'>
          <h2 className='text-textSecondary text-2xl font-bold mb-2'>{name}</h2>
          <p className='text-textPrimary text-sm font-bold italic mb-2'>{date}</p>
          <p className='mb-4 font-semibold'>{description}</p>

          <Button className='inline-block px-4 py-2 text-primary-foreground bg-btnViolet rounded-lg hover:bg-btnVioletHover transition duration-300'>
            Ver Mais
          </Button>

          <div className='flex items-center gap-4 mt-5'>
            <a
              href={tiktokLink}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform'
              aria-label='TikTok'
            >
              {/* <img className='w-6' src={tiktokIcon} alt='Tiktok Icon' /> */}
              <TiktokIcon className='w-6 h-6' />
            </a>

            <a
              href={kwaiLink}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform'
              aria-label='Kwai'
            >
              {/* <img className='w-6' src={kwaiIcon} alt='Kwai Icon' /> */}
              <KwaiIcon className='w-6 h-6' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
