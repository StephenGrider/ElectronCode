import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import _ from 'lodash'
import * as actions from '../actions';

class ConvertPanel extends Component {

  onCancelPressed = () => {
    this.props.removeAllVideos();
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="convert-panel">
        <button className="btn red" onClick={this.onCancelPressed}>
          Cancel
        </button>
        <button className="btn" onClick={this.props.convertVideos.bind(null, this.props.videos)}>
          Convert!
        </button>
      </div>
    );
  };
}

function mapStateToProps(state){
  // Convert Redux state videos object to 
  //an array using lodash's map method
  const videos = _.map(state.videos)
  return { videos }
}

export default withRouter(
  connect(mapStateToProps, actions)(ConvertPanel)
);
