import  React, {Component} from "react";

export default class Employee extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(e) {
        this.props.onSelect(this.props.index);
        if (e.target.className === "clickable") {
            this.props.onNameClick()
        }
    }

    render() {
        return (
          <tr onClick={this.handleSelect} className={this.props.selected ? "selected" : ""}>
              <td className="clickable">{this.props.lastName}</td>
              <td className="clickable">{this.props.firstName}</td>
              <td>{this.props.age}</td>
              <td>{this.props.address}</td>
              <td>{this.props.position}</td>
          </tr>
        )
    }
}