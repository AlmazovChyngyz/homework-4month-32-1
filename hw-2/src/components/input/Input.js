import React from 'react';
import classes from "./input.module.css";
const Input = ({type, placeholder, onChangeInput}) => {
    return (
        <input className={classes.inputStyle}
            type={type}
            placeholder={placeholder}
            onChange={onChangeInput}/>
    );
};

export default Input;