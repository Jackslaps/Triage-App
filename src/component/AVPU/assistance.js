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
                <h1>Do you need assistance?</h1>
                <br />
                <button className="btn btl-light btn-block">
                    Yes
                </button>
                <br/>
                <button className="btn btl-light btn-block">
                    No
                </button>
                <p>{this.state.props}</p>
            </div>
        )
    }
}

export default Assistance;