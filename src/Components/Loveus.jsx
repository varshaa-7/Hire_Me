import React, {useEffect} from 'react';
import styles from '../Styles/loveus.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
function Loveus(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
        <div className={styles.outerBox}  >
            {/*<div className={styles.innerBox} >*/}
        <div className={styles.leftBox} data-aos="fade-up" data-aos-duration='1000' ><img className={styles.recruterImg} src={props.image}/></div>
            <div className={styles.rightBox} data-aos="fade-up" data-aos-duration='1000' >
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