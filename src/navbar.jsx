import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import {  useRef, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { useContext } from "react";
import { MyContext } from "./context.jsx";


const Navbar = () => {
     const {s, setS, dark}= useContext(MyContext)
    const v=useNavigate()
   
    const [c1, setC1] = useState("none")
    const [c2, setC2] = useState("none")
    
    const ref = useRef();

    const r = () => {
        setC1("flex")
    }
    const d = () => {
        setC1("none")
    }
    const e = () => {
        setC2("block")
    }
    const f = () => {
        setC2("none")
    }
   
    
    const h = () => {
        ref.current.style.color = ' rgb(29, 29, 29)'
    }
   

    return (
        <>
       
            <section className="sec1"style={{ color: (s % 2 == 0) ? "rgb(88, 88, 90)" : "white", background: (s % 2 == 0) ? "white" : "rgb(87, 87, 89)" }} >
                <div className="div1" onMouseLeave={f}>
                    <Link className="l1" to="/">home</Link>
                <div onMouseLeave={f}>
                    <div className="l1" onMouseEnter={r} >Categories  </div>
                    </div>

                    <div className="l1" onMouseEnter={e} >features</div>
                    <div className="l1" to="/Product" >product</div>
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
                    {(s%2==0)?<button onClick={dark}><CiDark /></button>:<button onClick={dark}><CiLight /></button>}
                    <Link className="l3"> <IoIosSearch /></Link>
                    <Link className="l3"><CiHeart /></Link>
                    <Link className="l3" to="Login"> <FaRegUser /></Link>
                    <Link className="l2" to="Registration"> REG</Link>
                    <Link className="l3" to="Cart"> <CiShoppingCart /></Link>

                </div>
            </section>

            <div className="categories1" onMouseEnter={r} onMouseLeave={d} style={{ display: c1 }}>
                <article className="g"  >
                    <div id="var1">VARIATIONS 1</div>
                    <div>
                        <Link className="var2" to="/Full_width_banner">FULL WIDTH BANNER</Link>
                    </div>
                    <div>
                        <Link className="var2" to="/No Sidebar Banner">NO SIDBAR BANNER</Link>
                    </div>
                    <div>
                        <Link className="var2" to="/Infinite Ajax Scroll"> INFINITE AJAX SCROLL</Link>
                    </div> <div>
                        <Link className="var2" to="/Hidden Filter">HIDDEN FILTER</Link>
                    </div> <div>
                        <Link className="var2" to="/Horizontal Filter">HORIZONTAL FILTER</Link>
                    </div> <div>
                        <Link className="var2" to="/Off Canvas Filter">OFF CANVAS FILTER</Link>
                    </div><div>
                        <Link className="var2" to="/Image, Color Swatch">IMAGE,COLOR SWATCH</Link>
                    </div><div>
                        <Link className="var2" to="/With Right Sidebar">WITH RIGHT SIDEBAR</Link>
                    </div>
                </article>
                <article>
                    <div id="var1">VARIATIONS 2</div>
                    <div className="g" onMouseLeave={h}>
                        <div>
                            <Link className="var2" to="/  Quantity FieldNEW">QUANTITY FIELD</Link>
                        </div>
                        <div>
                            <Link className="var2" to="/ Columns Mode">3 COLUMNS MODE</Link>
                        </div>
                        <div>
                            <Link className="var2" to="/ Columns Mode">3 COLUMNS MODE</Link>
                        </div>
                        <div>
                            <Link className="var2" to="/ Columns Mode">3 COLUMNS MODE</Link>
                        </div>
                        <div>
                            <Link className="var2" to="/ Columns Mode">3 COLUMNS MODE</Link>
                        </div><div>
                            <Link className="var2" to="/ Columns Mode">3 COLUMNS MODE</Link>
                        </div><div>
                            <Link className="var2" to="/ Columns Mode">3 COLUMNS MODE</Link>
                        </div><div>
                            <Link className="var2" to="/ Full Width Mode">FULL WIDTH MODE</Link>
                        </div>
                    </div>
                </article>
                <article>
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2023/10/shop3-menu-banner-1.jpg" alt="" />
                </article>
            </div>




            <div className="categories2" onMouseEnter={e} onMouseLeave={f} style={{ display: c2 }}>
                <div className="g">
                <div>
                    <Link className="var3" to="Header Builder & TypesNEW">HEADER BUILDER & TYPES </Link>
                </div>
                <div>
                    <Link className="var3" to="Custom Product LayoutNEW">CUSTOM PRODUCT LAYOUT</Link>
                </div>
                <div>
                    <Link className="var3" to="Porto Studio">PORTO STUDIO</Link>
                </div>
                <div>
                    <Link className="var3" to="Whats New">WHAT'S NEW</Link>
                </div>
                <div>
                    <Link className="var3" to="Top Performance">TOP PERFORMANCE</Link>
                </div>
                <div>
                    <Link className="var3" to="Speed Optimize Wizard">SPEED OPTIMIZE WIZARD</Link>
                </div>
                <div>
                    <Link className="var3" to="One Click Install Demo">ONE CLICK INSTALL DEMO</Link>
                </div>
                <div>
                    <Link className="var3" to="Single Page Navigation">SINGLE PAGE NAVIGATION</Link>
                </div>
                <div>
                    <Link className="var3" to="Live Search">LIVE SEARCH</Link>
                </div>
                <div>
                    <Link className="var3" to="Skeleton Screens">SKELETON SCREENS</Link>
                </div>
                </div>
            </div>
        </>
    )
}
export default Navbar 