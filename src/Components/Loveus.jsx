import React from 'react';
import styles from '../Styles/loveus.module.scss'
function Loveus(props) {
    return (
        <>
        <div className={styles.outerBox}>
        <div className={styles.leftBox}><img className={styles.recruterImg} src='/public/recruter.svg'/></div>
            <div className={styles.rightBox}>
                <p className={styles.heading}>Why recruters <br/>love us?</p>
                <p className={styles.subHeading}>
                    8 million responsive and startup-ready candidates, with all the information you need to vet them.<br/>

                    Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free.<br/>

                    A free applicant tracking system, or free integration with any ATS you may already use
                    Plus, we can do the vetting for you! With Curated, we review the world's top tech talent and highlight candidates directly to you 2x a week.</p>
            </div>

        </div>
        </>
    );
}

export default Loveus;