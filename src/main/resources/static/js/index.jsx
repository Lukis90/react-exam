var App = React.createClass({
  render: function() {
    return (
      <FlightTableComponent />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
