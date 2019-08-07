import React, { Component } from 'react';

import { version } from '../../services/contactService';

class Footer extends Component {

    state = {
        info: {},
    }

    componentDidMount(){
        this.buscaInfoApi();
    }

    buscaInfoApi = async () => {
        const lastVersion = await version();
        this.setState( () => ({info: lastVersion.data}) );
    }

    render() {
        return (
            <div>
                <span>{this.state.info.title} - {this.state.info.description}</span>
            </div>
        );
    }
}

export default Footer;
