import React from 'react';
import classes from "./Footer.module.css";
import FlexBlock from "../UI/FlexBlock/FlexBlock";
import HorizontalDivider from "../UI/Divider/HorizontalDivider";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div >
                <div className={classes.row}>
                    <div  className={`${classes.col} ${classes.colLg3}`}>
                        <h6 className={classes.h6}>About</h6>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.col} ${classes.colLg3}`}>
                        <h6 className={classes.h6}>Help</h6>
                        <ul>
                            <li>
                                <a href="#">Shipping</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.col} ${classes.colLg3}`}>
                        <h6 className={classes.h6}>Follow Us</h6>
                        <ul>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.col} ${classes.colLg3}`}>
                        <h6 className={classes.h6}>Newsletter</h6>
                        <form>
                            <label htmlFor="email">Enter your email</label>
                            <input type="email" id="email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <HorizontalDivider style={{width:'80%', margin:'20px auto'}}/>
                <FlexBlock isColumn={true}>
                    <p>© SOCKS & BATYRBEK, 2024</p>
                </FlexBlock>
            </div>
        </div>

    );
};

export default Footer;