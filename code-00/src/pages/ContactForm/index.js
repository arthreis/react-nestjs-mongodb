import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { contactService } from '../../services/contactService';

import styles from "./style";

class ContactForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            showPopUp: false,
            message: "",
        }
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            this.findContact(this.props.match.params.id);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged(this.props);
        }
    }

    onRouteChanged(props) {
        if(props.match.params.id) {
            console.log("Finding new contact...")
            this.findContact(this.props.match.params.id);
        } else {
            console.log("Cleaning form...")
            this.props.setValues({
                ...this.props.values,
                contact:{
                    nome: "",
                    canal: "",
                    valor: "",
                    obs: "",
                }
            });
        }
    }

    findContact = async () => {
        const response = await contactService.findById(this.props.match.params.id);
        console.log(response.data);
        this.props.setValues({
            ...this.props.values,
            contact: response.data,
        });
    }

    render() {

        const {handleSubmit, handleChange, values, errors} = this.props;

        return (
            <div style={styles.content}>
                <form onSubmit={handleSubmit} style={styles.form}>

                    <input type="text"     placeholder="Nome"        name="contact.nome"        onChange={handleChange} value={values.contact.nome} style={styles.text} />
                    { !!errors.contact && errors.contact.nome && <span>{errors.contact.nome}</span> }<br/><br/>

                    <input type="text"     placeholder="Canal"        name="contact.canal"        onChange={handleChange} value={values.contact.canal} style={styles.text} />
                    { !!errors.contact && errors.contact.canal && <span>{errors.contact.canal}</span> }<br/><br/>

                    <input type="text"   placeholder="Valor"       name="contact.valor"       onChange={handleChange} value={values.contact.valor} style={styles.text} />
                    { !!errors.contact && errors.contact.valor && <span>{errors.contact.valor}</span> }<br/><br/>

                    <textarea placeholder="Observação" name="contact.obs" onChange={handleChange} value={values.contact.obs} style={styles.textarea}/>
                    { !!errors.contact && errors.contact.obs && <span>{errors.contact.obs}</span> }<br/><br/>
                    <br/>
                    <button type="submit" style={styles.button}>Salvar</button>
                </form>
            </div>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        contact:{
            nome: "",
            canal: "",
            valor: "",
            obs: "",
        }
    }),

    validateOnChange: false,

    validateOnBlur: false,

    validationSchema: Yup.object().shape({
        contact: Yup.object().shape({
            nome: Yup.string().required('Required field'),
            canal: Yup.string().required('Required field'),
            valor: Yup.string().required('Required field'),
            obs: Yup.string(),
        })
    }),

    handleSubmit: async (values, { props }) => {
        const { id } = props.match.params;
        const { contact } = values;

        contact.id = id;

        if (id) {
            console.log("Editing...");

            const response = await contactService.edit(contact.id, contact);
            console.log(response.data);

            if(response.status === 200){
                props.history.push('/list');
            }else{
                console.log(response);
            }
        } else {
            console.log("Creating...");

            const response = await contactService.create(contact);
            console.log(response.data);

            if(response.status === 201){
                props.history.push('/list');
            }else{
                console.log(response);
            }
        }
    }
})(ContactForm);
