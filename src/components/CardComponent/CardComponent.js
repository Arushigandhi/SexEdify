import React from 'react';

const sampleCard = (props) => {
return(
       <div class={props.cardColClass}>
            <div className={props.cardBorder} style={props.cardStyle}>
                {props.image}
              <div class="card-body">
                <h5 class="card-title">{props.cardTitle}</h5>
                <p class="card-text">
                 {props.cardText}
                </p>
                {props.children}
              </div>
            </div>
          </div>
    )
}

export default SampleCard;