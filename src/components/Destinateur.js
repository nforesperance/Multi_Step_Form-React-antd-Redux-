import React from "react";
import { Input, Form, Select} from "antd";
import countryList from "react-select-country-list";
import formItemLayout from "../constants/formwrappercss";

class Destinator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isValid = () => {
    var val = false;
    var value = {};
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        val = false;
        value = values;
      }
    });

    return [val, value];
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form {...formItemLayout}>
       <div ><h3 className = "tittle">Destination Information</h3></div>
        <Form.Item label="Name">
          {getFieldDecorator("dest_name", {
            rules: [
              {
                required: false,
                message: "Entrez le nom du destinateur!"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Surname">
          {getFieldDecorator("dest_last", {
            rules: [
              {
                required: false,
                message: "Entrez le prenom du destinataire !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Email">
          {getFieldDecorator("dest_email", {
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
          {getFieldDecorator("dest_country", {
            rules: [
              {
                required: false,
                message: "Entrez le pays du destinateur !"
              }
            ]
          })(
            <Select
              showSearch
              placeholder="Choose a country"
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
          {getFieldDecorator("dest_phone", {
            rules: [
              {
                required: false,
                message: "Entrez le numero !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="City">
          {getFieldDecorator("dest_city", {
            rules: [
              {
                required: false,
                message: "Entrez la ville du destinateur !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Quarter">
          {getFieldDecorator("dest_quarter", {
            rules: [
              {
                required: false,
                message: "Entrez le quatier du destinateur !"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Sector">
          {getFieldDecorator("dest_sector", {
            rules: [
              {
                required: false,
                message: "Entrez le secteur du destinateur !"
              }
            ]
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}
const DestinatorForm = Form.create({ name: "destinator" })(Destinator);

export default DestinatorForm;
