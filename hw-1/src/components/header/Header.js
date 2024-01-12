import React from 'react';
import classes from "./header.module.css";
const Header = ({navbar}) => {
    return (
        <div className={classes.list} >
            {navbar.map((item, index)=> <h3 key={index}>{item}</h3>)}
        </div>
    );
};

export default Header;