import { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchproduct } from "../reducer/productSlice";

const Header = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchproduct());
	}, []);
	const product = useSelector((state) => state.product.data);
	const { isLoading } = useSelector((state) => state.product);
	if (isLoading) {
		return (
			<div className="mx-auto text-7xl h-[89vh] text-Red flex items-center justify-center">
				Loading...
			</div>
		);
	}
	return (
		<div className="px-20 md:px-3 mt-16">
			<div className="flex flex-wrap justify-center items-center">
				{product.map((items, ind) => {
					if (product) {
						return <Card key={ind} items={items} />;
					} else return <Card />;
				})}
			</div>
		</div>
	);
};

export default Header;
