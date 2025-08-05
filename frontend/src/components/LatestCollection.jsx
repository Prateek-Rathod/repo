import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle'
import ProductItems from './ProductItems';
const LatestCollection = () => {
    const { products }=useContext(ShopContext);
    const [latestProduct,setLatestProduct]=useState([]);
    useEffect(()=>{
      setLatestProduct(products.slice(0,10));
    },[products])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Tittle text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Explore our newest arrivals, featuring the latest trends and must-have essentials. From stylish fashion to everyday essentials, shop our fresh collection and stay ahead of the trends!
        </p>
      </div>
      {/* Rendering products  */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProduct.map((item,index)=>(
            <ProductItems key={index} id={item._id} image={item.image} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
