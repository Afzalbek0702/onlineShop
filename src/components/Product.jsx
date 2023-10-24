import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../reducer/cartSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const SingleItem = useSelector((state) => state.single.item);
	console.log(SingleItem);
	const handleClick = (title) => {
		dispatch(getCartItem(SingleItem));
      alert("Added in cart \n" + title);
      navigate('/')
	};
	return (
		<div className="h-[100vh] flex lg:flex-col items-center justify-around px-40 lg:px-10 md:px-1 mt-20 md:mt-4">
				<img
					className="border max-w-[400px] md:max-w-[300px]"
					src={SingleItem?.images[0]}
					alt=""
				/>
			<div className="max-w-[500px] flex flex-col justify-between">
				<div>
					<h1 className="text-2xl ">{SingleItem.title}</h1>
					<div className="mt-4 text-lg">{SingleItem.description}</div>
				</div>
				<div className="md:mt-6">
					<h3 className="px-2 text-lg text-Red font-bold">
						{Math.trunc(SingleItem.price / 7)} $
					</h3>
					<button
						onClick={() => handleClick(SingleItem?.title)}
						className="w-[60%] p-1 my-2 border-2 font-semibold border-Red text-Red hover:bg-red-50 duration-100 rounded-lg"
					>
						Buy
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
