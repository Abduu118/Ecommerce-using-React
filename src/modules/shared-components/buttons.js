function Buttons(props) {
    let variantStyles = "text-white font-bold py-2 px-4 rounded"
    if (props.bgType == "sec") {
        variantStyles += " bg-gray-500";
    } else if (props.bgType == "err") {
        variantStyles += " bg-red-500"
    } else {
        variantStyles += " bg-green-500"
    }
let buttonName;
if (props.btnName == "checkout"){
    buttonName = "Checkout"
} else if (props.btnName == "shopNow"){
    buttonName = "Shop Now"
} else if (props.btnName == "search"){
    buttonName = "Search"
}
    return (
        <button className={variantStyles}>
            <span className="fill-white">{buttonName}</span>
        </button>
    );
}

export default Buttons;