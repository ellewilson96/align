import React, { Component } from 'react';
import Apod from '../components/Apod';
import { addApod } from '../actions/index'
import { connect } from 'react-redux';


class ApodContainer extends Component {

  componentDidMount() {
    this.props.addApod()
  }

  render() {
    if (this.props.apod.length === 0) {
           return (
            <div className="apod-title">LOADING...</div>
          )
       }
         return (
           <div>
           <Apod apod={this.props.apod} />
           </div>
         )
       }
   }

   const mapStateToProps = (state) => {
       return { apod: state.apod}
     }


   export default connect(mapStateToProps, { addApod })(ApodContainer);
