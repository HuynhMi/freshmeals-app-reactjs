import { useRouteLoaderData } from 'react-router-dom';
import SearchByTitle from '../../../components/UI/SearchByTitle';

function SearchProductsPage() {
	const { products } = useRouteLoaderData('root');

	return (
		<SearchByTitle
			list={products}
			isProduct
		/>
	);
}

export default SearchProductsPage;
