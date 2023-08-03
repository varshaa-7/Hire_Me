import React from 'react';
import styles from '../Styles/loveus.module.scss'
function Loveus(props) {
    return (
        <>
        <div className={styles.outerBox} >
            {/*<div className={styles.innerBox} >*/}
        <div className={styles.leftBox}><img className={styles.recruterImg} src={props.image}/></div>
            <div className={styles.rightBox}>
                <div className={styles.textBox}>
                <p className={styles.heading}>{props.heading}</p>
                <p className={styles.subHeading}>
                    {props.message}</p>
                {/*</div>*/}
            </div>
            </div>

        </div>
        </>
    );
}

export default Loveus;