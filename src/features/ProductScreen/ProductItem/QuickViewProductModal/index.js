import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { modalActions } from '@store/modal/modalSlice';
import { cartActions } from '@store/cart/cartSlice';

import { IoClose } from 'react-icons/io5';
import { BsArrowLeftRight } from 'react-icons/bs';

import WishList from './Wishlist';
import Modal from '@components/UI/Modal';
import SocialLink from '@components/UI/SocialLink';
import Rating from '@components/Product/Rating';
import Button from '@components/UI/Button/index';
import { Quantity } from '@components/Cart/Quantity';
import { useState } from 'react';

const QuickViewProductModal = ({ product }) => {
	const { id, title, image, price, rating, reviews, discount, category } =
		product;
	let [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();

	const incrementItem = () => {
		setQuantity(++quantity);
	};

	const decreaseItem = () => {
		if (quantity > 1) {
			setQuantity(--quantity);
		} else {
			setQuantity(0);
		}
	};

	const addItem = () => {
		dispatch(
			cartActions.addToCart({
				id,
				title,
				discount,
				image,
				quantity,
			})
		);
	};
	const handleCloseModal = () => {
		dispatch(modalActions.quickView({ status: false, dataActive: null }));
	};

	console.log(quantity);

	return (
		<Modal handleClose={handleCloseModal}>
			<div className="bg-white relative p-8 rounded  border border-[#e8e8e8]">
				<button
					onClick={handleCloseModal}
					className="absolute top-2 right-2 bg-white"
				>
					<IoClose className="text-3xl" />
				</button>

				<div className="flex items-center gap-10">
					<div className="h-96 px-6">
						<img
							src={image}
							className="h-full object-contains mx-auto"
							alt={title}
						/>
					</div>
					<div className="max-w-[400px]">
						<Rating
							value={rating}
							text={reviews}
						/>
						<h4 className="text-xl font-bold mt-2">{title}</h4>
						<div className="flex items-center">
							<span className="inline-block text-[56px] font-semibold text-greenBtn">
								${discount.toFixed(2)}
							</span>
							<span className="inline-block text-5xl font-semibold text-greenBtn opacity-50 line-through ml-4">
								${price.toFixed(2)}
							</span>
						</div>
						<div className="flex items-center py-5 mb-8 border-t-[1px] border-b-[1px] border-grey">
							<span>Categories:</span>
							<ul className="flex items-center ml-5">
								{category.map((item, index) => (
									<li
										className="font-semibold capitalize"
										key={index}
									>
										{index === 0 ? item : `, ${item}`}
									</li>
								))}
							</ul>
						</div>
						<div>
							<Quantity
								decreaseItem={decreaseItem}
								incrementItem={incrementItem}
								quantity={quantity}
							/>
							<Button
								btn="cart"
								className="mt-0 ml-5"
								onClick={addItem}
							>
								Add to cart
							</Button>
						</div>
						<div className="flex mt-5">
							<div className="flex items-center mr-10 hover:text-greenBtn transition-all cursor-pointer">
								<WishList wishlist={title} />
								<span className="ml-1 font-medium">
									Add to Wishlist
								</span>
							</div>
							<Link className="flex items-center  hover:text-greenBtn transition-all">
								<BsArrowLeftRight />
								<span className="ml-1 font-medium">
									Compare
								</span>
							</Link>
						</div>
						<div className="flex items-center border-t-[1px] mt-8">
							<span className="mr-6">Share:</span>
							<SocialLink />
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default QuickViewProductModal;
