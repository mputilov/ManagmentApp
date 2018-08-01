import  React, {Component} from "react";

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: "",
            firstName: "",
            age: "",
            address: "",
            position: ""
        };
        this.handleEmployeeAdd = this.handleEmployeeAdd.bind(this)
    }

    handleEmployeeAdd() {
        const newEmployee = {
            id: Date.now(),
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            age: this.state.age,
            address: this.state.address,
            position: this.state.position
        };
        this.props.onEmployeeAdd(newEmployee);
        this.props.onClose()
    }

    render() {
        return (
          <form>
              {console.log(this.state)}
              {console.log(this.props)}
              <h2>New Employee</h2>
              <label>LastName<input type="text" id="lastName" required={true} onChange={(e) => this.setState({lastName: e.target.value})}/></label>
              <label>FirstName<input type="text" id="firstName" required={true} onChange={(e) => this.setState({firstName: e.target.value})}/></label>
              <label>Age<input type="number" id="age" required={true} onChange={(e) => this.setState({age: e.target.value})}/></label>
              <label>Address<textarea id="address" required={true} onChange={(e) => this.setState({address: e.target.value})}></textarea></label>
              <label>Position<input id="position" type="text" onChange={(e) => this.setState({position: e.target.value})}/></label>
              <div className="buttons">
                  <button onClick={this.props.onClose} >Cancel</button>
                  <button type="submit" onClick={this.handleEmployeeAdd}  >Save</button>
              </div>
          </form>
        )
    }
}