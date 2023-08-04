import React from 'react';
import styles from '../Styles/hero.module.scss'
import Subscribe from "./Subscribe.jsx";
import Typewriter from "typewriter-effect";

function Hero(props) {
    return (
        <>
        <div className={styles.heroBox}>

            <div className={styles.heroInner} >
                <p className={styles.heroText}>Recruiting,
                    <Typewriter
                        options={{
                            strings: ['Evolved.', 'Made Easy.','Automated.'],
                            autoStart: true,
                            loop: true,
                        }}
                    /> </p>
                <p className={styles.heroSubText}>Combine the power of collaborative hiring with AI automation to find, screen, and hire the best candidates.
                </p>
                <div className={styles.sub}><Subscribe/></div>
                {/*<Subscribe/>*/}
            </div>


        </div>
        </>
    );
}

export default Hero;