import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import ProductScreen from './pages/Shop/ProductScreen';
import ProductDetail from './pages/Shop/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPage from './pages/Blog/';

import RootLayout from './containers/RouterLayout/RootLayout';
import NotFound from './pages/NotFound';
import ShopLayout from './containers/RouterLayout/ShopLayout';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
				<Route index element={<Home />}></Route>
				<Route path="shop" element={<ShopLayout/>}>
					<Route index element={<ProductScreen />}></Route>
					<Route path=":productId" element={<ProductDetail />}></Route>
				</Route>
				<Route path="about" element={<About />}></Route>
				<Route path="contact" element={<Contact />}></Route>
				<Route path="blog" element={<BlogPage />}></Route>
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
