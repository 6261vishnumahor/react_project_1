import "./home.css"
import girlimage from "./assets/pngtree-indian-girl-with-shopping-bag-png-image_11436102-removebg-preview.png"
import { CiStar } from "react-icons/ci";
import { RiCustomerServiceLine } from "react-icons/ri";
import { PiContactlessPaymentThin } from "react-icons/pi";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md"
// import { CiFacebook } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
import { useContext } from "react";
import { MyContext } from "./context.jsx";
import { Link } from "react-router-dom";
import "./nextfiles/shopNow.jsx"


// <style>
//     @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+SC:ital,wght@0,100..900;1,100..900&display=swap');
// </style>

const Home = () => {
    const {s, setS, dark}= useContext(MyContext)
    const cart = [{
        "icon": <MdOutlineLocalShipping />,
        "suport": "FREE SHIPPING",
        "suport1": "Orders Over $99",
        "suport2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib."
    },
    {

        "icon": <GiReturnArrow />,
        "suport": "FREE RETURNS",
        "suport1": "Easy & Free",
        "suport2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib."
    },

    {

        "icon": <PiContactlessPaymentThin />,
        "suport": "SECURED PAYMENT",
        "suport1": "Safe & Fast",
        "suport2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet."

    },
    {
        "icon": <RiCustomerServiceLine />,
        "suport": "CUSTOMER SUPPORT",
        "suport1": "Need Assistence?",
        "suport2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib."
    }
    ]



    return (
        <>
<section style={{ color: (s % 2 == 0) ? "rgb(88, 88, 90)" : "white", background: (s % 2 == 0) ? "white" : "rgb(87, 87, 89)" }}>
            <div className="div" >
                <div className="hero">
                    <article className="a1">Find the Boundariese.Push Through</article>
                    <article className="a2">Summer Sale</article>
                    <article className="a3">
                        <div className="a4"><img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-intro-brand.png?id=2325" alt="" /></div>
                    </article>
                </div>
                <div>
                    <img src={girlimage} alt=" image not found" />
                </div>
                <div className="d">
                    <article className="d1">70%  OFF</article>
                    <div className="d2">
                        <article className="d3">STARTING AT</article>
                        <article className="d4">$199</article>
                        <Link to="shopNow"><button>SHOP NOW!</button>"</Link>
                    </div>
                </div>
            </div>

            <div className="h1">SHOP BY CATEGORY </div>
            <section className="img2">
                <article>
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-category-1.jpg" alt="" />
                    <div className="h2">  SUNGLASSES </div>
                    <div className="h3">2 PRODUCTS</div>
                </article>
                <article>
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-category-2.jpg" alt="" />
                    <div className="h2">BAGS</div>
                    <div className="h3">4 PRODUCTS</div>
                </article>
                <article>
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-category-3.jpg" alt="" />
                    <div className="h2">SHOES</div>
                    <div className="h3">4 PRODUCTS</div>
                </article>
                <article>
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-category-4.jpg" alt="" />
                    <div className="h2">ACCESSORIES</div>
                    <div className="h3">4 PRODUCTS</div>
                </article>
                <article>
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-category-5.jpg" alt="" />
                    <div className="h2">HATS</div>
                    <div className="h3">4 PRODUCTS</div>
                </article>
                <article>
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-category-6.jpg" alt="" />
                    <div className="h2">JACKETS</div>
                    <div className="h3">4 PRODUCTS</div>
                </article>
            </section>


            <section className="sec2">
                <article className="camera">
                    <div className="p1">Porto Watches</div>
                    <div className="p2"> 30%Off</div>
                    <div className="p3">
                        <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-banner-1.png" alt="" />

                    </div>
                    <div className="p4">
                        <div>
                            <button> SHOP NOW!</button>
                        </div>
                        <div>
                            <img className="p5" src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-banner-1-brand.png" alt="" />
                        </div>
                    </div>
                </article>

                <article className="fashion">
                    <div className="c1">TRENDING <br></br> Fashion Sales</div>
                    <div className="c2">STARTING AT $99</div>
                    <button>SHOP NOW</button>
                    <div className="c3">
                        <img className="c4" src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-banner-2.png" alt="" />
                        <img className="c5" src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-banner-1-brand.png" alt="" />
                    </div>
                </article>
                <article className="dis">
                    <div className="dis1">CHECK OUR DISCOUNTS</div>
                    <div className="dis2">MORE THEN <br></br>20 BRANDS</div>
                    <section className="dis4">
                        <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-banner-3-brand1.png" alt="" />
                        <button>SHOP NOW</button>
                        <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-banner-3-brand2.png" alt="" />
                    </section>
                </article>
            </section>
            <div className="pop">
                POPULAR PRODUCTS
            </div>
            <section className="sec3">
                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">SHOES</div>
                        <div className="shoes2">New Balance Fresh Foam</div>
                        <div><CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3">$109.00</div>
                    </article>
                </article>

                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-13-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">BAGS, HATS</div>
                        <div className="shoes2">Pioilj Messenger Bag</div>
                        <div><CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3">$39.00</div>
                    </article>
                </article>


                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2024/01/shop3-soft-product-12-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">JACKETS</div>
                        <div className="shoes2">Sleeveless ribbed T-shirt</div>
                        <div><CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3">$49.00</div>
                    </article>
                </article>


                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-11-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">SUNGLASSES</div>
                        <div className="shoes2">Beach Force Sunglasses</div>
                        <div>
                            <CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3">$79.00</div>
                    </article>
                </article>


                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-10-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">SUNGLASSES</div>
                        <div className="shoes2">Redele Sunglasses</div>
                        <div>
                            <CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3">$101.00 - $111.00</div>
                    </article>
                </article>


                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-9-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">SHOES</div>
                        <div className="shoes2">Sneakers CONVERSE</div>
                        <div>
                            <CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3">$101.00 - $111.00</div>
                    </article>
                </article>


                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-8-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">BAGS</div>
                        <div className="shoes2">Tallinn Cabin Bag</div>
                        <div>
                            <CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3">$101.00 - $111.00</div>
                    </article>
                </article>


                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-7-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">SHOES</div>
                        <div className="shoes2">Womens 3 Faux Leather Shoes</div>
                        <div>
                            <CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3">$101.00 - $111.00</div>
                    </article>
                </article>

                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-6-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">SHOES</div>
                        <div className="shoes2">Sleeveless Viscose Top</div>
                        <div>
                            <CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3"> $259.00</div>
                    </article>
                </article>


                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-5-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">SHOES</div>
                        <div className="shoes2">Panelled Lace-Up Sneakers</div>
                        <div>
                            <CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3">$199.00 - $299.00</div>
                    </article>
                </article>


                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-4-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">SHOES</div>
                        <div className="shoes2">Coccinelle Liya Hobo bag</div>
                        <div>
                            <CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3"> $259.00</div>
                    </article>
                </article>

                <article className="shoes">
                    <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-3-2-300x300.jpg" alt="" />
                    <article>
                        <div className="shoes1">SHOES</div>
                        <div className="shoes2">Rick Owens Black Sandals</div>
                        <div>
                            <CiStar />
                            <CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <div className="shoes3"> $259.00</div>
                    </article>
                </article>

            </section>
            <div className="su1"></div>
            <div className="su">
                {

                    cart.map(e => (
                        <div className="sup">
                            <div className="sup1">{e.icon}</div>
                            <div className="sup2">{e.suport}</div>
                            <div className="sup3">{e.suport1}</div>
                            <div className="di3">{e.suport2}</div>
                        </div>
                    ))

                }
            </div>

             {/* <div className="su1"></div>
            <section className="sec4">
                <article>
                    <div>SUBSCRIBE NEWSLETTER</div>
                    <div>Get all the latest information on Events, Sales and Offers</div>
                </article>
                <article>
                    <div className="inpt">
                        <input type="text" placeholder="Enter the email" />
                        <div className="sub">SUBSCRIBE</div>
                    </div>
                </article>
                <article>
                    <div className="icon">
                        <article>
                            <CiFacebook />
                        </article>
                        <article>
                            <FaXTwitter />

                        </article>
                        <article>
                            <FaInstagram />
                        </article>
                    </div>
                </article>
            </section>



            <div className="su1"></div>


            <section className="sec5">
                <article>
                    <div className="con">CONTACT INFO</div>
                    <div className="di1">
                        <div>
                            <div className="add">
                                <div className="di2">ADDRESS:</div>
                                <div className="di3">1234 Street Name, City, England</div>
                            </div>
                            <div className="add">
                                <div className="di2">EMAIL:</div>
                                <div className="di3">mail@example.com</div>
                            </div>
                        </div>

                        <div>
                            <div className="add">
                                <div className="di2">PHONE:</div>
                                <div className="di3">(123) 456-7890</div>
                            </div>
                            <div className="add">
                                <div className="di2">WORKING DAYS/HOURS:</div>
                                <div className="di3">Mon - Sun / 9:00 AM - 8:00 PM</div>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="con"> MY ACCOUNT</div>
                    <div className="myaccount">
                        <div>
                            <div className="di3">About us</div>
                            <div className="di3">Contact us</div>
                            <div className="di3">My Account</div>
                        </div>
                        <div>
                            <div className="di3">Order History</div>
                            <div className="di3">Advanced Search</div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="con">MAIN FEATURES</div>
                    <div className="myaccount">
                        <div>
                            <div className="di3">Super Fast WordPress Theme</div>
                            <div className="di3">1st Fully working Ajax Theme</div>
                            <div className="di3">42 Unique Shop Layouts</div>
                        </div>
                        <div>
                            <div className="di3">Powerful Admin Panel </div>
                            <div className="di3">Mobile & Retina Optimized</div>
                        </div>
                    </div>
                </article>
            </section>


            <div className="s1"></div> */}


            </section> 
        </>
    )
}
export default Home;