import React from "react";
// import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../reducer/cartSlice";
import { singlePItem } from "../reducer/singleproduct";
import { useNavigate } from "react-router-dom";

const Card = ({ items }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleClick = (title) => {
		dispatch(getCartItem(items));
		alert("Added in cart \n" + title);
	};
	const SingleProductHandle = () => {
		dispatch(singlePItem(items));
		navigate("/product");
	};
	return (
		<div className="w-[300px] h-[540px] bg-white border m-2 flex  flex-col justify-between cursor-pointer overflow-hidden hover:shadow-2xl duration-150">
			<div onClick={SingleProductHandle}>
				<img
					className=" duration-150 h-[300px]"
					src={`${items?.images[0]}`}
					alt="Image"
				/>
				<div className="px-2 text-lg font-semibold mt-3 ">{items?.title} </div>
				<div className="px-2 text-sm">{items?.description}</div>
			</div>
			<div>
				<div className="px-2 text-lg text-Red font-bold">
					{Math.trunc(items?.price / 7)} $
				</div>
				<button
					onClick={() => handleClick(items?.title)}
					className="w-[90%] m-2 p-1 my-2 border-2 font-semibold border-Red text-Red hover:bg-red-50 duration-100 rounded-lg"
				>
					Buy
				</button>
			</div>
		</div>
	);
};

export default Card;
