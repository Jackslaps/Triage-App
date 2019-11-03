import React, { Component } from 'react';

class Assistance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        console.log("Props: ", this.state.props)
        return(
            <div>
                <p>{this.state.props}</p>
            </div>
        )
    }
}

export default Assistance;