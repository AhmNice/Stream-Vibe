import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <section>
            <div className="w-screen lg:px-20 pt-20 pb-5 footer">
                    <div className="footerTop lg:flex gap-8 grid grid-cols-2 p-8 lg:items-start items-center lg:justify-between pb-10">
                        <div className='flex flex-col gap-3'>
                          <h4 className='Manrope-SemiBold text-lg text-white'>Home</h4>
                          <ul className='flex flex-col gap-2'>
                            <li className='Manrope-Medium text-gray-400 text-sm'>Categories</li>
                            <li className='Manrope-Medium text-gray-400 text-sm'>Devices</li>
                            <li className='Manrope-Medium text-gray-400 text-sm'>Pricing</li>
                            <li className='Manrope-Medium text-gray-400 text-sm'>FAQ</li>
                          </ul>
                        </div>

                        <div className='flex flex-col gap-3'>
                      <h4 className='Manrope-SemiBold text-lg text-white'>Movies</h4>
                      <ul className='flex flex-col gap-2'>
                        <li className='Manrope-Medium text-gray-400 text-sm'>Gernes</li>
                        <li className='Manrope-Medium text-gray-400 text-sm'>Trending</li>
                        <li className='Manrope-Medium text-gray-400 text-sm'>New Release</li>
                        <li className='Manrope-Medium text-gray-400 text-sm'>Popular</li>
                      </ul>
                    </div>

                    <div className='flex flex-col gap-3'>
                      <h4 className='Manrope-SemiBold text-lg text-white'>Show</h4>
                      <ul className='flex flex-col gap-2'>
                      <li className='Manrope-Medium text-gray-400 text-sm'>Gernes</li>
                        <li className='Manrope-Medium text-gray-400 text-sm'>Trending</li>
                        <li className='Manrope-Medium text-gray-400 text-sm'>New Release</li>
                        <li className='Manrope-Medium text-gray-400 text-sm'>Popular</li>
                      </ul>
                    </div>

                    <div className='flex flex-col gap-3'>
                      <h4 className='Manrope-SemiBold text-lg text-white'>Support</h4>
                      <ul className='flex flex-col gap-2'>
                        <li className='Manrope-Medium text-gray-400 text-sm'>Contact Us</li>

                      </ul>
                    </div>

                    <div className='flex flex-col gap-3'>
                      <h4 className='Manrope-SemiBold text-lg text-white'>Subscription</h4>
                      <ul className='flex flex-col gap-2'>
                        <li className='Manrope-Medium text-gray-400 text-sm'>Plans</li>
                        <li className='Manrope-Medium text-gray-400 text-sm'>Features</li>
                      </ul>
                    </div>

                    <div className='flex flex-col gap-3'>
                      <h4 className='Manrope-SemiBold text-lg text-white'>Connect With Us</h4>
                      <div className="flex gap-5">
                        <div className='rounded-md icon text-white p-2'><IoLogoFacebook /></div>
                        <div className='rounded-md icon text-white p-2'><FaTwitter /></div>
                        <div className='rounded-md icon text-white p-2'><FaLinkedin /></div>
                      </div>
                    </div>
                    </div>
                    <div className="foot flex flex-col lg:flex-row text-center lg:justify-between py-5 border-t border-gray-700">
                      <div className="copyright text-gray-400">
                        <p>@2023 streamvibe, All Rights Reserved</p>
                      </div>
                      <div className="terms flex justify-center">
                        <div className='px-2 text-gray-400 border-r'>Terms of Use</div>
                        <div className='px-2 text-gray-400 border-r'>Privacy Policy</div>
                        <div className='px-2 text-gray-400'>Cookie Policy</div>
                      </div>
                    </div>
            </div>
    </section>
  )
}

export default Footer