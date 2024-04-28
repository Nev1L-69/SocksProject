import React from 'react';
import cl from './Button.module.css'
import {clrs} from "../../../constants/colors";
const Button = ({children, backgroundColor, fontColor, ...props}) => {
    return (
        <button onClick={props.onClick} className={cl.button} style={{...props.style, backgroundColor: backgroundColor, color: fontColor}}>
            <p>{children}</p>
        </button>
    );
};

export default Button;