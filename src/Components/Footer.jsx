import React from 'react';
// import { icons } from 'react-icons';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
// import {TiSocialPinterest} from 'react-icons/ti';

function Footer() {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
       <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div >
            <h6 className='font-bold uppercase pt-2'>
                Solutions
            </h6>
            <ul>
                <li className='py-1'>Travel</li>
                <li className='py-1'>Booking</li>
                <li className='py-1'>Flights</li>
                <li className='py-1'>Cruises</li>
                <li className='py-1'>Ground</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Support</h6>
            <ul>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>Documentation</li>
                <li className='py-1'>Tours</li>
                <li className='py-1'>Refunds</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
                <li className='py-1'>About</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Jobs</li>
                <li className='py-1'>Press</li>
                <li className='py-1'>Patners</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Legal</h6>
            <ul>
                <li className='py-1'>Cliams</li>
                <li className='py-1'>Privacy</li>
                <li className='py-1'>Terms</li>
                <li className='py-1'>Policy</li>
                <li className='py-1'>Conditions</li>
            </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
            <p>Subcribe to our newsletter</p>
            <p>The Latest deals, articles and resources sent to your inbox</p>
            <form>
                <input type="email" placeholder='enter your email...'/>
                <button className='p-2 mb-4 rounded-md'>Subscibe</button>
            </form>
        </div>
       </div> 
       <div>
        <p className="">2002 Experience, LLC. All rights reserved</p>
       </div>
       <div>
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
       </div>
    </div>
  )
}

export default Footer;