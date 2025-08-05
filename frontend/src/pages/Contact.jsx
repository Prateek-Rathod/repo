import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Tittle text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-between md:flex-row gap-10 mb-28 px-4'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px] rounded-md shadow-md' alt="Contact" />

        <div className='flex flex-col justify-between items-start gap-6 text-gray-600'>
          <p className='font-semibold text-xl'>Our Store</p>
          <p className='text-gray-500'>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>

          <p className='text-gray-500'>
            Tel: (415) 555-0132 <br />
            Email: support@BuyBuddiesshop.com
          </p>

          <p className='font-semibold text-xl'>Careers at BuyBuddies</p>
          <p className='text-gray-500'>
            Join a passionate, innovative team that’s redefining the future of online shopping. 
            Explore opportunities to grow, create, and lead with us at BuyBuddies.
          </p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
