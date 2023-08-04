import React from 'react';
import FeatureCard from "./FeatureCard.jsx";
import styles from '../Styles/reviews.module.scss'
function Reviews(props) {
    const data=[
        {key:1,
            message:"We at Rolling Arrays like the audio screening questions features the most, it helps filter out relevant candidates. Also, the Job pipeline is seamless, the UI is great and very attractive. The automations are very helpful since it now saves a lot of our time which went in sharing status updates by calling/emailing candidates manually.",
        from: "Vaishali Shinde" ,
        },
        {key:2,
            message:"After we started using #hireMe, our acquisition turnaround time came down significantly, and we were soon hooked. While the rich feature set is a boon, what makes it truly stand apart is its ease of use and intuitive flows. In our experience, hireMe is easily the best platform currently in India. About 60% of our hires have been through this platform. Thank You Team hireMe. Hats off to you for having a great team that empathizes and listens to the clients' needs!",
            from: "Pritom Mathews" ,
        }, {key:3,
            message:
                "hireMe is easy to use and has an inbuilt Al tool which only gets me what I am looking for. The team and the platform also help me connect directly with talent through various initiatives! I literally take a 'hireMe' to finding great talent!",
            from: "Winston DeRosario" ,
        }, {key:4,
            message:" We've been using hireMe for over a year now and it has been the single largest source of our tech talent by some margin! In addition, the software tooling they've built allows for a tremendous amount of automation and filtering. The built in tooling for screening automation is fantastic. As a founder initially doing the talent sourcing myself, it was immensely valuable. Now, our talent acquisition team loves it too. They also have very good customer service and fantastic onboarding.",
            from: "Muralidharan Venkatasubramanian " ,
        },

    ]
    return (
        <>
            <div className={styles.heading} data-aos="fade-up" data-aos-duration='1000'>Hear from our users</div>
        <div className={styles.outerBox}>
            {data.map((data)=>(
                <FeatureCard key={data.key} message={data.message} from={data.from}/>
            ))}

        </div>

        </>
    );
}

export default Reviews;