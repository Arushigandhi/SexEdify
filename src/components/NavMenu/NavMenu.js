import React from 'react';
import styles from './NavMenu.module.css';

export default function NavMenu() {
    return (
        <div className={styles.NavMenuStyles}>
            <a href="#Cards" className={styles.modules_link}>Modules </a>
            <a href="https://github.com/" ><label className={styles.portal_button}>Portal</label></a> 
        </div>

    )
}
