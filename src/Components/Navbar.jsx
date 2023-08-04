import React, {useState} from 'react';
import styles from '../Styles/navbar.module.scss'
import {AiOutlineMenu} from 'react-icons/ai'
function Navbar(props) {
    const [click,setClick]=useState(false);
    return (
        <>
            <div className={ click===true?styles.navBoxResp: styles.navBox}>
                <div>
                    <img  className={styles.logo}  src='/recruitment/hireMe.png'/>
                </div>
                <div className={ click===true? styles.navLinkBoxResp : styles.navLinkBox}>
                    <div className={styles.navItems}>About</div>
                <div className={styles.navItems}>Product</div>
                <div className={styles.navItems}>Customers</div>
                    <div className={styles.navItems}>Resources</div>
                <div className={styles.navItems}>Pricing</div>
                </div>
                <div className={ click===true? styles.callToActionResp : styles.callToAction}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.signupBtn}>Signup</button>
                </div>
                <AiOutlineMenu className={styles.menuIcon} onClick={()=>setClick(!click)} />

            </div>
        </>
    );
}

export default Navbar;


