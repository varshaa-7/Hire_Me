import React from 'react';
import styles from '../Styles/achivement.module.scss'
function Achivements(props) {
    return (
        <>
        <div className={styles.mainBox}>
            <div className={styles.innerBox}>
            <div className={styles.items}>100k+ Jobs</div>
            <div className={styles.items}>10,000+ Matches made </div>
            <div className={styles.items}>10k+ Startup ready Candidates</div>
            </div>
        </div>
        </>
    )
}

export default Achivements;