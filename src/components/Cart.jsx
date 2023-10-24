import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onDelete } from "../reducer/cartSlice";
const Cart = () => {
	const dispatch = useDispatch();
	const cartItem = useSelector((state) => state.cart.item);
	if (cartItem.length == 0) {
		return (
			<div className="h-[88vh] flex flex-col items-center justify-center text-4xl">
				<h1>Savatchangiz bo'sh</h1>
				<Link
					to={"/"}
					className="border-2 text-Red px-4 py-2 border-Red text-2xl mt-5 hover:bg-red-50 duration-100 rounded-lg"
				>
					Bosh Sahifa
				</Link>
			</div>
		);
	}
	// const AllPrice = Math.trunc(cartItem[0].price / 7);
	let AllPrice = 0;
	return (
		<>
			<div className="h-[80vh] mt-20 px-40 md:px-4 flex flex-col justify-between">
				<div>
					<h1 className="text-3xl md:text-xl">
						Savatchada <span className="text-Red">{cartItem.length}</span> ta
						Mahsulot bor
					</h1>
					{cartItem.map((item) => {
						AllPrice += Math.trunc(item.price / 7);
						console.log(AllPrice);
						return (
							<div
								key={item.id}
								className="flex md:flex-col flex-wrap justify-between items-end md:items-start border px-10 md:px-2 py-6 md:py-2 my-5"
							>
								<div className="flex">
									<img src={item.images[0]} alt="" className="w-20 mr-4" />
									<div>
										<div className="text-xl">{item.title}</div>
										<h3 className="text-Red font-semibold mt-3">
											{Math.trunc(item.price / 7)} $
										</h3>
									</div>
								</div>
								<button
									onClick={() => dispatch(onDelete(item.id))}
									className="flex text-lg items-center text-red-500 md:mt-5"
								>
									<MdDeleteForever className="text-2xl" /> O'chirish
								</button>
							</div>
						);
					})}
				</div>
			</div>
			<div className="w-[100%] bg-white fixed bottom-0 mt-6 py-2 flex justify-around">
				<h2 className=" text-2xl md:text-lg md:mt-0 ">
					Jami <span className="text-Red font-semibold">{AllPrice} $</span>
				</h2>
				<Link to={'/pay'} className="py-1 px-4 border-2 font-semibold border-Red text-Red hover:bg-red-50 duration-100 rounded-lg">
					Sotib olish
				</Link>
			</div>
		</>
	);
};

export default Cart;
