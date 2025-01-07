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
              <div>
                <a className='flex gap-1' href="https://www.tiktok.com/@doutor_universo09" target="_blank" rel="noopener noreferrer">
                <Image className='w-6' src={tiktokIcon} alt='Tiktok Icon' />
                <p className='text-lg text-textPrimary'>TikTok: @doutor_universo09</p>
                </a>
              </div>

              <div>
                <a className='flex gap-1' href="https://www.kwai.com/@doutor_universo09" target="_blank" rel="noopener noreferrer">
                <Image className='w-6' src={kwaiIcon} alt='Kwai Icon' />
                <p className='text-lg text-textPrimary'>Kwai: @doutor_universo09</p>
                </a>
              </div>
            </div>
          </div>


          <div className='flex flex-col gap-3 md:gap-6'>
            <h3 className='text-xl font-bold tracking-tighter text-start text-[#210458] dark:text-textSecondary'>Contatos Profissionais</h3>

            <div className='flex flex-col gap-6 md:gap-4 pl-8 md:pl-0'>
              <div>
                <a className='flex gap-1' href="https://www.linkedin.com/in/joabe-santos-5a20a3206/" target="_blank" rel="noopener noreferrer">
                <Image className='w-6' src={linkedinIcon} alt='likedin Icon' />
                <p className='text-lg text-textPrimary'>Linkedin: @joabesnts09</p>
                </a>
              </div>

              <div>
                <a className='flex gap-1' href="https://www.linkedin.com/in/joabe-santos-5a20a3206/" target="_blank" rel="noopener noreferrer">
                <Image className='w-6' src={webIcon} alt='Web Icon' />
                <p className='text-lg text-textPrimary'>Nosso portifólio</p>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}