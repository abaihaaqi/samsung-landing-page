import { useRef, useState } from "react";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import style from "./banner.module.css"
import { Autoplay, EffectFade, Pagination } from "swiper";
import carousel1 from '../public/carousel-1.webp'
import carousel2 from '../public/carousel-2.webp'
import carousel3 from '../public/carousel-3.webp'

export default function Banner() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <Swiper
      spaceBetween={0}
      effect={"fade"}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      pagination={{
        clickable: true,
        bulletActiveClass: style.bulletActive,
      }}
      modules={[Autoplay, EffectFade, Pagination]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='relative'>
          <Image alt='' src={carousel1} />
          <div className='absolute inset-0 text-white text-center flex flex-col items-center gap-4 z-10 mx-9 mt-8'>
            <h3>Bespoke Home 2022 highlights</h3>
            <p>
              Check out event hightlights, discover new possibilities for your home, and get up to $1,300 off select Bespoke Refrigerators.
            </p>
            <button className='block bg-white font-bold text-black px-5 py-2 rounded-full'>
              Shop now
            </button>
            <button className='block font-bold border-b-2 border-white'>
              Learn more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image alt='' src={carousel2} />
          <div className='absolute inset-0 text-center flex flex-col items-center gap-4 z-10 mx-9 mt-8'>
            <h3>This deal sounds amazing</h3>
            <p>
              Buy a Samsung 8K TV, get a Sound Tower on us. Now you can really rock.
            </p>
            <button className='block bg-black font-bold text-white px-5 py-2 rounded-full'>
              Buy now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image alt='' src={carousel3} />
          <div className='absolute inset-0 text-white text-center flex flex-col items-center gap-4 z-10 mx-9 mt-8'>
            <h3>Step into a new world</h3>
            <p>
              Get all-new 4K 240Hz Odyssey Neo G8 monitor today. Starting from $149.99 or $41.67/mo* for 36 months.
            </p>
            <button className='block bg-white font-bold text-black mt-2 px-5 py-2 rounded-full'>
              Buy now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}