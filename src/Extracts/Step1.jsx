import React from 'react'
import {withFormik,Form,Field} from 'formik'
import Yup from 'yup'

const Step1= ({
    values
})=> (
      <Form className ="login-form frm">
        <Field type="text" name="nom_exp" placeholder = "Nom Expediteur" className ="field" />
         <br/> <br/>
        <Field type="text" name="prenom_exp" placeholder = "Prenom Expediteur" className ="field"/>
        <br/> <br/>
        <Field type="email" name="email_exp" placeholder = "Email Expediteur" className ="field"/>
        <br/> <br/>
        <Field type="text" name="tel_exp" placeholder = "Numero Telephone" className ="field"/>
        <br/> <br/>
        <Field type="text" name="pays_exp" placeholder = "Pays" className ="field"/>
        <br/> <br/>
        <Field type="text" name="ville_exp" placeholder = "Vile" className ="field"/>
        <br/> <br/>
        <Field type="text" name="quat_exp" placeholder = "Quatier" className ="field"/>
        <br/> <br/>
        <Field type="text" name="sec_exp" placeholder = "Secteur" className ="field"/>
        <br/> <br/>
        <Field component="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
      </Form>
    )
const Form1 = withFormik({
    mapPropsToValues({email}){
        return{
         email: email||""
        }
    }
})(Step1)
export default Form1
