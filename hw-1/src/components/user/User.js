import React from 'react';
import classes from "./user.module.css";
const User = ({job}) => {
    return (
        <h1 className={classes.job}>
            {job}
        </h1>
    );
};

export default User;