import { useEffect } from "react";
import {Routes, Route,  useNavigate } from 'react-router-dom';
import Buttons from "./buttons";
import CheckoutPage from "./checkoutPage";
function CartDetailPopUp(props) {
    let cartData = props.cart;
    let navigate = useNavigate(); 
    const gotoCheckoutPage = () =>{ 
      let path = `/checkoutPage`; 
      navigate(path);
    }

    return (
        <div className="w-80 h-64 bg-white shadow-lg rounded-lg absolute right-0 z-10 overflow-auto flex flex-col">
            <div className="flex-1">
                {
                         cartData.map((data) => (
                        <div className="flex px-3 py-1 gap-3 items-center" key={data.prodId}>
                            <div className="relative">
                                <span className="absolute right-0 bg-slate-600 w-4 h-4 rounded-xl text-white flex items-center justify-center text-sm">
                                    3
                                </span>

                                <img width={"70px"} src={data.image} className="shadow-lg" />
                            </div>
                            <div className="cart-data flex flex-col">
                                <b>{data.name}</b>
                                <span className="text-left">{data.price}</span>
                            </div>
                        </div>

                    ))
                }
            </div>
            <CheckoutPage  datastoCheckout = {cartData}/>
            {/* <Buttons btnName="checkout" /> */}
            <button className="text-white font-bold py-2 px-4 rounded bg-green-500" onClick={gotoCheckoutPage} >
                checkout </button>
        </div>
    )

}

export default CartDetailPopUp;