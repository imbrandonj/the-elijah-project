// Swiper imports for carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { useView } from '@root/components/ViewContext.jsx'; // global state

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
    <div id="dashSwiper">
      <h2>Select an action:</h2>
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
          <button onClick={redirectBegin} className="dashSwiperBtn">
            <img src={RocketLaunch} height={160} />
            Launch Mission
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="dashSwiperBtn">
            <img src={PlanetFlag} height={160} />
            Player Statistics
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="dashSwiperBtn">
            <img src={FloatAstro} height={120} />
            Profile Configuration
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="dashSwiperBtn" onClick={redirectHome}>
            <img src={Stars} height={140} />
            Sign Out
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
