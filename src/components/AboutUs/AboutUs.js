import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.AboutUs} id="AboutUs">
      <h1 className={styles.Title}>About SexEdify</h1>
      <p className={styles.description}>
        SexEdify is your all in one portal to decipher your own body, unravel
        the mysteries of sexualities and unveil what has been unspoken in the
        society for years now. One’s body is where all energy and power reside.
        Hence, it is extremely important to understand the intricacies of human
        anatomy and how to nourish and preserve it. Our website helps build that
        community who will aid one another in this learning process as well as
        hone their personal skills in various subjects (menstrual health,
        contraceptives, body ownership, LGBTQ etc.) through quizzes, modules and
        the EdifyBot! In conservative countries, if parents & educational
        institutions are finding it awkward to teach their children, our portal
        serves as the perfect medium and voila- solves the issue!
      </p>
    </div>
  );
}
