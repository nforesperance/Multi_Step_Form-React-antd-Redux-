import React from "react";
import { InputNumber, Form, Select, message } from "antd";
import formItemLayout from "../constants/formwrappercss";
import axios from "axios";
import route from "../constants/settings";
class Dimension extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transporteurList: []
    };
  }
  isValid = () => {
    var val = false;
    var value = {};
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        val = true;
        value = values;
      }
    });

    return [val, value];
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form {...formItemLayout}>
        <div className="tittle">
          <h3 className="tittle">Package Dimension</h3>
        </div>
        <Form.Item label="Width(cm)">
          {getFieldDecorator("width", {
            rules: [
              {
                required: false,
                message: "Entrez la largeur du colis!"
              }
            ]
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Length(cm)">
          {getFieldDecorator("length", {
            rules: [
              {
                required: false,
                message: "Entrez la longeur du colis!"
              }
            ]
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Height(cm)">
          {getFieldDecorator("height", {
            rules: [
              {
                required: false,
                message: "Entrez la hauteur du colis!"
              }
            ]
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Weight(kg)">
          {getFieldDecorator("weight", {
            rules: [
              {
                required: false,
                message: "Entrez le poids du colis!"
              }
            ]
          })(<InputNumber />)}
        </Form.Item>
      </Form>
    );
  }
}

const DimensionForm = Form.create({ name: "dimension" })(Dimension);

export default DimensionForm;
