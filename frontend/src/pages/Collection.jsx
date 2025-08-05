import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Tittle from '../components/Tittle';
import ProductItems from '../components/ProductItems';
import { useLocation } from 'react-router-dom';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const location = useLocation();

  // Read category & subcategory from URL query params when page loads
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    const subCat = params.get('subcategory');

    if (cat) {
      setCategory([capitalize(cat)]);
    }
    if (subCat) {
      setSubCategory([capitalize(subCat)]);
    }
  }, [location.search]);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productscopy = [...products];

    // Search filter
    if (showSearch && search) {
      productscopy = productscopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category.length > 0) {
      productscopy = productscopy.filter(item =>
        category.includes(item.category)
      );
    }

    // Subcategory filter
    if (subCategory.length > 0) {
      productscopy = productscopy.filter(item =>
        subCategory.includes(item.subCategory)
      );
    }

    // Price range filter
    productscopy = productscopy.filter(
      item => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    setFilterProducts(productscopy);
  };

  const sortProduct = (list) => {
    let sortedList = [...list];
    switch (sortType) {
      case 'low-high':
        sortedList.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedList.sort((a, b) => b.price - a.price);
        break;
      default:
        // Relevant = keep as is
        break;
    }
    setFilterProducts(sortedList);
  };

  // Initial load
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // Apply filter whenever filters/search change
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, priceRange, search, showSearch, products]);

  // Sort whenever sortType changes
  useEffect(() => {
    sortProduct(filterProducts);
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Sidebar */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            alt=""
          />
        </p>

        {/* Price Range */}
        <div className={`border border-gray-300 px-5 py-4 mt-6 rounded-none ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>PRICE RANGE</p>
          <input
            type='range'
            min='0'
            max='10000'
            step='100'
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className='w-full'
          />
          <p className='text-sm text-gray-700 font-medium mt-2'>
            ₹{priceRange[0]} - ₹{priceRange[1]}
          </p>
        </div>

        {/* Category */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Men', 'Women', 'Kids', 'Sports'].map((item) => (
              <label key={item} className='flex gap-2'>
                <input
                  type='checkbox'
                  className='w-3'
                  value={item}
                  onChange={toggleCategory}
                  checked={category.includes(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUBCATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Topwear', 'Bottomwear', 'Footwear', 'Accessories'].map((item) => (
              <label key={item} className='flex gap-2'>
                <input
                  type='checkbox'
                  className='w-3'
                  value={item}
                  onChange={toggleSubCategory}
                  checked={subCategory.includes(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Tittle text1={'ALL'} text2={'COLLECTIONS'} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value='relevant'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <ProductItems
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
