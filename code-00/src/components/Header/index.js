import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import styles from "./style";

class Header extends Component {
    render() {
        return (
            <div style={styles.header}>
                <Link to="/list">
                    <div style={styles.menu}>List</div>
                </Link>
                <br/>
                <Link to="/create">
                    <div style={styles.menu}>Create</div>
                </Link>
            </div>
        );
    }
}

export default Header;
