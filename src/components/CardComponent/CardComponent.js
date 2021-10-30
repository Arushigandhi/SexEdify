import React from 'react';
import styless from './CardComponent.module.css';
import CardOne from './CardOne.png';
import CardTwo from './CardTwo.png';
import CardThree from './CardThree.png';
import { Link } from 'react-router-dom';


function CardComponent(props) {
    return (
        <div className={styless.outer_layout} id="Cards">
        <h1 className={styless.Question}>{props.Category}</h1>
            <div className = {styless.cards_layout}>
            <Link to={`/curriculum/${props.link_propA}`}>
                <div>
                    <img src={CardOne} className = {styless.leftbox} alt="" />
                    <h2>{props.TOne}</h2>
                    <h3>{props.DOne}</h3>
                </div>
            </Link >
            <Link to={`/curriculum/${props.link_propB}`}>
            <div>
                <img src={CardTwo} className = {styless.middlebox} alt="" />
                <h2>{props.TTwo}</h2>
                <h3>{props.DTwo}</h3>
            </div>
            </Link>
            <Link to={`/curriculum/${props.link_propC}`}>
            <div>
                <img src={CardThree} className = {styless.rightbox} alt="" />
                <h2>{props.TThree}</h2>
                <h3>{props.DThree}</h3>
            </div>
            </Link>
            </div>
        </div>

    )
}

export default CardComponent
