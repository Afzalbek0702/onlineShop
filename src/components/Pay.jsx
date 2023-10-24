import React from "react";
import { useNavigate } from "react-router-dom";

const Pay = () => {
   const navigate = useNavigate()
   const HandleClick = () => {
      navigate('/')
      alert('Mahsulotlar muvofaqiyatli rasmiylashtirildi !')
   }
	return (
      <div className="mt-14 flex justify-center items-center h-full">
			<form className="flex flex-col">
            <input
					type="text"
					placeholder="Ism"
					className="border-2 rounded-lg border-Red w-[400px] h-10 mt-6 px-3 outline-none text-xl "
				/>
				<input
					type="text"
					placeholder="Shaxar"
					className="border-2 rounded-lg border-Red w-[400px] h-10 mt-6 px-3 outline-none text-xl "
				/>
				<input
               type="number"
               
					placeholder="Telefon raqam"
					className="border-2 rounded-lg border-Red w-[400px] h-10 mt-6 px-3 outline-none text-xl "
				/>
				<button onClick={HandleClick} className="py-1 px-4 mt-5 border-2 font-semibold border-Red text-Red hover:bg-red-50 duration-100 rounded-lg">
					Buyurtma berish
				</button>
			</form>
		</div>
	);
};

export default Pay;
