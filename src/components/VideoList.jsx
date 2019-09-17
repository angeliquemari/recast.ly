class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="video-list">
        <VideoListEntry video={exampleVideoData[0]} />
        <VideoListEntry video={exampleVideoData[1]} />
        <VideoListEntry video={exampleVideoData[2]} />
        <VideoListEntry video={exampleVideoData[3]} />
        <VideoListEntry video={exampleVideoData[4]} />
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
import VideoListEntry from '../components/VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';
// var exampleVideos = exampleVideoData;
