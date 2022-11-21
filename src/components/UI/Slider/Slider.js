import { useState } from 'react';

import { SwiperSlide, Swiper, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard } from 'swiper';

import SliderButton from './SliderButton';
import SliderPagination from './SliderPagination';


function Slider({
    children, 
    slidesPerView = 1, 
    centeredSlides = false,
    breakpoints,
    onClick,
    onResize
    }) {
    const [showSliderBtn, setShowSliderBtn] = useState(false);
    const [indexAct, setIndexAct] = useState(0);
    return (
        <div
			onMouseEnter={() => {
				setShowSliderBtn(true);
			}}
			onMouseLeave={() => {
				setShowSliderBtn(false);
			}}
		>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
				centeredSlides={centeredSlides}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                modules={[Keyboard]}
				onSlideChange={(e) => setIndexAct(e.realIndex)}
                breakpoints={breakpoints}
                onClick={onClick}
                onResize={onResize}
                className="mySwiper"
            >
                <SliderButton
                    isNext={false}
                    iconSize={30}
                    iconColors={['white', '#80B500']}
                    className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
                        showSliderBtn
                            ? 'visible translate-x-[0%] opacity-100'
                            : 'invisible -translate-x-[30%] opacity-0'
                    } shadow-2xl transition-all ease-in-out duration-300 lg:block hidden focus:outline focus:outline-2 focus:outline-greenBtn`}
                    iconClassName={`transition-all ease-in-out duration-300`}
                />
                <SliderButton
                    isNext={true}
                    iconSize={30}
                    iconColors={['white', '#80B500']}
                    className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
                        showSliderBtn
                            ? 'visible translate-x-[0%] opacity-100'
                            : 'invisible translate-x-[30%] opacity-0'
                    } shadow-2xl transition-all ease-in-out duration-300 lg:block hidden  focus:outline focus:outline-2 focus:outline-greenBtn`}
                    iconClassName={`transition-all ease-in-out duration-300`}
                />
				<SliderPagination totalSlides={children.length}  indexAct={indexAct}/>
                {children}
            </Swiper>
        </div>
    );
}

export default Slider;