import React from 'react';
import CardComponent from '../components/CardComponent/CardComponent';
import styles from './pages.module.css';


export default function PreTeen() {
    return (
        <div>
            <h1 className={styles.Heading}>PRE-TEEN + CHILDREN</h1>
            {/* <a href="http://sexedify-discuss.netlify.app/" className={styles.buttonP}>
                Portal
            </a> */}
            <CardComponent link_propA="rights_over_body" link_propB="identify_bad_touch" link_propC="react_to_bad_touch" Category="Body ownership and Touching" TOne="Who has rights over your body?" DOne="01" TTwo="How to identify a bad touch?" DTwo="02" TThree="How to react to bad touch?" DThree="03"/>
            <CardComponent link_propA="male_female_anatomy" link_propB="hitting_puberty" link_propC="when_puberty" Category="Our Body + Puberty" TOne="Understand Male-Female Anatomy" DOne="01" TTwo="What does ‘hitting puberty’ mean?" DTwo="02" TThree="When do we hit puberty?" DThree="03"/>
            <CardComponent link_propA="myths_child_birth" link_propB="pre_pregnancy" link_propC="during_pregnancy" Category="How are children born?" TOne="Myths around child-birth" DOne="01" TTwo="What happens pre-pregnancy?" DTwo="02" TThree="What happens during pregnancy?" DThree="03"/> 
        </div>
    )
}
