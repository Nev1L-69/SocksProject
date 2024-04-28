import React from 'react';
import classes from './Divider.module.css';

const HorizontalDivider = ({...props}) => {
    return (
        <div className={classes.horizontal} style={props.style}>

        </div>
    );
};

export default HorizontalDivider;