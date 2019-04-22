import React, { Component } from 'react';
import YouTube from 'react-youtube';
import '../styles/apod.css'


class Apod extends Component {


    render() {
      const str = this.props.apod.url

      return(
        <div className="apod-container">
          <div className="apod">
            <div className="apod-date">
              {new Date().toDateString()}
            </div>
            <div className="caption">
              {this.props.apod.explanation}
            </div>
          </div>
              <div className="apod-video">
                <YouTube videoId={str.substring(str.length-17,str.length-6)} />
              </div>
            <div>
              <div className="apod-image">
                <img src={this.props.apod.hdurl} alt="hd" />
              </div>
            </div>
        </div>
      )
    }
}


export default Apod;
