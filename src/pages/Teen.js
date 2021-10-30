import React from 'react';
import CardComponent from '../components/CardComponent/CardComponent';
import styles from './pages.module.css';

export default function Teen() {
    return (
        <div>
            <h1 className={styles.Heading}>TEENAGERS</h1>
            <CardComponent Category="Menstrual Health" TOne="Maintaining menstrual hygiene" DOne="01" TTwo="How to reduce period pain?" DTwo="02" TThree="Keeping track of menstrual cycle" DThree="03"/>
            <CardComponent link_propA="primary_characteristics" link_propB="secondary_characteristics" link_propC="sexuality_body_positivity" Category="Primary & Secondary Sexual Characteristics" TOne="Primary sexual characteristics" DOne="01" TTwo="Secondary sexual characteristics" DTwo="02" TThree="Explore sexuality and body-positivity" DThree="03"/>
            <CardComponent Category="Know about Sexual Intercourse" TOne="What happens during sex?" DOne="01" TTwo="Bodily Changes after Sex" DTwo="02" TThree="Pregnancy and Child Delivery" DThree="03"/> 
        </div>

    )
}
