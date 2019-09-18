class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: initialVideoArray, selected: initialVideoArray[0]};
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onClick={this.onSearchClick.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.selected} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.data} onClick={this.onVideoEntryClick.bind(this)} /></div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: 'dogs',
      max: 5
    }, function(fetchedVideoArray) {
      this.setState({
        data: fetchedVideoArray,
        selected: fetchedVideoArray[0]
      });
    }.bind(this));
  }
  onVideoEntryClick(video) {
    this.setState({
      selected: video
    });
  }
  onSearchClick(inputQuery) {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: inputQuery,
      max: 5
    }, function(fetchedVideoArray) {
      this.setState({
        data: fetchedVideoArray,
        selected: fetchedVideoArray[0]
      });
    }.bind(this));
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
import VideoList from '../components/VideoList.js';
import VideoPlayer from '../components/VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from '../components/Search.js';

var initialVideoArray =
[{
  kind: '',
  etag: '',
  id: {
    kind: '',
    videoId: ''
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 120,
        height: 90
      },
      medium: {
        url: '',
        width: 320,
        height: 180
      },
      high: {
        url: '',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: ''
  }
}];
