import React, { useEffect, useState } from 'react';
import { SetProducts } from '../../Hooks/SetProducts';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { products, totalPages } = await SetProducts(page, search, category, minPrice, maxPrice, sortBy);
                setProducts(products);
                setTotalPages(totalPages);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [page, search, category, minPrice, maxPrice, sortBy]);

    // Pagination buttons rendering logic
    const ButtonPageNumber = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <input
                    key={i}
                    type="radio"
                    name="pagination"
                    aria-label={`${i}`}
                    className="join-item btn btn-square"
                    checked={i === page}
                    onChange={() => setPage(i)}
                />
            );
        }
        return pageNumbers;
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
            <div className="flex flex-col md:flex-row gap-5">
                {/* Filters Section */}
                <div className="flex flex-col md:w-1/3 p-4 bg-gray-100 border border-gray-300 rounded-lg mb-6 md:mb-0">
                    {/* Category Filter */}
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-lg font-medium mb-2">Category</label>
                        <select
                            id="category"
                            className="select select-bordered w-full"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Book">Books</option>
                        </select>
                    </div>

                    {/* Price Range */}
                    <div className="mb-4">
                        <label htmlFor="priceRange" className="block text-lg font-medium mb-2">Price Range</label>
                        <div className="flex space-x-2">
                            <input
                                type="number"
                                id="minPrice"
                                placeholder="Min Price"
                                className="input input-bordered w-full"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                            <span className="text-gray-500">-</span>
                            <input
                                type="number"
                                id="maxPrice"
                                placeholder="Max Price"
                                className="input input-bordered w-full"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Sorting */}
                    <div>
                        <label htmlFor="sortBy" className="block text-lg font-medium mb-2">Sort By</label>
                        <select
                            id="sortBy"
                            className="select select-bordered w-full"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="">Select Sorting</option>
                            <option value="low-to-hight">Price: Low to High</option>
                            <option value="hight-to-low">Price: High to Low</option>
                            <option value="dateDesc">Date Added: Newest First</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="flex-grow">
                    {/* Search Bar */}
                    <div className="flex justify-between items-center mb-6">
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map(product => (
                            <div 
                                key={product._id} 
                                className="card shadow-lg flex flex-col"
                                style={{ height: '100%' }}
                            >
                                <figure><img src={product.image} alt={product.name} className="w-full h-48 object-cover" /></figure>
                                <div className="card-body flex-grow">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p className="text-lg font-bold">${product.price}</p>
                                    <p className="text-sm">Category: {product.category}</p>
                                    <p className="text-sm">Ratings: {product.ratings}</p>
                                    <p className="text-sm">Added on: {new Date(product.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-8">
                        <div className="join">
                            {ButtonPageNumber()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
