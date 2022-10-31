// Navbar
export const navbarList = [
	{
		id: 1,
		title: 'home',
		url: '/',
		parent_id: null,
	},
	{
		id: 2,
		title: 'shop',
		url: '/shop',
		parent_id: 1,
	},
	{
		id: 3,
		title: 'about',
		url: '/about',
		parent_id: 1,
	},
	{
		id: 4,
		title: 'contact',
		url: '/contact',
		parent_id: 1,
	},
	{
		id: 5,
		title: 'user',
		url: '',
		parent_id: 1,
		children: [
			{
				id: 1,
				title: 'Sign In',
				url: '/sign-in',
			},
			{
				id: 2,
				title: 'Register',
				url: '/register',
			},
			{
				id: 3,
				title: 'My Account',
				url: '/sign-in',
			},
			{
				id: 4,
				title: 'Wishlist',
				url: '/wishlist',
			},
		],
	},
];
