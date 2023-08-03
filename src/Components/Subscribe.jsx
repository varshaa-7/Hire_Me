import React from 'react';
import styles from '../Styles/subscribe.module.scss'
import { FcGoogle } from "react-icons/fc";
function Subscribe(props) {
    return (
        <>
        <div className={styles.subBox}>
            <input className={styles.subInp} placeholder="Enter your email..."/>
            <button className={styles.subBtn}>Subscribe</button>
            <p style={{
                margin: "12px 0px",
                fontSize:"20px"

            }}>or</p>
            <div className={styles.google}>Sign in with<FcGoogle style={{position:"relative",left:"5px",top:'3px'}}/> </div>
        </div>
        </>
    );
}

export default Subscribe;