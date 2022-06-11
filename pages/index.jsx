import Navbar from '../components/navbar';
import Layout from '../components/layouts';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import carousel1 from '../public/carousel-1.webp'
import carousel2 from '../public/carousel-2.webp'
import carousel3 from '../public/carousel-3.webp'
import { Envelope, FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Image alt='' src={carousel1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' src={carousel2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' src={carousel3} />
        </SwiperSlide>
      </Swiper>
      <h4 className='text-center pt-6 pb-4'>Shop our latest offers and innovations</h4>
      <div className='max-w-screen overflow-scroll pb-4 mx-8'>
        <div className='flex gap-6 w-max'>
          <button>
            Smartphones & Wearables
          </button>
          <button>
            Header
          </button>
          <button>
            Header
          </button>
          <button>
            Header
          </button>
          <button>
            Header
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h4 className='text-center py-6'>Mobile & Computing</h4>
      <div className='max-w-screen overflow-scroll py-3 mx-8'>
        <div className='flex gap-6 w-max'>
          <button>
            Galaxy Buds2
          </button>
          <button>
            Header
          </button>
          <button>
            Header
          </button>
          <button>
            Header
          </button>
          <button>
            Header
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className='px-8 pt-3 pb-5'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
          <div className='px-8 text-center'>
            <h3>
              Meet your new Galaxy family
            </h3>
            <p className='py-2'>
              Get Galaxy Buds from $25 <s>$149.99</s> with Galaxy S21 FE 5G. From $149.99 <s>$849.98</s> with eligible trade-in.ᶿ
            </p>
            <div className='flex flex-col items-center gap-3'>
              <button className='block bg-black font-bold text-white px-5 py-3 rounded-full'>
                Buy now
              </button>
              <button className='block font-bold border-b-3 border-black'>
                Learn more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-8 py-2'>
            <div className='bg-slate-300 rounded-2xl h-44 w-full'></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div className='flex gap-4 justify-center items-center py-4'>
          <FacebookLogo size={32} />
          <TwitterLogo size={32} />
          <InstagramLogo size={32} />
          <YoutubeLogo size={32} />
          <Envelope size={32} />
        </div>
        <div className='text-sm flex flex-wrap justify-center gap-4'>
          <button>
            Privacy
          </button>
          <button>
            Do Not Sell My Personal Information
          </button>
          <button>
            Legal
          </button>  
          <button>
            Accessibility Help
          </button>
          <button>
            Sitemap
          </button>
        </div>
      </div>
    </Layout>
  )
}
