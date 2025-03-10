import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

function IconButton({ label, icon, onClick, href = "", buttonClassName = "", iconClassName = "", divClassName = "" }){
    return(
        <div className={`flex items-center ${divClassName}`}>
            <img className={`h-4.5 ${iconClassName}`} src={icon}/>
            <Button label={label} onClick={onClick} className={`px-2.5 ${buttonClassName}`} href={href}/>
        </div>
    )
}

IconButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    buttonClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    divClassName: PropTypes.string,
    icon: PropTypes.string,
}

export default IconButton;