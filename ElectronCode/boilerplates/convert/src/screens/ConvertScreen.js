import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import ConvertPanel from '../components/ConvertPanel';
import VideoSelectScreen from './VideoSelectScreen';
import { setFormat, removeVideo, showInFolder } from '../actions';

class ConvertScreen extends Component {
  render() {
    return (
      <div className="container">
        <VideoSelectScreen small />
        <VideoList
          videos={this.props.videos}
          onFormatChange={this.props.setFormat}
          onFolderOpen={this.props.showInFolder}
          removeVideo={this.props.removeVideo}

        />
        <ConvertPanel />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videos };
}

export default connect(mapStateToProps, { setFormat, removeVideo, showInFolder })(ConvertScreen);
