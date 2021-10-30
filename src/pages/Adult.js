import React from 'react';
import CardComponent from '../components/CardComponent/CardComponent';
import styles from './pages.module.css';

export default function Adult() {
    return (
        <div>
            <h1 className={styles.Heading}>ADULT</h1>
            <CardComponent Category="Pregnancies" TOne="When can one get pregnant?" DOne="01" TTwo="How to get pregnant?" DTwo="02" TThree="How to maintain good pregnancy health?" DThree="03"/>
            <CardComponent Category="Contraceptives" TOne="Pre-sex methods" DOne="01" TTwo="During sex methods" DTwo="02" TThree="Post-sex methods" DThree="03"/>
            <CardComponent Category="Understanding Menopause" TOne="Hormonal chnages during Menopause" DOne="01" TTwo="Understanding the sexual organs and how to please your partner" DTwo="02" TThree="Foreplay and kinks" DThree="03"/> 
        </div>

    )
}
