import React from 'react'; 
import Logo from './ui/Logo'; 
import Button from './ui/Button';  

function Footer(){     
    return(
        <div className='container'>
            <div className='w-full flex flex-col lg:flex-row items-center justify-between border-t-2 border-gray-200 pt-16 pb-4 mt-[5%]'>
               
                <div className='w-full lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0'>
                    <p className='text-gray-600 text-base'>© 2024 Company, Inc</p>
                </div>

                
                <div className='w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0'>
                    <Logo />
                </div>

                
                <div className='w-full lg:w-1/3 flex flex-col lg:flex-row justify-end items-center space-y-4 lg:space-y-0 lg:space-x-4'>
                    <Button 
                        className='footer-btn w-full lg:w-auto text-center' 
                        label="Home" 
                        href="/"
                    />
                    <Button 
                        className='footer-btn w-full lg:w-auto text-center' 
                        label="How it works" 
                        href="#howItWorks"
                    />
                    <Button 
                        className='footer-btn w-full lg:w-auto text-center' 
                        label="Features" 
                        href="#features"
                    />
                </div>
            </div>
        </div>
    ) 
}  

export default Footer;