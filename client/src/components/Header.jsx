import React from 'react'; 
import Logo from './ui/Logo'; 
import Button from './ui/Button'; 
 
function Header(){ 
    return( 
        <div className='container flex items-center justify-between px-4 my-6 mx-auto'> 
            <Logo className="w-auto"/> 
            
            <div className='hidden lg:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2'> 
                <Button className='btn home-btn' label="Home" href='/'/> 
                <Button className='btn hover:text-gray-500 active:text-gray-400' label="How It Works" href='#howItWorks'/> 
                <Button className='btn hover:text-gray-500 active:text-gray-400' label="Features" href='#features'/> 
            </div>
            
            <div className='flex items-center space-x-4'> 
                <Button className='btn hover:text-gray-500 active:text-gray-400' label="Sign-In" href='/login'/> 
                <Button className='btn bg-blue-500 text-gray-100 hover:opacity-80 active:opacity-70' label="Sign-Up" href='/signup'/> 
            </div>
        </div>
    ) 
} 
 
export default Header;