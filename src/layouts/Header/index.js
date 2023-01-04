import { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { BiUser, BiCartAlt, BiMenu } from 'react-icons/bi';

import NavMobi from './NavMobi';
import Navigation from '@components/UI/Navbar';
import Button from '@components/UI/Button';
import Banner from './Banner';
import Dropdown from '@components/UI/Dropdown';
import { modalActions } from '@store/modal/modalSlice';
import SearchProducts from './Search';
import ViewCart from '@features/CartScreen/ViewCart';
import { useOnHoverOutside } from '@hooks/useOnHoverOutside';
import * as cs from '@utils/constants';


const Header = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	const headerRef = useRef(null);
	const dropdownRef = useRef(null);

	const closeHoverDropdown = () => {
		setShowDropdown(false);
	};
	useOnHoverOutside(dropdownRef, closeHoverDropdown);

	const showNavMobi = useSelector((state) => state.modal.navMobi.status);
	const showCart = useSelector((state) => state.modal.isShowingCart);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const cartItems = useSelector((state) => state.cart.items);

	const dispatch = useDispatch();

	const location = useLocation();
	const isHomePage = location.pathname === '/';

	const handleCart = () => {
		dispatch(modalActions.toggleCart());
	};

	const handleNavMobi = (status) => {
		dispatch(modalActions.navMobi({ status }));
	};

	const { pathname } = location;
	useEffect(() => {
		showNavMobi && handleNavMobi(false);
	}, [pathname]);

	return (
		<header
			className="relative flex justify-center bg-transparent"
			ref={headerRef}
		>
			{isHomePage && <Banner />}
			<div
				className={`z-10 container xl:max-w-xl lg:max-w-lg md:max-w-md ${
					isHomePage ? 'absolute' : ''
				} mx-auto py-6 flex flex-wrap justify-center items-center md:justify-between  ease-in-out duration-200`}
			>
				<div className="container flex flex-col md:flex-row lg:flex-row justify-space md:justify-around items-center mx-auto">
					<nav className="pb-6">
						<div className="flex items-center justify-center">
							<Link to="/">
								<img
									src={cs.logo01}
									alt="logo"
									className="h-12"
								/>
							</Link>
						</div>
					</nav>
					<nav className="flex justify-end items-center gap-8 relative">
						<div className="hidden lg:block lg:order-1">
							<Navigation className="flex flex-row gap-6 text-white capitalize font-bold text-xl font-raj" />
						</div>

						<div className="flex flex-wrap gap-6 order-2">
							<Button
								type="link"
								link="/contact"
								className=" hidden lg:inline-flex text-white bg-greenBtn hover:bg-[#699403] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-raj"
							>
								GET A QUOTE
							</Button>
							<div
								className="relative flex gap-3"
								ref={dropdownRef}
							>
								<div className="lg:block hidden">
									<SearchProducts />
								</div>
								<Button
									className="p-3 bg-white rounded-full hover:bg-[#80B500] inline-flex items-center"
									onMouseOver={() => setShowDropdown(true)}
								>
									<BiUser />
								</Button>
								{showDropdown ? (
									<Dropdown items={cs.userList} />
								) : (
									''
								)}

								<Button
									onClick={handleCart}
									className="p-3 bg-white rounded-full hover:bg-greenBtn relative"
								>
									<BiCartAlt />
									<span className="absolute -top-3 -right-1 text-2xl text-red-600">
										{totalQuantity}
									</span>
								</Button>
								<AnimatePresence>
									{showCart ? (
										<ViewCart
											handleClose={handleCart}
											item={cartItems}
										/>
									) : null}
								</AnimatePresence>
								<Button
									className="bg-white p-3 rounded-full lg:hidden"
									onClick={() => handleNavMobi(true)}
								>
									<BiMenu />
								</Button>

								<AnimatePresence>
									{showNavMobi ? (
										<NavMobi
											handleClose={() =>
												handleNavMobi(false)
											}
										/>
									): null}
								</AnimatePresence>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
