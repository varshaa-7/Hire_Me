import React from 'react';
import styles from '../Styles/promise.module.scss'
function Promise(props) {
    return (
        <>
        <div className={styles.outerBox}>
            <p className={styles.heading}>We make hiring <span className={styles.easier}>easier</span> for you!</p>
            <p className={styles.subHeading}>(it takes just a sec to click !)</p>
            <button className={styles.button}>Get Started</button>
        </div>
        </>
    );
}

export default Promise;