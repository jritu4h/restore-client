import React from 'react';
import hero2 from '../../assets/card-man.png.webp';

const MidelBanner = () => {
    return (
        <div>
            <div className="hero bg-blue-200 pt-5">
                <div className="hero-content flex-col items-center lg:flex-row">
                    <img
                        src={hero2}
                        className="h-[430px] rounded-lg" 
                        alt="Mid Banner" />
                    <div>
                        <h1 className="text-5xl font-bold">Find The Best Product<br/>from Our Shop</h1>
                        <p className="py-4">
                            Designers who are interested in creating state-of-the-art designs.
                           Explore our wide range of products and elevate your style.
                          Shop with confidence and experience excellence.
                        </p>
                        <button className="btn bg-blue-500 hover:bg-blue-500 text-white">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidelBanner;
