import React from 'react';
import styles from './Choose.module.css';
import one from './[removal 1.png';
import two from './sexedify3 (1) 1.png';
import three from './sexedify4 1.png';
import { Link } from 'react-router-dom';

export default function Choose() {
    return (
        <div className={styles.outer_layout} id="Cards">
        <h1 className={styles.Question}>Which age group do you belong to?</h1>
            <div className = {styles.cards_layout}>
            <Link to="/preteen">
                <div className = {styles.leftbox}>
                    <h2>Pre-Teen</h2>
                    <img src={one} className={styles.one} alt="" />
                </div>
            </Link>
            <Link to="/teen">
            <div className = {styles.middlebox}>
                <h2>Teen</h2>
                <img src={two} className={styles.two} alt="" />
            </div>
            </Link>
            <Link to="/adult">
            <div className = {styles.rightbox}>
                <h2>Adult</h2>
                <img src={three} className={styles.three} alt="" />
            </div>
            </Link>
            </div>
        </div>
    )
}
