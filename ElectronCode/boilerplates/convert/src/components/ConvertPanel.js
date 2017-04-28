import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
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
        <button className="btn" onClick={this.props.convertVideos}>
          Convert!
        </button>
      </div>
    );
  };
}

export default withRouter(
  connect(null, actions)(ConvertPanel)
);
