import React from 'react';
import styles from './HeroSection.module.css';
import curves from './Vect.png';
import group from './Group.png';

export default function HeroSection() {
    return (
        <div className={styles.HeroSection} >
            <img src={curves} className={styles.curves} alt="" />
            <div className={styles.HeroDescription}>
            <div class="wrapper">
                <div class="typing-demo">
                    <h1 className={styles.HeroTitle}>SexEdify</h1>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>       
            </div>
            <a href="#AboutUs" className={styles.button}>Learn More </a> 
            <img src={group} className={styles.group} alt="" />
        </div>

    )
}
