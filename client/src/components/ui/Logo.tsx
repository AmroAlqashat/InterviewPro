import React from 'react'; 
 
interface LogoProps {
    className?: string;
}

function Logo({ className = '' }: LogoProps): React.ReactElement { 
    return( 
        <a className={`${className} flex items-center`} href='/'> 
            <div className='bg-blue-500 w-[7px] h-6 xs:h-7 sm:h-8 rounded-sm'></div> 
            <h1 className='pl-3 text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] font-semibold text-gray-900'>INTERVIEW PRO</h1> 
        </a> 
    ) 
} 
 
export default Logo;