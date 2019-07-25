import React from "react";
import "antd/dist/antd.css";

import First from "./Expediteur";
import Second from "./Destinateur";
import Third from "./Dimension";
import Last from "./Third";
import {Link} from 'react-router-dom'

import {Button, Form, Steps,message } from "antd";
import { connect } from 'react-redux';
import axios from 'axios';
import route from '../constants/settings';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      visble:false,
      infos:[],
    };
  }
next() {
    if (this.state.current === 0) {
      // console.log(this.props.data)
      this.props.form.validateFieldsAndScroll(['exp_name','exp_last','exp_email','exp_country','exp_phone','exp_city','exp_quarter','exp_sector',], (err, values) => {
        if (!err) {
          // add data to redux store
          this.props.addData({id:'1',content:values.exp_name},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'2',content:values.exp_last},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'3',content:values.exp_email},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'4',content:values.exp_country},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'5',content:values.exp_phone},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'6',content:values.exp_city},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'7',content:values.exp_quarter},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'8',content:values.exp_sector},'ADD').then(()=>{
            console.log(this.props.data)
            const current = this.state.current + 1;
            this.setState({ current });
          })
        }
      });
    }
    if (this.state.current === 1) {
      // console.log(this.props.data)
      this.props.form.validateFieldsAndScroll(['dest_name','dest_last','dest_email','dest_country','dest_phone','dest_city','dest_quarter','dest_sector',], (err, values) => {
        if (!err) {
          // add data to redux store
          this.props.addData({id:'9',content:values.dest_name},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'10',content:values.dest_last},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'11',content:values.dest_email},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'12',content:values.dest_country},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'13',content:values.dest_phone},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'14',content:values.dest_city},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'15',content:values.dest_quarter},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'16',content:values.dest_sector},'ADD').then(()=>{console.log("1")}).then(()=>{
            console.log(this.props.data)
            const current = this.state.current + 1;
            this.setState({ current });
          })
        }
      });
    }
    if (this.state.current === 2) {
      // console.log(this.props.data)
      this.props.form.validateFieldsAndScroll(['width','length','height','weight','transporter'], (err, values) => {
        if (!err) {
          console.log(values)
          // add data to redux store
          this.props.addData({id:'17',content:values.width},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'18',content:values.length},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'19',content:values.height},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'20',content:values.weight},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'27',content:values.transporter},'ADD').then(()=>{
            console.log(this.props.data)
            const current = this.state.current + 1;
            this.setState({ current });
          })
        }
      });
    }
    if (this.state.current === 3) {
      // console.log(this.props.data)
      this.props.form.validateFieldsAndScroll(['te_city','te_quarter','te_sector',], (err, values) => {
        if (!err) {
          console.log(values)
          // add data to redux store
          this.props.addData({id:'21',content:values.te_city},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'22',content:values.te_quarter},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'23',content:values.te_sector},'ADD').then(()=>{
            console.log(this.props.data)
            const current = this.state.current + 1;
            this.setState({ current });
          })
        }
      });
    }
    if (this.state.current === 4) {
      // console.log(this.props.data)
      this.props.form.validateFieldsAndScroll(['td_city','td_quarter','td_sector',], (err, values) => {
        if (!err) {
          // add data to redux store
          this.props.addData({id:'24',content:values.td_city},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'25',content:values.td_quarter},'ADD').then(()=>{console.log("1")})
          this.props.addData({id:'26',content:values.td_sector},'ADD').then(()=>{
            console.log(this.props.data)
            const current = this.state.current + 1;
            this.setState({ current });
          })
        }
      });
    }
    if (this.state.current === 5) {
          const current = this.state.current + 1;
          this.setState({ current }); 
    }
  }
  prev() {
    const current = this.state.current - 1;
    // console.log(current)
    this.setState({ current });
  }
  //this function tries to remove all double accurences of data that might be present in the state and returns the last added
  getData(arr){
    let data = arr.slice();
    let selected=[];
    for(var i=0;i<28;i++){
      var element = this.getReal(i.toString(),data);
       selected =[...selected,element];
    }
    //this gives the finall state
    console.log(selected);
    const current = this.state.current + 1;
    this.setState({ current });
    
  }
  //looking for the last occurence(highest index)
  getReal(i,arr){
    var index =0;
    arr.forEach(element => {
      if(element.id===i){
        index = arr.indexOf(element);        
      }
    }); 
    return arr[index];
  }
  getAllData(){

  }
  render() {
    // const { current } = this.state;
    const { Step } = Steps;
    const { current } = this.state;
    let steps = [
      {
        title: "Step 1",
        content: <First form={this.props.form} />
      },
      {
        title: "Step 2",
        content: <Second form={this.props.form} />
      },
      {
        title: "Step 3",
        content: <Third form={this.props.form} />
      },
      {
        title: "Step 4",
        content: <Last form={this.props.form} />
      },
    ];
    return (
      <div className = "steps" >
      <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        {steps.map(({ title, content }, i) => (
          <div
            key={title}
            className={i === this.state.current ? "foo fade-in" : "foo"}
          >
            {content}
          </div>
        ))}
        <div className="steps-action">
        {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()} className = "but">
              Previous
            </Button>
          )}
          {current < steps.length - 2 && (
            <Button type="primary" onClick={() => this.next()} id = "suivant"  className = "but">
              Next
            </Button>
          )}
          {current === steps.length - 2 && (
            <Button type="primary" onClick={() => this.next()} id = "suivant"  className = "but">
              Suivant
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button  style={{ marginRight: 8 }} type="primary" onClick={() => this.getAllData()} id = "suivant"  className = "but">
              Done
            </Button>
          )}
        </div>
       
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addData:(data)=>new Promise(
      resolve=>{
        dispatch({type:'ADD',payload:data});
        resolve()
      })
  }
}
const mapStateToProps = (state) =>{
return{
data:state.data
}
}
const MainForm = Form.create({})(Main);

export default connect(mapStateToProps,mapDispatchToProps)(MainForm);
