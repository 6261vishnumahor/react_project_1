import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { useRef, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { useContext } from "react";
import { MyContext } from "./context.jsx";


const Navbar = () => {
    const { s, setS, dark } = useContext(MyContext)
    const v = useNavigate()

    const [c1, setC1] = useState("none")
    const [c2, setC2] = useState("none")
    const [c3, setC3] = useState("none")

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
const a=()=>{
    setC3("flex")
}
const a1=()=>{
    setC3("none")
}

    const h = () => {
        ref.current.style.color = ' rgb(29, 29, 29)'
    }


    return (
        <>

            <section className="sec1" style={{ color: (s % 2 == 0) ? "rgb(88, 88, 90)" : "white", background: (s % 2 == 0) ? "white" : "rgb(87, 87, 89)" }} >
                <div className="div1" onMouseLeave={f}>
                    <Link className="l1" to="/">home</Link>
                    <div onMouseLeave={f}>
                        <div className="l1" onMouseEnter={r} >Categories  </div>
                    </div>

                    <div className="l1" onMouseEnter={e} >features</div>
                    <div className="l1" to="/Product" onMouseEnter={a}>product</div>
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
                    {(s % 2 == 0) ? <button onClick={dark}><CiDark /></button> : <button onClick={dark}><CiLight /></button>}
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
            <section className="product" onMouseEnter={a} onMouseLeave={a1} style={{display:c3}}>
                <article className="product1">
                    <div>
                        <Link className="var4" to="Product Pages">Product Pages</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Simple Product">Simple Product</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Variable Product">Variable Product</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Combo Products">Combo Products</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Countdown Sale">Countdown Sale</Link>
                    </div>
                    <div>
                        <Link className="var4" to="With Custom Tab">With Custom Tab</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Frequently Together">Frequently Together</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Advanced Review">Advanced Review</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Add Cart Sticky">Add Cart Sticky</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Image Swatch">Image Swatch</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Scattered LayoutNew">Scattered LayoutNew</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Video ThumbnailNew">Video ThumbnailNew</Link>
                    </div>
                </article>
                <article className="product1">
                    <div>
                        <Link className="var4" to="Product Layouts">Product Layouts</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Extended Layout">Extended Layout</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Grid Images">Grid Images</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Sticky Info">Sticky Info</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Left & Right Sticky">Left & Right Sticky</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Transparent Images">Transparent Images</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Center Vertical Thumb">Center Vertical Thumb</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Center Full Gallery">Center Full Gallery</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Half Full Gallery">Half Full Gallery</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Boxed Content">Boxed Content</Link>
                    </div>
                    <div>
                        <Link className="var4" to="360 DegreeNew">360 DegreeNew</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Shipping DeliveryNew">Shipping DeliveryNew</Link>
                    </div>
                </article>
                <article className="product1">
                    <div>
                        <Link className="var4" to="Product Loop">Product Loop</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Full Block">Full Block</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Quantity Input">Quantity Input</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Image Bottom">Image Bottom</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Details On Image">Details On Image</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Add To Cart Link">Add To Cart Link</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Box Hover EffectsNew">Box Hover EffectsNew</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Box Shadow Details">Box Shadow Details</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Box Border">Box Border</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Hidden Details">Hidden Details</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Overlay DetailsNew">Overlay DetailsNew</Link>
                    </div>
                    <div>
                        <Link className="var4" to="Button And IconsNew">Button And IconsNew</Link>
                    </div>
                </article>
                <article className="product2">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2023/10/shop3-menu-banner-2.jpg?id=2247" alt="" />
                    <div id="up">UP TO</div>
                    <div id="up1">50%</div>
                    <button>VIEW SALE</button>
                </article>
            </section >
        </>
    )
}
export default Navbar 