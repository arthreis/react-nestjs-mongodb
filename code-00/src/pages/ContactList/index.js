import React, { Component } from 'react';
import { contactService } from '../../services/contactService';
import ContactCard from './../../components/ContactCard';
import PopUp from "../../components/PopUp";
import styles from "./style";

export default class ContactList extends Component {

    constructor(props){
        super(props);

        this.state = {
            popup: {
                opened: false,
            },
            contacts: []
        }
    }

    loadPopup = (contact) => {
        this.setState({
            ...this.state,
            popup:{
                opened: !this.state.popup.opened,
                title: "Confirm exclusion",
                message: `Confirm exclusion of contact ${contact.nome} ?`,
                confirm: (contact) => this.deleteContact(contact),
                close: this.loadPopup,
                object: contact,
            }
        })
    }

    componentDidMount(){
        this.loadContacts();
    }

    loadContacts = async () => {
        const response = await contactService.list();
        this.setState({contacts: response.data});
        console.log("Loading contacts... ["+this.state.contacts.length+"]");
    }

    closePopup = () => {
        this.setState({
            ...this.state,
            popup: {
                opened: false,
            }
        });
    }

    deleteContact = async (contact) => {
        console.log(`Deleting ${contact.nome}...`);
        const response = await contactService.delete(contact._id);

        if (response.status === 200) {
            console.log(response.data);
            this.closePopup();
            this.loadContacts();
        }
    }

    render() {
        return (
            <div style={styles.content}>
                {this.state.contacts.map(contact => (
                    <ContactCard contact={contact} key={contact._id} actionConfirmDelete={ this.loadPopup }/>
                ))}
                { this.state.popup.opened ? <PopUp popup={ this.state.popup } close={ this.closePopup }/> : null }
            </div>
        );
    }
}
