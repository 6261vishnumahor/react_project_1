import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./home"
import Categories from "./Categories"
import Product from "./product"
import Features from "./features"
import Pages from "./pages"
import Element from "./element"
import Registration from "./Registretion"
import Navbar from "./navbar"
import Login from "./login"
import Cart from "./add_to_cart"

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Categories" element={<Categories></Categories>}></Route>
      <Route path="/Features" element={<Features></Features>}></Route>
      <Route path="/Product" element={<Product></Product>}></Route>
      <Route path="/Pages" element={<Pages></Pages>}></Route>
      <Route path="/Element" element={<Element></Element>}></Route>
      <Route path="/Registration" element={<Registration></Registration>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Cart" element={<Cart></Cart>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;