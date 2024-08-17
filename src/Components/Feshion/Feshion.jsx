import React from 'react';
import image from '../../assets/cat1.jpg.webp';
import image2 from '../../assets/cat2.jpg.webp';
import image3 from '../../assets/cat3.jpg.webp';

const Fashion = () => {
    return (
        <div className="p-4 my-4">
            <h2 className='text-3xl text-center py-3 font-semibold'>Fashion</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">

                {/* First Item */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
                    <img src={image} alt="Fashion 1" className="w-full h-64 object-cover rounded-md mb-4" />
                    <h1 className="text-xl font-semibold text-gray-800">Fashion Style 1</h1>
                    <p className="text-gray-600 text-center">Discover the latest trends in fashion and style with this collection.</p>
                </div>

                {/* Second Item */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
                    <img src={image2} alt="Fashion 2" className="w-full h-64 object-cover rounded-md mb-4" />
                    <h1 className="text-xl font-semibold text-gray-800">Fashion Style 2</h1>
                    <p className="text-gray-600 text-center">Explore our new arrivals and enhance your wardrobe today.</p>
                </div>

                {/* Third Item */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
                    <img src={image3} alt="Fashion 3" className="w-full h-64 object-cover rounded-md mb-4" />
                    <h1 className="text-xl font-semibold text-gray-800">Fashion Style 3</h1>
                    <p className="text-gray-600 text-center">Stay ahead in fashion with our exclusive collection of styles.</p>
                </div>

            </div>
        </div>
    );
};

export default Fashion;
