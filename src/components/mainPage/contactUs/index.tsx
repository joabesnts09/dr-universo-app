import tiktokIcon from '../../.../../../../public/image/icons/tiktok.svg'
import kwaiIcon from '../../.../../../../public/image/icons/kwai.svg'
import linkedinIcon from '../../.../../../../public/image/icons/linkedin.svg'
import webIcon from '../../.../../../../public/image/icons/browser.svg'
import Image from 'next/image'


export const ContactUs = () => {

  return (
    <>
      <div className='w-full flex flex-col gap-10'>
        <h2 className='text-3xl font-bold tracking-tighter text-center text-textPrimary sm:text-4xl'>
        contate-nos
        </h2>

        <div className='flex flex-col md:flex-row gap-10 md:justify-center md:gap-32'>
          <div className='flex flex-col gap-3 md:gap-6'>
            <h3 className='text-xl font-bold tracking-tighter text-start text-[#210458] dark:text-textSecondary'>Nossas Redes</h3>

            <div className='flex flex-col gap-6 md:gap-4 pl-8 md:pl-0'>
              <div className='flex gap-1'>
                <Image className='w-6' src={tiktokIcon} alt='' />
                <p className='text-lg text-textPrimary'>TikTok: @doutor_universo09</p>
              </div>

              <div className='flex gap-1'>
                <Image className='w-6' src={kwaiIcon} alt='' />
                <p className='text-lg text-textPrimary'>Kwai: @doutor_universo09</p>
              </div>
            </div>
          </div>


          <div className='flex flex-col gap-3 md:gap-6'>
            <h3 className='text-xl font-bold tracking-tighter text-start text-[#210458] dark:text-textSecondary'>Contatos Profissionais</h3>

            <div className='flex flex-col gap-6 md:gap-4 pl-8 md:pl-0'>
              <div className='flex gap-1'>
                <Image className='w-6' src={linkedinIcon} alt='' />
                <p className='text-lg text-textPrimary'>Linkedin: @joabesnts09</p>
              </div>

              <div className='flex gap-1'>
                <Image className='w-6' src={webIcon} alt='' />
                <p className='text-lg text-textPrimary'>Nosso portifólio</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}