import React, { Component } from 'react';

class AVPU extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname:""
        }
    }

    genericSync(event) {
        const { name, value } = event.target;
        this.setState( { [name]: value } )
    }

    render() {
        const { name, lastname } = this.state.params;

        return (
            <div className="card grid-1 all-center">
                name: { !name ? "" : name }
                last name: { !lastname ? "" : lastname}
            </div>
        )
    }

}

export default AVPU;