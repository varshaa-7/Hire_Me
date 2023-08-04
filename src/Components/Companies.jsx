import React from 'react';
import styles from '../Styles/companies.module.scss'
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
function Companies(props) {
    return (
        <>
            <div className={styles.mainBox} data-aos="fade-up" data-aos-duration='1000'>
                <p className={styles.heading} >
                    We are trusted <br/>by 100+ companies.
                </p>
                <div className={styles.companies}>
                <Marquee direction='right' speed='30'>
                    <img src='/public/apple-11.svg' className={styles.marqueeImg}/>
                    <img src='/public/coca-cola-2021.svg' className={styles.marqueeImg}/>
                    <img src='/public/facebook.svg' className={styles.marqueeImg}/>
                    <img src='/public/flipkart.svg' className={styles.marqueeImg}/>
                    <img src='/public/microsoft.svg' className={styles.marqueeImg}/>
                    <img src='/public/google-1-1.svg' className={styles.marqueeImg}/>
                </Marquee>
                    <Marquee direction='left' speed='30'>
                        <img src='/public/starbucks.svg' className={styles.marqueeImg}/>
                        <img src='/public/skype-2.svg' className={styles.marqueeImg}/>
                        <img src='/public/snapdeal.svg' className={styles.marqueeImg}/>
                        <img src='/public/twitter-6.svg' className={styles.marqueeImg}/>
                        <img src='/public/uber-2.svg' className={styles.marqueeImg}/>
                        <img src='/public/ola-cabs.svg' className={styles.marqueeImg}/>
                        <img src='/public/bmw-m-series.svg' className={styles.marqueeImg}/>

                    </Marquee>

                    <Marquee direction='right' speed='30'>
                        <img src='/public/honda-9.svg' className={styles.marqueeImg}/>
                        <img src='/public/phonepe-1.svg' className={styles.marqueeImg}/>
                        <img src='/public/mediatek-logo.svg' className={styles.marqueeImg}/>
                        <img src='/public/costa-3.svg' className={styles.marqueeImg}/>
                        <img src='/public/tesla.svg' className={styles.marqueeImg}/>
                        <img src='/public/hyundai.svg' className={styles.marqueeImg}/>
                        <img src='/public/burger-king-4.svg' className={styles.marqueeImg}/>

                    </Marquee>

                </div>
            </div>
        </>
    );
}

export default Companies;