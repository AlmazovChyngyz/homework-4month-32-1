import React from 'react';
import classes from "./modal.module.css";

const Modal = ({children, handleShow}) => {
    return (
        <div>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <button className={classes.closeBtn} onClick={handleShow}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;