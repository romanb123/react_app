import React from 'react';

let Missions = (props) => {
    console.log(typeof props.todos);
    console.log(props.todos);
    const listItems = props.todos.map((mission) =>
        <div key={mission.id} className="card" style={{ width: "100%", backgroundColor: "white", color: "blue", marginTop: "25px" }}>
            <div className="card-body">
                <h5 className="card-title">{mission.id}</h5>
                <p className="card-text">{mission.value}</p>
            </div>
        </div>
    );
    return (
        <div>
            <form onSubmit={props.addnew}>
                <div className="form-group">
                    <label for="formControlRange">new missions</label>
                    <input type="text" className="form-control-range" id="formControlRange"></input>
                </div>
                <button type="button" className="btn btn-primary">Primary</button>
            </form>
            {listItems}
        </div>

    );
}
export default Missions;

