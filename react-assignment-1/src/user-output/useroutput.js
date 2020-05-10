import React, {Component} from 'react';

class UserOutput extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.username}'s favourite movies</h1>
        <p>Goodbye Lenin</p>
        <p>The Lives of Others</p>
      </div>
    )
  }
}

export default UserOutput;
