import { SwiperSlide } from 'swiper/react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import Slider from '@components/UI/Slider';
import Title from '@components/Title';
import { labelProduct as label } from '@utils/constants';
import ProductItem from '../ProductItem';
import { useSelector } from 'react-redux';
import QuickViewProductModal from '../ProductItem/QuickViewProductModal';

const ProductList = ({ products }) => {
	const quickViewModal = useSelector(
		(state) => state.modal.quickViewModal
	);
	// const isShowingSuccessModal = useSelector(
	// 	(state) => state.modal.isShowingSuccessModal
	// );
	return (
		<div className="mt-[120px]">
			<Title title="Our Products" />
			<div className="mb-[15px]">
				<Tabs>
					<TabList className="flex justify-center flex-wrap pb-6 relative">
						{label.map((label, index) => (
							<Tab
								className={`relative text-sm md:text-lg font-bold uppercase px-6 py-6 my-1 mx-2
									 hover:text-greenBtn cursor-pointer 
									 ${
											index !== 0 &&
											'before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-[2px] before:bg-[#e9e9e9]'
										}
									
									`}
								selectedClassName="border-greenBtn border-b-2 text-greenBtn outline-0 hover:cursor-pointer"
								key={label.id}
							>
								{label.label}
							</Tab>
						))}
					</TabList>

					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter(
									(item) =>
										item.category.includes('food') ||
										item.category.includes('drink')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											product={el}
											card={true}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter((item) =>
									item.category.includes('vegetables')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											product={el}
											card={true}
											label={el.label || 'free'}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter((item) =>
									item.category.includes('dried food')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											product={el}
											card={true}
											label={el.label || 'free'}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter(
									(item) =>
										item.category.includes('bread') ||
										item.category.includes('cake')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											product={el}
											card={true}
											label={el.label || 'free'}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter(
									(item) =>
										item.category.includes('fish') ||
										item.category.includes('meat')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											product={el}
											card={true}
											label={el.label || 'free'}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
					<TabPanel>
						<Slider
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
							grid={{ rows: 2, fill: 'row' }}
							loop={false}
						>
							{products
								?.filter((item) =>
									item.category.includes('fruits')
								)
								.map((el) => (
									<SwiperSlide key={el.id}>
										<ProductItem
											{...el}
											product={el}
											card={true}
											label={el.label || 'free'}
										/>
									</SwiperSlide>
								))}
						</Slider>
					</TabPanel>
				</Tabs>
			</div>

			{quickViewModal.status ? (
				<QuickViewProductModal product={quickViewModal.dataActive} />
			) : null}

			{/* {isShowingSuccessModal.status ? (
				<SuccessModal
					product={product}
					type={isShowingSuccessModal.type}
				/>
			) : null} */}
		</div>
	);
};

export default ProductList;
