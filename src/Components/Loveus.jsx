import React from 'react';
import styles from '../Styles/loveus.module.scss'
function Loveus(props) {
    return (
        <>
        <div className={styles.outerBox}>
        <div className={styles.leftBox}><img className={styles.recruterImg} src='/public/recruter.svg'/></div>
            <div className={styles.rightBox}>
                <p className={styles.heading}>Why recruters <br/>love us?</p>
                <p className={styles.subHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>
        </>
    );
}

export default Loveus;