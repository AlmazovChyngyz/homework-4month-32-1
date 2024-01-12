import React from 'react';
import classes from "./footer.module.css";

const Footer = ({link}) => {
    return (
        <div className={classes.footer}>
            <h3>
                {link}
            </h3>
        </div>
    );
};

export default Footer;