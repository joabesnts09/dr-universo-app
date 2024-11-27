'use client'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'

interface IArticles {
  id: string
  title: string
  description: string
  image: string
}

const articleData: IArticles[] = [
  {
    id: '1',
    title: 'Os Segredos das Galáxias Espirais',
    description:
      'As galáxias espirais são verdadeiras obras de arte do cosmos. Com braços giratórios repletos de estrelas jovens e nuvens de gás, elas são os laboratórios perfeitos para entender a formação estelar e a dinâmica galáctica. Descubra curiosidades fascinantes sobre esses gigantes cósmicos e sua importância no universo.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/52/Hubble2005-01-barred-spiral-galaxy-NGC1300.jpg',
  },
  {
    id: '2',
    title: 'A Origem dos Buracos Negros',
    description:
      'Buracos negros são os objetos mais intrigantes do universo, capazes de deformar o espaço-tempo. Como eles se formam e qual o papel que desempenham na evolução das galáxias? Este artigo explora as descobertas mais recentes sobre essas entidades fascinantes e suas conexões com a física moderna.',
    image:
      'https://www.canalhistory.com.br/sites/history.uol.com.br/files/styles/wide/public/images/2023/11/06/Buraco%20negro%20-%20Espa%C3%A7o%20-%20Objeto%20-%20Astronomia%20-%20History%20Channel%20Brasil.jpg',
  },
  {
    id: '3',
    title: 'Os Maiores Eventos Astronômicos de 2024',
    description:
      'De eclipses solares a chuvas de meteoros, 2024 será um ano repleto de eventos astronômicos imperdíveis. Saiba quais datas marcar no seu calendário e como aproveitar ao máximo cada espetáculo celeste.',
    image: 'https://starwalk.space/pt/news/astronomy-calendar-2024',
  },
]

