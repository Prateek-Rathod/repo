import React from 'react'
import Tittle from '../components/Tittle';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Tittle text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 px-4'>
        <img src={assets.about_img} className='w-full md:max-w-[450px] rounded-lg shadow-md' alt="About us" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to <b className='text-gray-800'>Forever</b> – your trusted destination for effortless and enjoyable online shopping. 
            At Forever, we are committed to providing a seamless experience by offering a wide range of quality products, fast delivery, and reliable service you can count on.
          </p>

          <p>
            We bring together carefully selected collections that blend style, function, and value — from trendy fashion and tech accessories to home essentials and more. 
            Our partnerships with both established and up-and-coming brands ensure that you’ll always find something fresh, useful, and inspiring.
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>
            At Forever, our mission is to make online shopping simple, smart, and accessible. 
            We believe shopping should be more than just a transaction — it should be a satisfying experience tailored to your needs. 
            That’s why we focus on user-friendly design, exceptional support, and fast, secure deliveries.
          </p>

          <p>
            Thank you for making <b className='text-gray-800'>Forever</b> part of your lifestyle. 
            We’re here to support your everyday moments, your celebrations, and everything in between.
          </p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Tittle text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            Every product listed on Forever undergoes strict quality checks to ensure it meets our high standards. 
            We only partner with verified suppliers, so you can shop confidently knowing that what you see is what you get — durable, functional, and stylish.
          </p>
        </div>

        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Shop anytime, anywhere. Our intuitive platform is designed to save you time and make online shopping easy. 
            From browsing and filtering products to secure checkout and tracking your orders — we’ve simplified every step so you can focus on what matters.
          </p>
        </div>

        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our friendly and responsive support team is always ready to help. Whether you have a question, need assistance with an order, or want to share feedback — we're here for you. 
            At Forever, we believe in building relationships, not just making sales.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
