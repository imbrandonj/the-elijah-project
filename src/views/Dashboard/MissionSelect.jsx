// Swiper imports for carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// imported svgs:
import Arith from '@root/assets/svgs/arith.svg';
import Perspective from '@root/assets/svgs/perspective.svg';
import AlphaLiteracy from '@root/assets/svgs/alpha-literacy.svg';
import RocketHome from '@root/assets/svgs/rocket-home.svg';

/*
   DashEntry.jsx

    This is the carousel that displays after use selects 'Launch Mission'
*/
export default function MissionSelect({ setDashSelect }) {
  const handleReturn = () => setDashSelect('entry');
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 30,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        modules={[EffectCoverflow, Keyboard]}
        id="dashSwiper"
      >
        <SwiperSlide>
          <button id="arith">
            <img src={Arith} height={160} />
            Arith
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button id="perspective">
            <img src={Perspective} height={160} />
            Perspective
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button id="alphaliteracy">
            <img src={AlphaLiteracy} height={160} />
            Alpha-Literacy
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button onClick={handleReturn}>
            <img src={RocketHome} height={140} />
            Return to Base
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
