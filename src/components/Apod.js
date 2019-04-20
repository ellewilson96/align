import React, { Component } from 'react';
import '../styles/apod.css'


class Apod extends Component {


    render() {
      return(
        <div className="apod-container">
        <div className="caption">
          {this.props.apod.explanation}
        </div>
        <div className="apod-image">
          <img src={this.props.apod.hdurl} alt="hd" />
        </div>
        </div>
      )
    }
}


export default Apod;