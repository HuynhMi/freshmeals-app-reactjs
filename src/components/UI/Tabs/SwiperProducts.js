import { useState } from "react";

import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SliderButton from '../Slider/SliderButton';

const SwiperProduct = ({children}) => {
    const [toggleBtn, setToogleBtn] = useState(false);

    return (
			<div
				onMouseEnter={() => setToogleBtn(!toggleBtn)}
				onMouseLeave={() => setToogleBtn(toggleBtn)}
			>
				<Swiper
					slidesPerView={3}
					className="mySwiper"
				>
					<SliderButton
						isNext={false}
						iconSize={30}
						iconColors={['white', '#80B500']}
						className={`p-2 bg-white rounded-full border-gray-200 border-2 hover:bg-greenBtn ${
							toggleBtn
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
							toggleBtn
								? 'visible translate-x-[0%] opacity-100'
								: 'invisible translate-x-[30%] opacity-0'
						} shadow-2xl transition-all ease-in-out duration-300 lg:block hidden  focus:outline focus:outline-2 focus:outline-greenBtn`}
						iconClassName={`transition-all ease-in-out duration-300`}
					/>
					{children}
				</Swiper>
			</div>
		);
}
