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
export default function MissionSelect({ setMissionSelect, setDashSelect }) {
  const alphaSelect = () => setMissionSelect('Alpha-Literacy');
  const arithSelect = () => setMissionSelect('Arith');
  const perspectiveSelect = () => setMissionSelect('Perspective');
  const handleReturn = () => setDashSelect('entry');

  return (
    <div id="dashSwiper">
      <h2>Select a planet for exploration:</h2>
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
      >
        <SwiperSlide>
          <button onClick={alphaSelect} className="dashSwiperBtn alphaLitColor">
            <img src={AlphaLiteracy} height={160} />
            Alpha-Literacy
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            id="arith"
            onClick={arithSelect}
            className="dashSwiperBtn arithColor"
          >
            <img src={Arith} height={160} />
            Arith
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={perspectiveSelect}
            className="dashSwiperBtn perspectiveColor"
          >
            <img src={Perspective} height={160} />
            Perspective
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button onClick={handleReturn} className="dashSwiperBtn">
            <img src={RocketHome} height={140} />
            Return to Base
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
