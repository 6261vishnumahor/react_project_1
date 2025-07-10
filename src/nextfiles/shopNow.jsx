import { FiChevronLeft } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { VscDash } from "react-icons/vsc";
import "./shopnow.css"
import { useState } from "react";
const Shopnow = () => {
    const [v, setV] = useState(0)
    const plus = () => {
        setV(v+1)
    }
    const plus1 = () => {
        setV("block")
    }
    return (
        <>
            <div>HOME<FiChevronLeft />SHOP </div>
            <div id="v"></div>
            <section className="v4">

                <div className="v5">

                    <div ><a href="#">Categories</a></div>
                    <div>
                        <div>
                            {(v%2==0)? <div onClick={plus}><VscDash /></div>:<div onClick={plus}><GoPlus /></div>}
                        </div>
                        {/* <div onClick={plus}><VscDash /></div>
                        <div onClick={plus1} style={{ display: setV }}> <GoPlus /></div> */}
                    </div>

                </div>

                <div >
                    <ul {(v%2==0)?style}>
                        <li className="v3"><a href="">Accesaries</a></li>
                        <li className="v3"><a href="">Bags</a></li>
                        <li className="v3"><a href="">Hates</a></li>
                        <li className="v3"><a href="">Jakets</a></li>
                        <li className="v3"><a href="">Shose</a></li>
                        <li className="v3"><a href="">Sunglashes</a></li>

                    </ul>
                </div>
            
            <div id="v2"></div>
            <div>Price</div>
            <div className="v6">
                <input type="range" name="range" />
            </div>
            <div className="v7">
                <div>
                    Price: $30 — $300
                </div>
                <button>FILTER</button>
            </div>
            </section >
        </>
    )
}
export default Shopnow;