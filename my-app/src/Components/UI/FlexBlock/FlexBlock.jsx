import React, {forwardRef} from 'react';
import classes from './FlexBlock.module.css';

const FlexBlock = forwardRef((props, ref) => (
    <div ref={ref}
         className={[classes.flexBlock,
             props.isColumn ? classes.flexDirectionColumn : "",
             props.isFlexStart ? classes.flexStart : "",
             props.isWrap ? classes.flexWrap : ""
         ].join(" ")}
         style={props.style}>
        {props.children}
    </div>
));

export default FlexBlock;