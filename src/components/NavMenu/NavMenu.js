import React from 'react';
import styles from './NavMenu.module.css';

export default function NavMenu() {
    return (
        <div className={styles.NavMenuStyles}>
            <a href="#Cards" className={styles.nav_menu_options}>Curriculum </a>
            <a href="http://sexedify-discuss.netlify.app/" className={styles.nav_menu_options}>Portal</a> 
        </div>

    )
}
