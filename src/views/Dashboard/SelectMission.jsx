// Swiper imports for carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// imported svgs:
import Arith from '@root/assets/img/arith.webp';
import Perspective from '@root/assets/img/perspective.webp';
import AlphaLiteracy from '@root/assets/img/alpha-lit.webp';
import RocketHome from '@root/assets/svgs/rocket-home.svg';

/*
   SelectMission.jsx

    This is the carousel menu that displays after user selects 'Launch Mission'

    `setMissionSelect` is passed by Dashboard.jsx
      When the user selects an item on the carousel, it updates `missionSelect` state

    `setDashSelect`, is also created in and passed by Dashboard.jsx
      This prop is only used when the user selects 'Return to Base'

*/
export default function SelectMission({ setMissionSelect, setDashSelect }) {
  const alphaSelect = () => setMissionSelect('Alpha-Literacy');
  const arithSelect = () => setMissionSelect('Arith');
  const perspectiveSelect = () => setMissionSelect('Perspective');
  const handleReturn = () => setDashSelect('entry');

  return (
    <div id="dashSwiper" className="flex-col justify-center align-center">
      <h2>Select a planet for exploration:</h2>
      <hr />
      <div id="swiperWrapper">
        <div className="swiper-button-next"></div>
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
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Keyboard, Navigation]}
        >
          <SwiperSlide>
            <button
              onClick={alphaSelect}
              className="dashSwiperBtn flex-col align-center justify-center alphaLitColor"
            >
              <img src={AlphaLiteracy} height={160} />
              Alpha-Literacy
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              id="arith"
              onClick={arithSelect}
              className="dashSwiperBtn flex-col align-center justify-center arithColor"
            >
              <img src={Arith} height={160} />
              Arith
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              onClick={perspectiveSelect}
              className="dashSwiperBtn flex-col align-center justify-center perspectiveColor"
            >
              <img src={Perspective} height={160} />
              Perspective
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              onClick={handleReturn}
              className="dashSwiperBtn flex-col align-center justify-center"
            >
              <img src={RocketHome} height={160} />
              Return to Base
            </button>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}
