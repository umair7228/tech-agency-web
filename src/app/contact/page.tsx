import React from 'react'
import logo from '../../../public/logo/logo2.png'
import Image from 'next/image'
import { MdPermContactCalendar } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-full flex flex-col bg-[#1A1E30] py-24 text-white/80 justify-center items-center overflow-x-hidden"
    >
        {/* parent div  */}
        <div className='flex gap-52'>

            <div className=''>
                <Image src={logo} alt='logo' className='w-32 h-auto' />
            </div>

            <div>
                <h4 className='text-xl font-bold'>Main Office</h4>
                <div className='flex items-center py-3 gap-3'>
                    <MdPermContactCalendar />
                    <p>Austria 82 12th street, Office 14, LA</p>
                </div>

                <div className='flex items-center py-3 gap-3'>
                    <FaPhoneSquareAlt />
                    <p>10001234567</p>
                </div>
            </div>

            <div>
                <h4 className='text-xl font-bold pb-3'>Useful Links</h4>
                <p>Our Services</p>
                <p>Our Team</p>
                <p>Portfolio</p>
                <p>Shortcodes</p>
                <p>Typography</p>
                <p>Privacy Policy</p>
            </div>

            <div>
                <h4 className='text-xl font-bold pb-3'>Socials</h4>
                <div className='flex gap-2 text-xl'>
                    <FaLinkedin />
                    <FaFacebook />
                    <FaYoutube />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact
