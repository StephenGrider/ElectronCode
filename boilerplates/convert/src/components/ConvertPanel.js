import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import _ from 'lodash'

class ConvertPanel extends Component {
  onCancelPressed = () => {
    this.props.removeAllVideos()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='convert-panel'>
        <button className='btn red' onClick={this.onCancelPressed}>
          Cancel
        </button>
        <button
          className='btn'
          onClick={this.props.convertVideos.bind(null, this.props.videos)}
        >
          Convert!
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const videos = _.map(state.videos)
  console.log(`mapStateToProps returned ${videos.length} videos.`)
  return { videos }
}

export default withRouter(connect(mapStateToProps, actions)(ConvertPanel))
