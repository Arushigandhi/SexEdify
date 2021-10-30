import React from "react";
import styles from "./HeroSection.module.css";
import curves from "./Vect.png";
import group from "./Group.png";
import SimpleForm from "./SimpleForm";

export default function HeroSection() {
  return (
    <div className={styles.HeroSection}>
      <img src={curves} className={styles.curves} alt="" />
      <div className={styles.HeroDescription}>
        <h1 className={styles.HeroTitle}>SexEdify</h1>
        <p>
          The Ultimate Safe Haven of Sex Education <br /> Exploring and
          Understanding your body isn’t a taboo!
        </p>
      </div>
      <a href="#AboutUs" className={styles.button}>
        Learn More{" "}
      </a>
      <img src={group} className={styles.group} alt="" />
      {/* <Link to="/simpleform"> */}
      {/* <label className={styles.button}>Try Out the Edify Bot!</label>  */}
      <SimpleForm />
      {/* </Link> */}
    </div>
  );
}
