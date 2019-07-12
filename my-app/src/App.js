import React, { Component } from 'react';
import Missions from './components/todo';

class App extends Component {
  state = {
    mission: [
      { id: 1, value: "value" },
      { id: 2, value: "value" },
      { id: 3, value: "value" },

    ]
  }
  addmission = (e) => {
    var newlist = [...this.state];
    console.log(newlist);

  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>app</h1>
        <Missions todos={this.state.mission} addnew={this.addmission} />
      </div>
    );
  }
}

export default App;
