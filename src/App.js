import logo from './logo.svg';
import './App.css';
import Navigation from './cutstomer/components/navigation/Navigation';
import HomePage from './cutstomer/Pages/HomePages/HomePage';
import Footer from './cutstomer/components/Footer/Footer';
import Product from './cutstomer/components/Product/Product';
import ProductDetails from './cutstomer/components/ProductDetails/ProductDetails';
import Cart from './cutstomer/components/Cart/Cart';
import Checkout from './cutstomer/components/CheckOut/Checkout';
import Order from './cutstomer/components/Order/Order';
import OrderDetails from './cutstomer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './R/CustomerRouters';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
     {/* <Navigation/> */}

     <div>
      {/* <HomePage/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* {<Cart/>} */}
      {/* {<Checkout/>} */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
     </div>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
