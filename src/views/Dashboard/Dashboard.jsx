// Swiper imports for carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// imported svgs:
import RocketLaunch from '@root/assets/svgs/rocket-launch.svg';
import PlanetFlag from '@root/assets/svgs/planet-flag.svg';
import FloatAstro from '@root/assets/svgs/float-astro.svg';
import Stars from '@root/assets/svgs/stars.svg';

// imported components:
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

import './Dashboard.css';

export default function Dashboard({ setView }) {
  const redirectBegin = () => setView('PathMenu');
  const redirectStats = () => setView('Stats');
  const redirectConfig = () => setView('UserConfig');
  const redirectHome = () => setView('MainMenu');

  return (
    <div id="Dashboard">
      <div id="dashboardWrap">
        <Swiper
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
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
            <button onClick={redirectBegin}>
              <img src={RocketLaunch} height={160} />
              Begin Mission
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button>
              <img src={PlanetFlag} height={160} />
              Player Statistics
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button>
              <img src={FloatAstro} height={120} />
              Profile Configuration
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button>
              <img src={Stars} height={140} />
              Sign Out
            </button>
          </SwiperSlide>
        </Swiper>
        <Tipbox
          className="Tipbox"
          text="Navigate: Use the keyboard arrows or the mouse to click, grab, and pull."
        />
      </div>
    </div>
  );
}
