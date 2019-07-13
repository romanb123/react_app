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
    e.preventDefault();
    var updated = [...this.state.mission];
    var newvalue = {};
    newvalue.value = e.target.text.value;
    newvalue.id = 4;
    updated.push(newvalue);
    console.log(updated);
    this.setState({ mission: updated });
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
