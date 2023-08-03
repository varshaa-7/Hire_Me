import React from 'react';
import styles from '../Styles/navbar.module.scss'
function Navbar(props) {
    return (
        <>
            <div className={styles.navBox}>
                <div>
                    <img  className={styles.logo}  src='/public/hireMe.png'/>
                </div>
                <div className={styles.navLinkBox}>
                    <div className={styles.navItems}>About</div>
                <div className={styles.navItems}>Product</div>
                <div className={styles.navItems}>Customers</div>
                    <div className={styles.navItems}>Resources</div>
                <div className={styles.navItems}>Pricing</div>
                </div>
                <div className={styles.callToAction}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.signupBtn}>Signup</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;

