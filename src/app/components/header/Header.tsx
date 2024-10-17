// Header.jsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/logo/logo2.png'

const Header = () => {
    return (
        <header className='fixed bg-[#364a74] z-50 w-full top-0 left-0 flex justify-between px-44 items-center h-[80px]'>
            <Link
                href={'#home'}
            >
                <div className='select-none pointer-events-none'>
                    {/* logo */}
                        <Image
                        src={logo}
                        alt='logo'
                        className='w-32 h-auto'
                        />  
                </div>
            </Link>
            
            <div className='flex justify-center gap-20 text-white font-semibold'>
                {/* home button  */}
                <Link
                href={'#home'}
                className='border border-gray-400 px-5 py-2 rounded-[40px] backdrop:blur-2xl hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300'
                >
                    Home
                </Link>

                {/* about button  */}
                <Link
                href={'#about'}
                className='border border-gray-400 px-5 py-2 rounded-[40px] backdrop:blur-2xl hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300'
                >
                    About
                </Link>

                {/* Company button  */}
                <Link
                href={'#features'}
                className='border border-gray-400 px-5 py-2 rounded-[40px] backdrop:blur-2xl hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300'
                >
                    Features
                </Link>

                {/* Contacts button  */}
                <Link
                href={'#contact'}
                className='border border-gray-400 px-5 py-2 rounded-[40px] backdrop:blur-2xl hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300'
                >
                    Contacts
                </Link>

            </div>
        </header>
    );
};

export default Header;
