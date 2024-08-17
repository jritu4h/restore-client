import React from 'react';
import Hero from '../../assets/hero_man.png.webp';
const Banner = () => {
    return (
        <div>
            

            <div className="hero bg-pink-200 pt-8">
  <div className="hero-content flex-col items-center lg:flex-row">
    <img
      src={Hero}
      className=" h-[430px] rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold"> Estore LTD</h1>
      <p className="py-4">
      Welcome to Estore LTD, your one-stop shop.
                     Discover great deals on quality products.
                    Experience shopping like never before.
      </p>
      <button className="btn bg-blue-500 hover:bg-blue-500 text-white">SHOP NOW</button>
    </div>
  </div>
</div>







        </div>
    );
};

export default Banner;