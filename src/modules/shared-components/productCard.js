import { ImHeart, ImCart } from "react-icons/im";
import { useContext, useState } from "react";
import { CartContext } from "./CreateContext";
function ProductCard(props) {
    let cardData = props.cardData;
    const { cart, setCart } = useContext(CartContext);
    function addToCart(prodId) {
        if (!cart.includes(prodId)) {
            setCart([...cart, prodId]);
        }
    }

    //stateHook 
    const [qty, setQty] = useState(0);
    // const [like, setLike]= useState(0);
    const [like, setLike] = useState(false);

    // function printQty() {
    //     console.log(qty);
    // }

    const [isActive, setIsActive] = useState(true);
    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <div className="featured__item bg-gray-100 rounded ">
                <div className="featured__item__pic flex p-2" >
                    <img className="object-contain" src={cardData.image} />
                    <span className="absolute">Quantity:<b className="ml-2">{qty}</b></span>
                    <span className="absolute right-4">Like:<b className="ml-2">{like}</b></span>
                    <ul className="featured__item__pic__hover flex align-center justify-center">
                        <li><a  onClick={handleClick}  className={`${isActive ? 'active' : ''} cursor-pointer flex align-center justify-center text-green-500 bg-white` }>
                            <ImHeart className="inline" />
                            {/* onClick={() => {setLike(like + 1);}} */}
                        </a></li>
                        <li ><a onClick={() => addToCart(cardData)} className="cursor-pointer flex align-center justify-center text-green-500 bg-green-600">
                            <ImCart className="inline" />
                            {/* onClick={() => { setQty(qty + 1);}} */}
                        </a></li>
                    </ul>
                </div>
                <div className="featured__item__text bg-green-500 py-3 rounded-lg">
                    <h6 className=" text-white"><a href="#" ></a>{cardData.name}</h6>
                    <h5 className=" text-white">{cardData.price}</h5>
                </div>
            </div>
        </>
    );
}

export default ProductCard;