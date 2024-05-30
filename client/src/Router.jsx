import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Products from './pages/Products.jsx'
import Error from './components/404.jsx'


const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api/cart" element={<Cart />} />
            <Route path="/api/product" element={<Products />}/>
            <Route path="*" element={<Error />}/>
         </Routes>
    </BrowserRouter>
   );
}
 
export default Router
