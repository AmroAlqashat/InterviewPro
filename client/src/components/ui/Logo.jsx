import React from 'react'; 
import PropTypes from 'prop-types'; 
 
function Logo({ className }){ 
    return( 
        <a className={`${className}`} href='/'> 
            <div className='bg-blue-500 w-[7px] h-full'></div> 
            <h1 className='pl-3 text-[1.1rem] font-semibold'>INTERVIEW PRO</h1> 
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