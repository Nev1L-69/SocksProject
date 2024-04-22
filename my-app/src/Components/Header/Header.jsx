import React from 'react';
import classes from './Header.module.css';
import {Link} from "react-router-dom";
import {EnvironmentOutlined} from "@ant-design/icons";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.regBlock}>
                <div className={classes.wrapper}>
                    <div className={classes.location}>
                        <Link to={'/'} className={classes.link_base}>
                            <h3>Location <EnvironmentOutlined /></h3>
                        </Link>
                    </div>

                    <div></div>
                </div>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.logoBlock}>
                    <Link to={'/'} >
                        <h1>SOCKS & BATYRBEK</h1>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Header;