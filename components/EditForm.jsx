import  React, {Component} from "react";

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: this.props.item.lastName,
            firstName: this.props.item.firstName,
            age: this.props.item.age,
            address: this.props.item.address,
            position: this.props.item.position

        };
        this.handleEmployeeEdit = this.handleEmployeeEdit.bind(this);
    }

    handleEmployeeEdit() {
        const newEmployee = {
            id: this.props.id,
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            age: this.state.age,
            address: this.state.address,
            position: this.state.position
        };
        this.props.onEmployeeEdit(newEmployee);
        this.props.onClose()
    }

    render() {
        return (
          <form>
              <h2>Edit Employee</h2>
              <label>LastName<input type="text" id="lastName" required={true} value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})}/></label>
              <label>FirstName<input type="text" id="firstName" required={true} value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})}/></label>
              <label>Age<input type="number" id="age" required={true} value={this.state.age} onChange={(e) => this.setState({age: e.target.value})}/></label>
              <label>Address<textarea id="address" required={true} value={this.state.address} onChange={(e) => this.setState({address: e.target.value})}>1</textarea></label>
              <label>Position<input id="position" type="text" value={this.state.position} onChange={(e) => this.setState({position: e.target.value})}/></label>
              <div className="buttons">
                  <button onClick={this.props.onClose}>Cancel</button>
                  <button type="submit" onClick={this.handleEmployeeEdit}>Save</button>
              </div>
          </form>
        )
    }
}