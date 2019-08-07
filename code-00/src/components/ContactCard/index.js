import React, { Component } from 'react';

import styles from './styles';
import { Link } from 'react-router-dom';

class ContactCard extends Component {

    constructor(props){
        super(props);

        this.state = {
            contact: props.contact
        }
    }

  render() {

    const { contact } = this.state;
    const { actionConfirmDelete } = this.props;

    return (
            <div key={contact._id} style={styles.card}>
                <div style={styles.header}>
                    <div> {contact.nome} </div>
                </div>

                <div style={styles.content}>
                    {contact.canal} <br/>
                    {contact.valor} <br/>
                    {contact.obs}   <br/>
                </div>

                <div style={styles.actions}>
                    <Link to={ { pathname: `/edit/${contact._id}` } } params={contact._id}>
                        <button>EDIT</button>
                    </Link>
                        <button onClick={() => actionConfirmDelete(this.state.contact)}>DELETE</button>
                </div>
            </div>
            );

  }
}

export default ContactCard;
