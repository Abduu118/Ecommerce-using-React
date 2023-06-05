import React, { useContext, useState, } from "react";
import { ImFacebook, ImTwitter, ImLinkedin2, ImInstagram, ImCart, ImHeart, ImUser } from "react-icons/im";
import CartDetailPopUp from "./cartDetailPopUp";
import { CartContext } from "./CreateContext";

function HeaderSection(props) {
    let cardData = props.cardData;
    const { cart, setCart } = useContext(CartContext);
    let showNavBar = props.navLists;
    const [toggle, setToggle] = useState(true)
    return (
        <>
            <div>
                <header className="header">
                    <div className="header__top">
                        <div className="container mx-auto">
                            <div className="flex">
                                <div className="flex-auto">
                                    <div className="header__top__left">
                                        <ul>
                                            <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                            <li>Free Shipping for all Order of $99</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex-auto">
                                    <div className="header__top__right">
                                        <div className="header__top__right__social">
                                            <a href="#"><ImFacebook /></a>
                                            <a href="#"><ImTwitter /></a>
                                            <a href="#"><ImLinkedin2 /></a>
                                            <a href="#"><ImInstagram /></a>
                                        </div>
                                        <div className="header__top__right__language">
                                            {/* <img src="img/language.png" alt=""> */}
                                            <div>English</div>
                                            <span className="arrow_carrot-down"></span>
                                            <ul>
                                                <li><a href="#">Spanis</a></li>
                                                <li><a href="#">English</a></li>
                                            </ul>
                                        </div>
                                        <div className="header__top__right__auth">
                                            <a href="#" className="flex flex-row items-center gap-2"><ImUser /> <span>Login</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div className="flex justify-between">
                            <div>
                                <div className="header__logo">
                                    <a href="./index.html"> <img src={'https://preview.colorlib.com/theme/ogani/img/logo.png.webp'} />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <nav className="header__menu">
                                    <ul>
                                        {/* <li className="active"><a className="hover:text-green-500 active:text-green-500" href="./index.html">Home</a></li> */}
                                        {
                                            showNavBar.map((navBarList) => (

                                                <li><a className="hover:text-green-500" href="./shop-grid.html">{navBarList}</a></li>
                                            ))
                                        }
                                        {/* <li><a className="hover:text-green-500" href="#">Pages</a>
                                            <ul className="header__menu__dropdown">
                                                <li><a className="hover:text-green-500" href="./shop-details.html">Shop Details</a></li>
                                                <li><a className="hover:text-green-500" href="./shoping-cart.html">Shoping Cart</a></li>
                                                <li><a className="hover:text-green-500" href="./checkout.html">Check Out</a></li>
                                                <li><a className="hover:text-green-500" href="./blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3">
                                <div className="header__cart relative">
                                    <ul>
                                        <li><a onClick={() => setToggle(!toggle)}  className="cursor-pointer text-black hover:text-green-500"><ImCart className="hover:text-green-500" /> <span className="bg-green-500">{cart.length}</span></a></li>
                                        <li><a href="#" className="hover:text-green-500"><ImHeart className="hover:text-green-500" /> <span className="bg-green-500">3</span></a></li>
                                    </ul>
                                    <div className="header__cart__price">item: <span>$150.00</span></div>
                                    {toggle && (
                                        <CartDetailPopUp  cart={cart}/>
                                        )}
                                </div>
                            </div>
                        </div>
                        <div className="humberger__open">
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default HeaderSection;