import "./home.css"
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer=()=>{
    return(
        <>
          <div className="su1"></div>
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
        
        
                    <div className="s1"></div>
        
        
                    
        </>
    )
}
export default Footer;