import React from 'react';
import CardComponent from './CardComponent/CardComponent';

class ReusableComponents extends React.Component {
  
  onClick() {
    console.log("Button was clicked");
  }

  render() {
    return(
      /** First Customized Component **/
      <CardComponent 
        cardColClass={"col-sm-3"}
        cardBorder={"card border-default mx-1"}
        cardTitle={"First Card"}
        cardText={"Sample Card 1" }
    > 
    <ReusableButton className={"btn btn-primary"} onClick={this.onClick} >
      Button 1
    </ReusableButton>
    </CardComponent>
      
      /** Second Customized Reusable Component **/
      
       <CardComponent 
        cardColClass={"col-sm-3"}
        cardBorder={"card border-info mx-1"}
        cardTitle={"Second Card"}
        cardText={"Sample Card 2" }
    > 
    <ReusableButton className={"btn btn-secondary"} onClick={this.onClick} >
     Button 2
    </ReusableButton>
    </CardComponent>
      
     /** Third Customized Component  **/
      
       <CardComponent 
        cardColClass={"col-sm-3"}
        cardBorder={"card border-primary mx-1"}
        cardTitle={"Third Card"}
        cardText={"Sample Card 3" }
    > 
    <ReusableButton className={"btn btn-info"} onClick={this.onClick} >
      Button 3
    </ReusableButton>
    </CardComponent>
      
    )
  }
}
export default ReusableComponents;