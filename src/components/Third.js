import React, { Component } from "react";
import {Form } from "antd";
import { connect } from 'react-redux'

class Third extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  render() {
    const store = this.props.data
    
    return (
      <div id = "container">
      <h3 className = "tittle"> Verification</h3>
      <h4 className = "tittle" >Sender Information</h4>
      <div className = "confirm">
      {store.map((elt, index) => {
              if( elt.id==="1")
              return(<h5 key={index} value={elt.id}>Name: {elt.content} </h5>)
              else if( elt.id==="2")
              return(<h5 key={index} value={elt.id}> Surname: {elt.content} </h5>)
              else if( elt.id==="3")
              return(<h5 key={index} value={elt.id}>Email: {elt.content} </h5>)
              else if( elt.id==="4")
              return(<h5 key={index} value={elt.id}>Country: {elt.content} </h5>)
              else if( elt.id==="5")
              return(<h5 key={index} value={elt.id}>Telephone: {elt.content} </h5>)
              else if( elt.id==="6")
              return(<h5 key={index} value={elt.id}>City: {elt.content} </h5>)
              else if( elt.id==="7")
              return(<h5 key={index} value={elt.id}>Quarter: {elt.content} </h5>)
              else if( elt.id==="8")
              return(<h5 key={index} value={elt.id}>Sector: {elt.content} </h5>)
           })}
      </div>      
      <h4 className = "tittle">Destination Information</h4>
      <div className = "confirm">
      {store.map((elt, index) => {
              if( elt.id==="9")
              return(<h5 key={index} value={elt.id}>Name: {elt.content} </h5>)
              else if( elt.id==="10")
              return(<h5 key={index} value={elt.id}>Surname: {elt.content} </h5>)
              else if( elt.id==="11")
              return(<h5 key={index} value={elt.id}>Email: {elt.content} </h5>)
              else if( elt.id==="12")
              return(<h5 key={index} value={elt.id}>Country: {elt.content} </h5>)
              else if( elt.id==="13")
              return(<h5 key={index} value={elt.id}>Telephone: {elt.content} </h5>)
              else if( elt.id==="14")
              return(<h5 key={index} value={elt.id}>City: {elt.content} </h5>)
              else if( elt.id==="15")
              return(<h5 key={index} value={elt.id}>Quarter: {elt.content} </h5>)
              else if( elt.id==="16")
              return(<h5 key={index} value={elt.id}>Sector: {elt.content} </h5>)
           
           })}
        </div> 
      <h4 className = "tittle">Package Dimensions</h4>
      <div className = "confirm">
      {store.map((elt, index) => {
              if( elt.id==="17")
              return(<h5 key={index} value={elt.id}>Width: {elt.content} cm </h5>)
              else if( elt.id==="18")
              return(<h5 key={index} value={elt.id}>Length: {elt.content}cm </h5>)
              else if( elt.id==="19")
              return(<h5 key={index} value={elt.id}>Height: {elt.content}cm </h5>)
              else if( elt.id==="20")
              return(<h5 key={index} value={elt.id}>Weight: {elt.content} kg </h5>)
           })}
        </div>  
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
  data:state.data
  }
}
const MainForm = Form.create({})(Third);

export default connect(mapStateToProps)(MainForm);