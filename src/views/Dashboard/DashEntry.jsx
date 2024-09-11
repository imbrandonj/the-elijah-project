// Swiper imports for carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { useView } from '@root/contexts/ViewContext.jsx'; // global state

// imported svgs:
import RocketLaunch from '@root/assets/svgs/rocket-launch.svg';
import PlanetFlag from '@root/assets/svgs/planet-flag.svg';
import FloatAstro from '@root/assets/svgs/float-astro.svg';
import Stars from '@root/assets/svgs/stars.svg';

/*
    DashEntry.jsx

    This is the carousel that displays upon entering the Dashboard view
    `setDashSelect` prop contains user selection ('launch', 'stats', 'config', 'signout')
*/
export default function DashEntry({ setDashSelect }) {
  const { setView } = useView();

  const redirectBegin = () => setDashSelect('launch');
  const redirectStats = () => setDashSelect('stats');
  const redirectConfig = () => setDashSelect('config');
  const redirectHome = () => setView('MainMenu');
  return (
    <div id="dashSwiper" className="flex-col align-center">
      <h2>Select an action:</h2>
      <hr />
      <div id="swiperWrapper">
        <div className="swiper-button-prev"></div>
        <Swiper
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 50,
            stretch: 60,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={2}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Keyboard, Navigation]}
        >
          <SwiperSlide>
            <button
              onClick={redirectBegin}
              className="dashSwiperBtn flex-col align-center justify-center"
            >
              <img src={RocketLaunch} height={160} />
              Launch Mission
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="dashSwiperBtn flex-col align-center justify-center">
              <img src={PlanetFlag} height={160} />
              Player Statistics
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="dashSwiperBtn flex-col align-center justify-center">
              <img src={FloatAstro} height={120} />
              Profile Configuration
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className="dashSwiperBtn flex-col align-center justify-center"
              onClick={redirectHome}
            >
              <img src={Stars} height={160} />
              Sign Out
            </button>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}
