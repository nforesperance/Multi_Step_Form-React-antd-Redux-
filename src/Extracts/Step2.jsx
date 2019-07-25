import React from 'react'
import {withFormik,Form,Field} from 'formik'
import Yup from 'yup'

const Step2= ({
    values
})=> (
      <Form className ="login-form">
        <Field type="text" name="nom_dest" placeholder = "Nom Destinateur" className ="field"/>
         <br/> <br/>
        <Field type="text" name="prenom_dest" placeholder = "Prenom Destinateur" className ="field"/>
        <br/> <br/>
        <Field type="email" name="email_dest" placeholder = "Email Destinateur" className ="field"/>
        <br/> <br/>
        <Field type="text" name="tel_dest" placeholder = "Numero Telephone" className ="field"/>
        <br/> <br/>
        <Field type="text" name="pays_dest" placeholder = "Pays" className ="field"/>
        <br/> <br/>
        <Field type="text" name="ville_dest" placeholder = "Vile" className ="field"/>
        <br/> <br/>
        <Field type="text" name="quat_dest" placeholder = "Quatier" className ="field"/>
        <br/> <br/>
        <Field type="text" name="sec_dest" placeholder = "Secteur" className ="field"/>
      </Form>
    )
const Form2 = withFormik({
    mapPropsToValues({email}){
        return{
         email: email||""
        }
    }
})(Step2)
export default Form2
