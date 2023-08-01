import React from 'react';
import styles from '../Styles/navbar.module.scss'
function Navbar(props) {
    const navitems=['lorem','ipsum','abcde','fghi']
    return (
        <>
            <div className={styles.navBox}>
                <div className='navItem'>lorem</div>
                <div className='navItem'>lorem</div>
                <div className='navItem'>lorem</div>
                <div className='navItem'>lorem</div>
                <div className='navItem'>lorem</div>
            </div>
        </>
    );
}

export default Navbar;