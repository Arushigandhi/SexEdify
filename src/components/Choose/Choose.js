import React from 'react';
import styles from './Choose.module.css';
import one from './[removal 1.png';
import two from './sexedify3 (1) 1.png';
import three from './sexedify4 1.png';

export default function Choose() {
    return (
        <div className={styles.outer_layout} id="Cards">
        <h1 className={styles.Question}>Which age group do you belong to?</h1>
            <div className = {styles.cards_layout}>
            <div className = {styles.leftbox}>
                <h2>Pre-Teen</h2>
                <img src={one} className={styles.one} alt="" />
            </div>
            <div className = {styles.middlebox}>
                <h2>Teen</h2>
                <img src={two} className={styles.two} alt="" />
            </div>
            <div className = {styles.rightbox}>
                <h2>Adult</h2>
                <img src={three} className={styles.three} alt="" />
            </div>
            </div>
        </div>
    )
}
