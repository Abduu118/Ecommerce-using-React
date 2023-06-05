import Buttons from "./buttons";

function  HeroSection() {
    let bannerText = "Vegetable 100% Organic"
    return (
        <>
        <div className="hero__item set-bg bg-cover"  style={{backgroundImage: "url(https://png.pngtree.com/background/20210710/original/pngtree-healthy-fruits-and-vegetables-green-leaves-literary-green-banner-picture-image_1035930.jpg)"}}>
            <div className="hero__text">
                <span className="text-green-500 py-2 px-3 rounded bg-green-50 ">FRUIT FRESH</span>
                <h2 className="w-80">{bannerText}</h2>
                <p>Free Pickup and Delivery Available</p>
               <Buttons btnName="shopNow" bgType=""/>
            </div>
        </div>
        
        </>
    );
}
export default HeroSection;