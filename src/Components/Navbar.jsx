import React from 'react';
import styles from '../Styles/navbar.module.scss'
function Navbar(props) {
    return (
        <>
            <div className={styles.navBox}>
                <div className='logo'>
                    <h2>LOGO</h2>
                </div>
                <div className={styles.navLinkBox}>
                    <div className='navItem'>About</div>
                <div className='navItem'>Product</div>
                <div className='navItem'>Customers</div>
                    <div className='navItem'>Resources</div>
                <div className='navItem'>Pricing</div>
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