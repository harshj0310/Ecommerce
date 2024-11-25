import React from 'react'
import { Route,Routes } from 'react-router-dom'
// import Navigation from './cutstomer/components/navigation/Navigation';
// import HomePage from './cutstomer/Pages/HomePages/HomePage';
// import Footer from './cutstomer/components/Footer/Footer';
// import Product from './cutstomer/components/Product/Product';
// import ProductDetails from './cutstomer/components/ProductDetails/ProductDetails';
// import Cart from './cutstomer/components/Cart/Cart';
// import Checkout from './cutstomer/components/CheckOut/Checkout';
// import Order from './cutstomer/components/Order/Order';
// import OrderDetails from './cutstomer/components/Order/OrderDetails';
import Navigation from '../cutstomer/components/navigation/Navigation'
import HomePage from '../cutstomer/Pages/HomePages/HomePage'
import Cart from '../cutstomer/components/Cart/Cart'
import Product from '../cutstomer/components/Product/Product'
import Footer from '../cutstomer/components/Footer/Footer'
import ProductDetails from '../cutstomer/components/ProductDetails/ProductDetails'
import CheckOut from '../cutstomer/components/CheckOut/Checkout'
import Order from '../cutstomer/components/Order/Order'
import OrderDetails from '../cutstomer/components/Order/OrderDetails'
const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}> </Route>
            <Route path='/cart' element={<Cart/>}>  </Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product/>}>  </Route>
            <Route path='/product/:productId' element={<ProductDetails/>}>  </Route>
            <Route path='/checkout' element={<CheckOut/>}>  </Route>
            <Route path='/account/order' element={<Order/>}>  </Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}>  </Route>

            
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* {<Cart/>} */}
      {/* {<Checkout/>} */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}

           
           
        </Routes>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default CustomerRoutes