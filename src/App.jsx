import { Header, Navbar,Cart, Product,Pay } from "./components";
import { Routes, Route, } from "react-router-dom";
const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product" element={<Product />} />
				<Route path="/pay" element={<Pay />} />
			</Routes>
		</div>
	);
};

export default App;
