import React, {Component} from "react";

export default class ViewForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <form className="view">
              <h2>View Employee</h2>
              <label>LastName<input type="text" id="lastName" value={this.props.item.lastName} /></label>
              <label>FirstName<input type="text" id="firstName"  value={this.props.item.firstName} /></label>
              <label>Age<input type="number" id="age"  value={this.props.item.age} /></label>
              <label>Address<textarea id="address"  value={this.props.item.address}>1</textarea></label>
              <label>Position<input id="position" type="text" value={this.props.item.position}/></label>
              <button onClick={this.props.onClose}>Close</button>
          </form>
        )
    }
}