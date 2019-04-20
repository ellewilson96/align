import React, { Component } from 'react';
import Earth from '../components/Earth';
import { addEarth } from '../actions/index'
import '../styles/earth.css'
import { connect } from 'react-redux';


class EarthContainer extends Component {

  componentDidMount() {
    this.props.addEarth()
  }

  render() {
    if (this.props.earth.length === 0) {
           return (
            <div className="earth-title">LOADING...</div>
          )
       }
         return (
           <div>
           <Earth earth={this.props.earth} />
           </div>
         )
       }
   }

   const mapStateToProps = (state) => {
       return { earth: state.earth}
     }


   export default connect(mapStateToProps, { addEarth })(EarthContainer);
