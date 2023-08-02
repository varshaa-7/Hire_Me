import React from 'react';
import styles from '../Styles/footer.module.scss'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";

function Footer(props) {
    const recData=[ "Overview" ,
    "Recruit Pro" ,
    "Curated" ,
    "RecruiterCloud" ,
    "Hire Developers" ,
    "Pricing"]
    const popData=["Video Editing Jobs" ,
    "Content Writing Jobs",
    "Funded Startups Jobs",
    "Data Science Jobs",
    "Internet of Things (IoT) Jobs"]
    return (
        <>
        <div className={styles.footer}>
            <div className={styles.social}>
                <FaTwitter color="white"/>
                <FaInstagram color="white"/>
                <FaLinkedin color="white"/>
                <FaMailchimp color="white"/>

            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <p className={styles.heading}>Popular Collections</p>
                    {recData.map((data)=>(
                        <p className={styles.footerText} key="key">{data}</p>
                    ))}
                </div>
                <div className={styles.box}>
                    <p className={styles.heading}>For Recruiters</p>
                    {popData.map((data)=>(
                        <p className={styles.footerText} key="key">{data}</p>
                    ))}
                </div>
                <div className={styles.box}>
                    <p className={styles.heading}>For Recruiters</p>
                    {popData.map((data)=>(
                        <p className={styles.footerText} key="key">{data}</p>
                    ))}
                </div>

                <div className={styles.box}>
                    <p className={styles.heading}>Popular Collections</p>
                    {recData.map((data)=>(
                        <p className={styles.footerText} key="key">{data}</p>
                    ))}
                </div>



            </div>
        </div>
        </>
    );
}

export default Footer;