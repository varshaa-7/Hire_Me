import React from 'react';
import styles from '../Styles/featureCard.module.scss'
function FeatureCard(props) {
    return (
        <>
        <div className={styles.cardOuter} data-aos="fade-up" data-aos-duration='1000'>
            <img src='/recruitment/left-quote.png' className={styles.quotes}/>
            <p className={styles.mainText}>
                {props.message}
            </p>
            <p className={styles.from}>-{props.from}</p>
        </div>
        </>
    );
}

export default FeatureCard;