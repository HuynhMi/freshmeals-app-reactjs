import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

function Breadcrumbs() {
	const breadcrumbs = useBreadcrumbs();
	const location = useLocation();

	return (
		<nav className="flex items-center">
			{breadcrumbs.map(({ match, breadcrumb }) => {
				return match.pathname === location.pathname ? (
					<div key={match.pathname} className=" text-[#80B500] ">{breadcrumb}</div>
				) : (
					<Link
						key={match.pathname}
						to={match.pathname}
						className="text-[#8CB2B2] px-5 mr-5 border-r-2 border-[#8CB2B2]"
					>
						{breadcrumb}
					</Link>
				);
			})}
		</nav>
	);
}
export default Breadcrumbs;

