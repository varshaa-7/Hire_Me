import React from 'react';
import styles from '../Styles/featureCard.module.scss'
function FeatureCard(props) {
    return (
        <>
        <div className={styles.cardOuter}>
            <img src='/left-quote.png' className={styles.quotes}/>
            <p className={styles.mainText}>
                {props.message}
            </p>
            <p className={styles.from}>-{props.from}</p>
        </div>
        </>
    );
}

export default FeatureCard;