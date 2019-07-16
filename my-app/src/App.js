import React, { Component } from 'react';
import Missions from './components/todo';

class App extends Component {
  state = {
    mission: [


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
  deletemission = (i) => {
    console.log(i);
    var afterdelete = [...this.state.mission];
    afterdelete.splice(i, 1);
    for (let index = 0; index < afterdelete.length; index++) {
      afterdelete[index].id = index;
    }
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
