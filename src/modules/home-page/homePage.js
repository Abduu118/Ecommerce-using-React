import React, { useState } from 'react';
import Footer from '../shared-components/footer';
import HeaderSection from '../shared-components/headerSection';
import HeroSearch from '../shared-components/heroSearch';
import HeroSection from '../shared-components/heroSection';
import ProductCard from '../shared-components/productCard';
import SideBar from '../shared-components/sidebar';
import { CartContext } from "../shared-components/CreateContext";


function HomePage() {
    const [cart, setCart] = useState([]);
    const cartValue = { cart, setCart };
    let productList = [
        { prodId: 'OG001', name: 'Cabbage', price: 300, image: 'https://wanya.in/wp-content/uploads/2019/12/p5-1.jpg' },
        { prodId: 'OG002', name: 'Onion', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgLpMZi3PEdgPltevBZsKcvElD_zUFnczRatCxJHHzbiGMOQ0tb2RvncvNb4c04sSshM&usqp=CAU' },
        { prodId: 'OG003', name: 'Carrot', price: 500, image: 'https://www.bazaarfresh.in/wp-content/uploads/2017/01/Carrot.jpg' },
    ]
    let sidebarList = [
        'Fresh Meat', 'Vegetables', 'Fruits'
    ]
    let navBar = ['Home', 'Shop', 'Pages', 'Blog', 'Contact']
    return (
            <CartContext.Provider value={cartValue}>
                <HeaderSection navLists={navBar} />

                <main className='container mx-auto'>
                    <div className="flex gap-7 flex-wrap">
                        <div className='w-1/4'>
                            {
                                <SideBar menuList={sidebarList} />
                            }
                        </div>
                        <div className='flex-auto'>
                            <HeroSearch />
                            <HeroSection />
                        </div>
                        <div className='featured-product text-center mx-auto w-100'>
                            <h3 className='font-bold mb-4'>Featured Product</h3>
                            <div className='flex gap-4'>
                                {
                                    productList.map((productData) => (

                                        <ProductCard cardData={productData} />
                                    ))

                                }
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />

            </CartContext.Provider>
    );
}

export default HomePage;