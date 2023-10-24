import React from "react";
import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
	const cartItem = useSelector((state) => state.cart.item);
	return (
		<div className="w-full bg-white shadow-xl h-12 bg flex items-center justify-between px-20 md:px-4 fixed top-0">
			<Link to={"/"} className="text-red-500 font-medium text-3xl">
				Shopping
			</Link>
			{/* <div className="w-80 flex border">
				<input
					type="text"
					placeholder="Search"
					className="w-11/12 h-9 px-2 border-none outline-none"
				/>
				<button>
					<GrSearch />
				</button>
			</div> */}
			<Link
				to={"/cart"}
				className="flex items-center mx-2 text-2xl hover:scale-125 hover:text-Red duration-150"
			>
				<FaCartArrowDown />
				<h1 className="text-xs ml-2 bg-Red w-4 h-4 text-white font-medium text-center rounded-full">{cartItem.length}</h1>
			</Link>
		</div>
	);
};

export default Navbar;
