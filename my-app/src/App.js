import React, { Component } from 'react';
import Missions from './components/todo';

class App extends Component {
  state = {
    mission: [
      { id: 0, value: "value" },
      { id: 1, value: "value" },
      { id: 2, value: "value" },

    ]
  }
  addmission = (e) => {
    e.preventDefault();
    var updated = [...this.state.mission];
    var newvalue = {};
    newvalue.id = updated.length;
    newvalue.value = e.target.text.value;
    updated.push(newvalue);
    console.log(updated);
    this.setState({ mission: updated });
  }
  deletemission = (button) => {
    console.log(button.target.id);
    var afterdelete = [...this.state.mission];
    afterdelete.splice(button.target.id, 1);
    console.log(afterdelete);
    this.setState({ mission: afterdelete });

  }
  render() {
    return (

      <div style={{ textAlign: "center" }}>
        <h1>app</h1>
        <Missions todos={this.state.mission} addnew={this.addmission} delete={this.deletemission} />
      </div>
    );
  }
}

export default App;
