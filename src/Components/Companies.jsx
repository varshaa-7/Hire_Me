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
                    <img src='/recruitment/apple-11.svg' className={styles.marqueeImg}/>
                    <img src='/recruitment/coca-cola-2021.svg' className={styles.marqueeImg}/>
                    <img src='/recruitment/facebook.svg' className={styles.marqueeImg}/>
                    <img src='/recruitment/flipkart.svg' className={styles.marqueeImg}/>
                    <img src='/recruitment/microsoft.svg' className={styles.marqueeImg}/>
                    <img src='/recruitment/google-1-1.svg' className={styles.marqueeImg}/>
                </Marquee>
                    <Marquee direction='left' speed='30'>
                        <img src='/recruitment/starbucks.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/skype-2.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/snapdeal.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/twitter-6.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/uber-2.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/ola-cabs.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/bmw-m-series.svg' className={styles.marqueeImg}/>

                    </Marquee>

                    <Marquee direction='right' speed='30'>
                        <img src='/recruitment/honda-9.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/phonepe-1.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/mediatek-logo.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/costa-3.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/tesla.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/hyundai.svg' className={styles.marqueeImg}/>
                        <img src='/recruitment/burger-king-4.svg' className={styles.marqueeImg}/>

                    </Marquee>

                </div>
            </div>
        </>
    );
}

export default Companies;