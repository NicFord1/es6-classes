import React from 'react';

// var isAdmin = true;
// var adminComponent = (Component) => {
//   return class Admin extends React.Component {
//     render() {
//       if (isAdmin) {
//         return (
//           <div className="callout secondary">
//             <p className="alert label">Private Admin Info</p>
//             <Component {...this.props}/>
//           </div>
//         );
//       } else {
//         return null;
//       }
//     }
//   };
// };

var isAdmin = true;
var adminComponent = (Component) => {
  return class Admin extends Component {
    componentDidUpdate() {
      console.log('Admin Component Did Update');

      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }
    render() {
      if (isAdmin) {
        return (
          <div className="callout secondary">
            <p className="alert label">Private Admin Info</p>
            {super.render()}
          </div>
        );
      } else {
        return null;
      }
    }
  };
};

class Component2 extends React.Component {
  // componentDidUpdate() {
  //   console.log("Component2 Did Update");
  // }

  constructor(props) {
    super(props);
    this.state = {count: props.count};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <h3>Component2 Using React.Component</h3>
        <p>Current Count: {this.state.count}</p>
        <button className="button" onClick={this.handleClick}>Button Two</button>
      </div>
    );
  }
}

Component2.defaultProps = {count: 50};

Component2.propTypes = {count: React.PropTypes.number};

export default adminComponent(Component2);
