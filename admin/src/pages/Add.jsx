import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

// Mega menu category → section → subcategory
const categoriesData = {
  Men: {
    Topwear: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Sweaters", "Jackets", "Blazers & Coats", "Suits", "Rain Jackets"],
    Bottomwear: ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"],
    Footwear: ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floaters", "Flip Flops", "Socks"]
  },
  Women: {
    Topwear: ["Tops", "T-Shirts", "Shirts", "Kurtis", "Sweaters", "Jackets & Coats", "Blazers"],
    Bottomwear: ["Jeans", "Jeggings", "Trousers", "Shorts", "Skirts", "Track Pants & Joggers"],
    Footwear: ["Flats", "Casual Shoes", "Heels", "Boots", "Sports Shoes", "Flip Flops"]
  },
  Kids: {
    "Boys Clothing": ["T-Shirts", "Shirts", "Jeans", "Shorts", "Track Pants"],
    "Girls Clothing": ["Dresses", "Tops", "T-Shirts", "Jeans", "Skirts", "Leggings"],
    Footwear: ["Casual Shoes", "Sports Shoes", "Sandals", "Flip Flops"]
  }
};

// Size options
const topwearSizes = ["S", "M", "L", "XL", "XXL"];
const bottomwearSizes = ["28", "30", "32", "34", "36", "38"];
const footwearSizes = ["6", "7", "8", "9", "10"];

const Add = ({ token }) => {
  const [images, setImages] = useState([null, null, null, null]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [section, setSection] = useState(Object.keys(categoriesData["Men"])[0]);
  const [subCategory, setSubCategory] = useState(categoriesData["Men"][Object.keys(categoriesData["Men"])[0]][0]);
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // Image upload handler
  const handleImageChange = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  // Toggle size selection
  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Category change handler
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const firstSection = Object.keys(categoriesData[newCategory])[0];
    setSection(firstSection);
    setSubCategory(categoriesData[newCategory][firstSection][0]);
    setSizes([]);
  };

  // Section change handler
  const handleSectionChange = (newSection) => {
    setSection(newSection);
    setSubCategory(categoriesData[category][newSection][0]);
    setSizes([]);
  };

  // Determine sizes based on section
  const getSizeOptions = () => {
    const secLower = section.toLowerCase();
    if (secLower.includes("footwear")) return footwearSizes;
    if (secLower.includes("bottomwear") || secLower.includes("trousers") || secLower.includes("jeans")) return bottomwearSizes;
    return topwearSizes;
  };

  // Submit product
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("section", section);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      images.forEach((img, i) => {
        if (img) formData.append(`image${i + 1}`, img);
      });

      const res = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setName('');
        setDescription('');
        setPrice('');
        setImages([null, null, null, null]);
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const currentSizeOptions = getSizeOptions();

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      {/* Image Upload */}
      <div>
        <p className="mb-2">Upload Images</p>
        <div className="flex gap-2">
          {images.map((img, idx) => (
            <label key={idx} htmlFor={`image${idx + 1}`}>
              <img
                className="w-20"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt=""
              />
              <input
                onChange={(e) => handleImageChange(idx, e.target.files[0])}
                type="file"
                id={`image${idx + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 border"
          type="text"
          placeholder="Type Here"
          required
        />
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 border"
          placeholder="Write content here"
          required
        />
      </div>

      {/* Category / Section / Subcategory / Price */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* Category */}
        <div>
          <p className="mb-2">Category</p>
          <select
            onChange={(e) => handleCategoryChange(e.target.value)}
            value={category}
            className="w-full px-3 py-2 border"
          >
            {Object.keys(categoriesData).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Section */}
        <div>
          <p className="mb-2">Section</p>
          <select
            onChange={(e) => handleSectionChange(e.target.value)}
            value={section}
            className="w-full px-3 py-2 border"
          >
            {Object.keys(categoriesData[category]).map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory */}
        <div>
          <p className="mb-2">SubCategory</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-3 py-2 border"
          >
            {categoriesData[category][section].map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <p className="mb-2">Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 border sm:w-[120px]"
            type="number"
            placeholder="Enter Price"
            required
          />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-2">Sizes</p>
        <div className="flex gap-3 flex-wrap">
          {currentSizeOptions.map((size) => (
            <div key={size} onClick={() => toggleSize(size)}>
              <p
                className={`${
                  sizes.includes(size) ? "bg-pink-200" : "bg-slate-200"
                } px-3 py-1 cursor-pointer rounded`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white rounded">
        ADD
      </button>
    </form>
  );
};

export default Add;
