import React from 'react';
import styles from '../Styles/footer.module.scss'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
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
                <img src='/public/hireMeWhite.png' color='white'/>
                <div className={styles.iconBox}>
                <FaTwitter className={styles.icon} />
                <FaInstagram className={styles.icon}/>
                <FaLinkedin className={styles.icon}/>
                <FiMail className={styles.icon}/>
                </div>
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