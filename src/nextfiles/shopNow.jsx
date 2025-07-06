import { FiChevronLeft } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { VscDash } from "react-icons/vsc";
import "./shopnow.css"
import { useState } from "react";
const Shopnow=()=>{
    const [v,setV]=useState(0)
    const plus=()=>{
setV(s+1)
    }
    return(
        <>
        <div>HOME<FiChevronLeft />SHOP </div>
        <div id="v"></div>
        <section className="v4">
            <div className="v5">
           <div ><a href="#">Categories</a></div>
           <div><GoPlus/></div>
           </div>
            <ul  onClick={plus}>
            <li className="v3"></li>
            <li className="v3"><a href="">Accesaries</a></li>
            <li className="v3"><a href="">Bags</a></li>
            <li className="v3"><a href="">Hates</a></li>
            <li className="v3"><a href="">Jakets</a></li>
            <li className="v3"><a href="">Shose</a></li>
            <li className="v3"><a href="">Sunglashes</a></li>
            </ul>
          
        </section>
        <div id="v2"></div>
        <div>Price</div>
        <div>
           <input type="range" name="range" />
            </div>
        
        </>
    )
}
export default Shopnow;