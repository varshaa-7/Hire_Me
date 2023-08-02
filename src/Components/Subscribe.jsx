import React from 'react';
import styles from '../Styles/subscribe.module.scss'
import { FcGoogle } from "react-icons/fc";
function Subscribe(props) {
    return (
        <>
        <div className={styles.subBox}>
            <input className={styles.subInp} placeholder="Enter your email..."/>
            <button className={styles.subBtn}>Subscribe</button>
            <p>or</p>
            <div className={styles.google}>Sign in with <FcGoogle/> </div>
        </div>
        </>
    );
}

export default Subscribe;