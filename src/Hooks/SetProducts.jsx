import axios from 'axios';


export const SetProducts = async (page, search = '', category = '', minPrice = '', maxPrice = '', sortBy='') => {
    try {
        const response = await axios.get('https://estore-server-nine.vercel.app/products', {
            params: {
                page,
                search,
                category,
                minPrice: minPrice || 0,
                maxPrice: maxPrice || Infinity,
                sortBy,
            },
        });
       
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};