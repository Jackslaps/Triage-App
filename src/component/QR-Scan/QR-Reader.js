import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import QrReader from 'react-qr-reader'
 
class Scanner extends Component {
  state = {
    result: null
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
      
    }
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    const { result } = this.state;
    if(result != null) {
      return <Redirect to={{pathname:'/assistance', state: { stateName: result} }}/>
    }

    return (
      <div className="card grid-1 all-center">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '25%' }}
        />
        {this.state.result}
      </div>
    )
  }
}

export default Scanner;