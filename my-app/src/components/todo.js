import React from 'react';
let Missions = (props) => {
    const listItems = props.todos.map((mission, i) =>
        <div key={i} className="card" style={{ margin: "auto", textAlign: "center", width: "50%", backgroundColor: "white", color: "blue", marginTop: "25px" }}>
            <div className="card-body">
                <h5 className="card-title">{mission.id}</h5>
                <p className="card-text">{mission.value}</p>
            </div>
            <button id={i} onClick={() => props.delete(i)} className="btn btn-primary" style={{ margin: "auto", width: "25%", backgroundColor: "white", color: "blue" }}>delete</button>
        </div>
    );
    return (
        <div>
            <form onSubmit={props.addnew}>
                <div className="form-group">
                    <label >new missions</label>
                    <input type="text" name="text" className="form-control-range" id="formControlRange"></input>
                </div>
                <button type="submit" className="btn btn-primary">Primary</button>
            </form>
            {listItems}
        </div>

    );
}
export default Missions;

