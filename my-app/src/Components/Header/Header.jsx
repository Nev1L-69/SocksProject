import React from 'react';
import classes from './Header.module.css';
import {Link} from "react-router-dom";
import {EnvironmentOutlined, GiftOutlined, HeartOutlined, SmileOutlined, UserOutlined} from "@ant-design/icons";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.regBlock}>
                <div className={classes.wrapper}>
                    <div className={classes.location}>
                        <Link to={'/'} className={classes.link_base}>
                            <h3 className={classes.h3_header}>Location <EnvironmentOutlined className={classes.icon_head}/></h3>
                        </Link>
                    </div>

                    <div className={classes.othertxt}>
                        <Link to={'/'} className={classes.link_base}>
                            <h3 className={classes.h3_header}><HeartOutlined className={classes.icon_head}/> Give Socks, Get Socks</h3>
                        </Link>
                        <Link to={'/'} className={classes.link_base}>
                            <h3 className={classes.h3_header}><GiftOutlined className={classes.icon_head}/> Gift Cards</h3>
                        </Link>
                        <Link to={'/'} className={classes.link_base}>
                            <h3 className={classes.h3_header}><UserOutlined className={classes.icon_head}/> Log In</h3>
                        </Link>

                    </div>
                </div>
            </div>
            <div className={classes.logos}>
                <div className={classes.wrapper }>
                    <Link to={'/'} className={classes.link_base}>
                        <div className={classes.logoBlock}>
                            <p>Socks&Batyrbek</p>
                        </div>
                    </Link>

                </div>
            </div>
            <div className={classes.wrapper }>
                <Link to={'/'} className={classes.link_base}>
                    <SmileOutlined style={{fontSize: "35px", color: "black", paddingTop: "8px"}} />
                </Link>
            </div>
        </div>
    );
};

export default Header;