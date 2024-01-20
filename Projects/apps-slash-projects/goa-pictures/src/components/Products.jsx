import React, { useState } from "react";
import Cart from "./Cart";

function Products(){
    const [orderedProducts, setOrderedProducts] = useState([]);

    let productsObj = [
        {name: 'Blackmagic Design Cinema Camera 6K Full Frame', dailyRent: 70, price: 3000, priceLari: 9000, pic: 'https://www.bhphotovideo.com/images/images2500x2500/blackmagic_design_cinema_camera_6k_1787634.jpg', id: 1},
        {name: 'Blackmagic Design Pocket Cinema Camera 6K Pro', dailyRent: 60, price: 3000, priceLari: 9000, pic: 'https://www.bhphotovideo.com/images/images2500x2500/blackmagic_design_cinecampochdef6kp_pocket_cinema_camera_6k_1625642.jpg', id: 2},
        {name: 'Canon EOS 5D Mark IV DSLR Camera', dailyRent: 40, price: 3300, priceLari: 9000, pic: 'https://www.bhphotovideo.com/images/images2500x2500/blackmagic_design_cinema_camera_6k_1787634.jpg', id: 3},
        {name: 'Venus Optics LAOWA Pro2be 24mm T8 2x Probe Lens', dailyRent: 100, price: 2800, priceLari: 5800, pic: 'https://www.bhphotovideo.com/images/images2500x2500/venus_optics_ve2480pl_dv_laowa_pro2be_24mm_t8_1782113.jpg', id: 4},
        {name: 'Canon EF 24mm f/1.4L II USM Lens', dailyRent: 30, price: 1500, priceLari: 5000, pic: 'https://www.bhphotovideo.com/images/images1000x1000/Canon_2750B002_EF_24mm_f_1_4L_II_590449.jpg', id: 5},
        {name: 'Tamron SP 150-600mm f/5-6.3 Di VC USD G2 for Canon EF', dailyRent: 30, price: 1400, priceLari: 5000, pic: 'https://www.bhphotovideo.com/images/images2500x2500/tamron_sp_150_600mm_f_5_6_3_di_1277358.jpg', id: 6},
        {name: 'Canon EF 70-200mm f/2.8L is II USM Telephoto Zoom Lens for Canon EF', dailyRent: 25, price: 1000, priceLari: 2700, pic: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71xh1CcUT9L.__AC_SX300_SY300_QL70_FMwebp_.jpg', id: 7},
        {name: 'Dulens APO Mini Prime 31mm T2.4 Lens', dailyRent: 30, price: 900, priceLari: 3000, pic: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/dulens_du_apo_31_apo_mini_prime_31mm_1684337735_1767018.jpg', id: 8},
        {name: 'Lensbaby Velvet 56mm f/1.6 SE Lens for Canon EF', dailyRent: 25, price: 650, priceLari: 2000, pic: 'https://www.bhphotovideo.com/images/images1000x1000/lensbaby_lbv56ledc_velvet_56_se_for_1730944.jpg', id: 9},
        {name: 'Rokinon 8mm f/3.5 Fisheye Lens for Canon EF', dailyRent: 70, price: 3000, priceLari: 9000, pic: 'https://www.bhphotovideo.com/images/images2500x2500/blackmagic_design_cinema_camera_6k_1787634.jpg', id: 10},
    ]

    function addToCart(e){
        setOrderedProducts([...orderedProducts, e]);
    }

    return (
        <>
            <div className="w-screen h-96 bg-green-c items-center flex flex-row overflow-x-scroll">
                {productsObj.map((e) =>{
                    return (
                        <div className="h-72 min-w-40 p-4 ml-4 flex flex-col justify-between items-center bg-green-b rounded-lg" key={e.id}>
                            <img src={e.pic} className="w-96 inline-block rounded-md"></img>
                            <p className="text-white font-bold">Price: ${e.price}</p>
                            <button className="bg-green-d p-2 w-full rounded-full" onClick={() => addToCart(e)}>Add To Cart</button>
                        </div>
                    )
                })}
            </div>

            <Cart arr={orderedProducts}/>
        </>
        
    )
    
}

export default Products