export const BannerArticle = () => {
  return (
    <>
      <div className='flex flex-col w-full gap-10 xl:gap-16'>
        <div>
          <h2 className='text-3xl font-bold tracking-tighter text-center text-textPrimary sm:text-4xl'>Confira os ultimos artigos postados.</h2>
        </div>

        <div className='flex max-w-screen h-max sm:hidden'>
          <Carousel 
          className='w-full'
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                  <div>
                    <img
                      className='w-full max-w-full rounded-xl object-cover'
                      src='https://www.canalhistory.com.br/sites/history.uol.com.br/files/styles/wide/public/images/2023/11/06/Buraco%20negro%20-%20Espa%C3%A7o%20-%20Objeto%20-%20Astronomia%20-%20History%20Channel%20Brasil.jpg'
                    />
                  </div>

                  <div className='flex items-center justify-center'>
                    <h3 className='text-2xl font-bold tracking-tighter'>
                      A Origem dos Buracos Negros
                    </h3>
                  </div>

                  <div>
                    <Link href='#' className='w-full'>
                      <Button className='w-full bg-btnBlue hover:bg-btnBlueHover transition-colors delay-100'>
                        <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                          Ver mais...
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                  <div>
                    <img
                      className='w-full max-w-full rounded-xl object-cover'
                      src='https://upload.wikimedia.org/wikipedia/commons/5/52/Hubble2005-01-barred-spiral-galaxy-NGC1300.jpg'
                    />
                  </div>

                  <div className='flex items-center justify-center'>
                    <h3 className='text-2xl font-bold tracking-tighter'>
                      Os Segredos das Galáxias Espirais
                    </h3>
                  </div>

                  <div>
                    <Link href='#' className='w-full'>
                      <Button className='w-full bg-btnBlue hover:bg-btnBlueHover transition-colors delay-100'>
                        <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                          Ver mais...
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                  <div>
                    <img
                      className='w-full max-w-full rounded-xl object-cover'
                      src='https://starwalk.space/gallery/images/astronomical-calendar-2024/1140x641.jpg'
                    />
                  </div>

                  <div className='flex items-center justify-center'>
                    <h3 className='text-2xl font-bold tracking-tighter'>
                      Os Maiores Eventos Astronômicos de 2024
                    </h3>
                  </div>

                  <div>
                    <Link href='#' className='w-full'>
                      <Button className='w-full bg-btnBlue hover:bg-btnBlueHover transition-colors delay-100'>
                        <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                          Ver mais...
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
        

        <div className='hidden sm:flex'>
          <Carousel 
            className='w-full'
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                  <div>
                    <img
                      className='w-full max-w-full rounded-xl object-cover'
                      src='https://www.canalhistory.com.br/sites/history.uol.com.br/files/styles/wide/public/images/2023/11/06/Buraco%20negro%20-%20Espa%C3%A7o%20-%20Objeto%20-%20Astronomia%20-%20History%20Channel%20Brasil.jpg'
                    />
                  </div>

                  <div className='flex items-center justify-center'>
                    <h3 className='text-2xl font-bold tracking-tighter'>
                      A Origem dos Buracos Negros
                    </h3>
                  </div>

                  <div>
                    <Link href='#' className='w-full'>
                      <Button className='w-full bg-btnBlue hover:bg-btnBlueHover transition-colors delay-100'>
                        <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                          Ver mais...
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                  <div>
                    <img
                      className='w-full max-w-full rounded-xl object-cover'
                      src='https://upload.wikimedia.org/wikipedia/commons/5/52/Hubble2005-01-barred-spiral-galaxy-NGC1300.jpg'
                    />
                  </div>

                  <div className='flex items-center justify-center'>
                    <h3 className='text-2xl font-bold tracking-tighter'>
                      Os Segredos das Galáxias Espirais
                    </h3>
                  </div>

                  <div>
                    <Link href='#' className='w-full'>
                      <Button className='w-full bg-btnBlue hover:bg-btnBlueHover transition-colors delay-100'>
                        <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                          Ver mais...
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                  <div>
                    <img
                      className='w-full max-w-full rounded-xl object-cover'
                      src='https://starwalk.space/gallery/images/astronomical-calendar-2024/1140x641.jpg'
                    />
                  </div>

                  <div className='flex items-center justify-center'>
                    <h3 className='text-2xl font-bold tracking-tighter'>
                      Os Maiores Eventos Astronômicos de 2024
                    </h3>
                  </div>

                  <div>
                    <Link href='#' className='w-full'>
                      <Button className='w-full bg-btnBlue hover:bg-btnBlueHover transition-colors delay-100'>
                        <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                          Ver mais...
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                  <div>
                    <img
                      className='w-full max-w-full rounded-xl object-cover'
                      src='https://upload.wikimedia.org/wikipedia/commons/5/52/Hubble2005-01-barred-spiral-galaxy-NGC1300.jpg'
                    />
                  </div>

                  <div className='flex items-center justify-center'>
                    <h3 className='text-2xl font-bold tracking-tighter'>
                      Os Segredos das Galáxias Espirais
                    </h3>
                  </div>

                  <div>
                    <Link href='#' className='w-full'>
                      <Button className='w-full bg-btnBlue hover:bg-btnBlueHover transition-colors delay-100'>
                        <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                          Ver mais...
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className='flex flex-col w-full gap-3 p-3 rounded-xl backdrop-blur-3xl bg-slate-600/20 dark:bg-slate-500/5'>
                  <div>
                    <img
                      className='w-full max-w-full rounded-xl object-cover'
                      src='https://starwalk.space/gallery/images/astronomical-calendar-2024/1140x641.jpg'
                    />
                  </div>

                  <div className='flex items-center justify-center'>
                    <h3 className='text-2xl font-bold tracking-tighter'>
                      Os Maiores Eventos Astronômicos de 2024
                    </h3>
                  </div>

                  <div>
                    <Link href='#' className='w-full'>
                      <Button className='w-full bg-btnBlue hover:bg-btnBlueHover transition-colors delay-100'>
                        <p className='text-lg font-bold text-white hover:text-white transition-colors delay-100'>
                          Ver mais...
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  )
}
