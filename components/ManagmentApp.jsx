import React, {Component} from "react";
import AddForm from "./AddForm.jsx";
import EditForm from "./EditForm.jsx";
import Employee from  "./Employee.jsx";
import ViewForm from  "./ViewForm.jsx";
import DeleteForm from "./DeleteForm.jsx";

export default class ManagementApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            activePopup: "",
            selectedItemIndex: null
        };

        this.handleSort = this.handleSort.bind(this);
        this.handleControlClick = this.handleControlClick.bind(this);
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handlePopupClose = this.handlePopupClose.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount() {
        const savedData = JSON.parse(localStorage.getItem('employees'));

        if (savedData) {
            this.setState({ employees: savedData });
        }
    }
    componentDidUpdate() {
        const employees = JSON.stringify(this.state.employees);

        localStorage.setItem('employees', employees);
    }

    handleSort(e){
        const sortKey = e.target.innerHTML;
        const data = this.state.employees;
        data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]));
        console.log(data);
        this.setState({
            employees: data
        })
    }

    handleControlClick(e) {
        if (e.target.innerHTML === this.state.activePopup) {
            this.setState({
                activePopup: ""
            });
            return
        }
        this.setState({
            activePopup: e.target.innerHTML
        })
    }
    handleNameClick() {
        this.setState({
            activePopup: "Edit"
        })
    }
    handlePopupClose() {
        this.setState({
            activePopup: ""
        })
    }
    handleSelect(index) {
        if (index === this.state.selectedItemIndex) {
            this.setState({
                selectedItemIndex: null
            });
            return
        }
        this.setState({
            selectedItemIndex: index
        })
    }
    handleAdd(newEmp) {
        this.setState({
            employees: [...this.state.employees, newEmp]
        })
    }
    handleEdit(editEmp) {
        const array = this.state.employees.slice();
        array[this.state.selectedItemIndex] = editEmp;
        this.setState({
            employees: array
        })
    }
    handleRemove() {
        console.log(this.state.selectedItemIndex);
        this.setState({
            employees: this.state.employees.filter((item, index) =>  index !== this.state.selectedItemIndex)
        });
        this.handlePopupClose()
    }


    render() {
        return (
          <main>
              <h1>Company Employees</h1>
              <div className="controls" onClick={this.handleControlClick}>
                <button >Add</button>
                <button >Edit</button>
                <button >Remove</button>
                <button >View</button>
              </div>
              <table cellSpacing={0}>
                <thead>
                <tr onClick={this.handleSort}>
                    <th>lastName</th>
                    <th>firstName</th>
                    <th>age</th>
                    <th>address</th>
                    <th>position</th>
                </tr>
                </thead>
                  <tbody>
                  {this.state.employees.map((employee, i) =>
                    <Employee
                      selected = {i === this.state.selectedItemIndex}
                      lastName={employee.lastName}
                      firstName={employee.firstName}
                      age={employee.age}
                      address={employee.address}
                      position={employee.position}
                      key={employee.id}
                      index={i}
                      onSelect={this.handleSelect}
                      onNameClick={this.handleNameClick}
                    />)}
                  </tbody>
              </table>
              {this.state.activePopup === "Add" && <AddForm onEmployeeAdd={this.handleAdd} onClose={this.handlePopupClose}/>}
              {this.state.activePopup === "Edit" && (this.state.selectedItemIndex !== null) &&
              <EditForm item={this.state.employees[this.state.selectedItemIndex]} onEmployeeEdit={this.handleEdit}
                        onClose={this.handlePopupClose} />}
              {this.state.activePopup === "View" && (this.state.selectedItemIndex !== null) &&
              <ViewForm item={this.state.employees[this.state.selectedItemIndex]} onClose={this.handlePopupClose} />}
              {this.state.activePopup === "Remove" && (this.state.selectedItemIndex !== null) &&
              <DeleteForm  onClose={this.handlePopupClose} onDelete={this.handleRemove}/>}
              <div className="moc">1</div>
          </main>
        )
    }
}


