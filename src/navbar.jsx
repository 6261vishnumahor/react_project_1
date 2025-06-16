import {Link} from"react-router-dom"
import "./navbar.css"
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

const Navbar=()=>{
    return(
        <>
        <section className="sec1">
        <div className="div1">
        <Link className="l1" to="/">home</Link>
        <Link className="l1" to="/Categories" >Categories</Link>
        <Link className="l1" to="/Features" >features</Link>
        <Link className="l1" to="/Product" >product</Link>
        {/* <Link className="l1" to="/Pages" >pages</Link> */}
        {/* <Link className="l1" to="/Element" >Element</Link> */}
         </div>
        <div className="div2">
        <img src="https://www.portotheme.com/wordpress/porto/shop6/wp-content/uploads/sites/59/2024/10/shop6_logo.png " width={130} height={50} alt=" image not found" />
       </div>
       <div className="div3">
        <Link className="l2" to="USD"> USD</Link>
        <Link className="l2" to="ELG"> ELG</Link>
        <Link className="l2" to="More"> More</Link>
      
       <Link className="l3"> <IoIosSearch /></Link>
        <Link className="l3"><CiHeart /></Link>
       <Link className="l3" to="Login"> <FaRegUser /></Link>
        <Link className="l2" to="Registration"> REG</Link>
        <Link className="l3" to="Cart"> <CiShoppingCart /></Link>
       
       </div>
       </section>

        </>
    )
}
export default Navbar;