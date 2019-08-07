import React, { Component } from 'react';

import styles from './styles';

class PopUp extends Component {

    constructor(props) {
      super(props);

      this.state = {
        popup: props.popup,
      };
    }

    render() {

        const { popup, close } = this.props;

        return (
                <div style={styles.popup}>

                    <div style={styles.content}>

                        <div style={styles.header}>
                            <h3>{popup.title}</h3>
                        </div>

                        <div style={styles.body}>
                            <div>{popup.message}</div>
                        </div>

                        <div style={styles.actions}>
                            <button style={styles.button} onClick={popup.close ? popup.close : close}>
                                Close
                            </button>
                            <button style={styles.button} onClick={() => popup.confirm(popup.object)}>
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
}

export default PopUp;
