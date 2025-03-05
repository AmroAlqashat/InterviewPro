import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, href = "", className = "" }){
    return <a className={`plus-jakarta-sans-font  ${className}`} onClick={onClick} href={href}>{label}</a>
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    className: PropTypes.string,
}

export default Button;