import React from 'react';

var Component1 = React.createClass({
  getInitialState: function () {
    return {count: this.props.count};
  },
  getDefaultProps: function () {
    return {count: 11};
  },
  propTypes: {
    count: React.PropTypes.number
  },
  handleClick: function () {
    this.setState({count: this.state.count + 1});
  },
  render: function () {
    return (
      <div>
        <h3>Component 1 Using React.createClass</h3>
        <p>Current Count: {this.state.count}</p>
        <button className="button" onClick={this.handleClick}>Button One</button>
      </div>
    );
  }
});

export default Component1;
