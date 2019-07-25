import React from "react";
import { Input, Form, Select } from "antd";
import countryList from "react-select-country-list";
import formItemLayout from "../constants/formwrappercss";
import { connect } from 'react-redux'
class Expeditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form {...formItemLayout}>
        <div> <h3 className = "tittle" >Sender Information</h3> </div>
        <Form.Item label="Name">
          {getFieldDecorator("exp_name", {
            rules: [
              {
                required: false,
                message: "Entrez le nom de l'expediteur!"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Surname">
          {getFieldDecorator("exp_last", {
            rules: [
              {
                required: false,
                message: "Entrez le prenom du destinataire !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Email">
          {getFieldDecorator("exp_email", {
            rules: [
              {
                type: "email",
                message: "email l'expediteur!"
              },
              {
                required: false,
                message: "Entrez l'email !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Country">
          {getFieldDecorator("exp_country", {
            rules: [
              {
                required: false,
                message: "Entrez le pays de l'expediteur !"
              }
            ]
          })(
            <Select
              showSearch
              placeholder="choose a country"
              optionFilterProp="children"
              style={{ width: "100%" }}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {countryList()
                .getLabels()
                .map((elt, index) => (
                  <Select.Option value ={elt} key={index}>{elt}</Select.Option>
                ))}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Telephone">
          {getFieldDecorator("exp_phone", {
            rules: [
              {
                required: false,
                message: "Entrez le numero !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="City">
          {getFieldDecorator("exp_city", {
            rules: [
              {
                required: false,
                message: "Entrez la ville de l'expediteur !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Quarter">
          {getFieldDecorator("exp_quarter", {
            rules: [
              {
                required: false,
                message: "Entrez le quatier de l'expediteur !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Sector">
          {getFieldDecorator("exp_sector", {
            rules: [
              {
                required: false,
                message: "Entrez le secteur de l'expediteur !"
              }
            ]
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
      dummy:state.data    
  }
}
const FirstForm = Form.create({})(Expeditor);

export default connect(mapStateToProps)(FirstForm);
