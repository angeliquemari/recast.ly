class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: exampleVideoData, selected: exampleVideoData[0]};
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            ` <div><h5><em>search</em> view goes here</h5></div>
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
  onVideoEntryClick(video) {
    this.setState({
      selected: video
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
import VideoList from '../components/VideoList.js';
import VideoPlayer from '../components/VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
