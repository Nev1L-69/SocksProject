import React from 'react';
import classes from './AnimatedBlock.module.css';
const AnimatedBlock = (props) => {
    return (
        <a className={classes.block} {...props}>
            {props.children}
        </a>
    );
};

export default AnimatedBlock;