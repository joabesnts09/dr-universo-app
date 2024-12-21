import { SocialButton } from '@/components/socialButtom'
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
      <div className='max-w-md mx-auto bg-background border border-borderColor rounded-lg shadow-lg overflow-hidden flex flex-col'>
  <div className='relative h-48 bg-secondary'>
    <Image
      src={image ? image : 'https://via.placeholder.com/400x200'}
      className='rounded-t-md object-cover'
      alt={name}
      fill
      priority
      unoptimized
    />
  </div>

  <div className='flex flex-col flex-1 p-5 text-foreground'>
    <h2 className='text-textSecondary text-2xl font-bold mb-2'>{name}</h2>
    <p className='text-textPrimary text-sm font-bold italic mb-2'>{date}</p>
    <p className='mb-4 font-semibold'>{description}</p>
  </div>

  <div className='flex items-center justify-start gap-4 p-5 bg-background '>
    <SocialButton
      href='https://www.kwai.com'
      text='Assista'
      className='bg-orange-500 hover:bg-orange-600'
      icon={<KwaiIcon className='w-6 h-6' />}
    />
    <SocialButton
      href='https://www.tiktok.com'
      text='Assista'
      className='bg-black hover:bg-gray-800'
      icon={<TiktokIcon className='w-6 h-6' />}
    />
  </div>
</div>
    </>
  )
}
