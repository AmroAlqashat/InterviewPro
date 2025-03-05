import React from 'react'; 
import PropTypes from 'prop-types'; 
 
function Logo({ className }){ 
    return( 
        <a className={`exo-2-logo flex items-center cursor-pointer h-[45px] ${className}`} href='/'> 
            <div className='bg-blue-500 w-[7px] h-full'></div> 
            <h1 className='pl-3 text-[1.2rem] font-semibold'>INTERVIEW PRO</h1> 
        </a> 
    ) 
} 
 
Logo.propTypes = { 
    className: PropTypes.string, 
} 
 
Logo.defaultProps = {
    className: '',
}
 
export default Logo;