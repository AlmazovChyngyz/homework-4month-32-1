import React from 'react';
import classes from "./button.module.css";

const Button = ({text}) => {
    return (
        <div className={classes.buttons}>
            <button>
                {text}
            </button>
        </div>
    );
};

export default Button;