var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id="search-bar-input" onInput={function () { userInput = document.getElementById('search-bar-input').value; }} />
    <button className="btn hidden-sm-down" onClick={function() { props.onClick(userInput); }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);
var userInput = '';
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
