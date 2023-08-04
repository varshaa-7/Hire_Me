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
                    <img src='/apple-11.svg' className={styles.marqueeImg}/>
                    <img src='/coca-cola-2021.svg' className={styles.marqueeImg}/>
                    <img src='/facebook.svg' className={styles.marqueeImg}/>
                    <img src='/flipkart.svg' className={styles.marqueeImg}/>
                    <img src='/microsoft.svg' className={styles.marqueeImg}/>
                    <img src='/google-1-1.svg' className={styles.marqueeImg}/>
                </Marquee>
                    <Marquee direction='left' speed='30'>
                        <img src='/starbucks.svg' className={styles.marqueeImg}/>
                        <img src='/skype-2.svg' className={styles.marqueeImg}/>
                        <img src='/snapdeal.svg' className={styles.marqueeImg}/>
                        <img src='/twitter-6.svg' className={styles.marqueeImg}/>
                        <img src='/uber-2.svg' className={styles.marqueeImg}/>
                        <img src='/ola-cabs.svg' className={styles.marqueeImg}/>
                        <img src='/bmw-m-series.svg' className={styles.marqueeImg}/>

                    </Marquee>

                    <Marquee direction='right' speed='30'>
                        <img src='/honda-9.svg' className={styles.marqueeImg}/>
                        <img src='/phonepe-1.svg' className={styles.marqueeImg}/>
                        <img src='/mediatek-logo.svg' className={styles.marqueeImg}/>
                        <img src='/costa-3.svg' className={styles.marqueeImg}/>
                        <img src='/tesla.svg' className={styles.marqueeImg}/>
                        <img src='/hyundai.svg' className={styles.marqueeImg}/>
                        <img src='/burger-king-4.svg' className={styles.marqueeImg}/>

                    </Marquee>

                </div>
            </div>
        </>
    );
}

export default Companies;