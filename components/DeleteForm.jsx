import  React, {Component} from "react";

export default class DeleteForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <form >
              <p>Are you sure you want to remove employee?</p>
              <div className="buttons">
                  <button onClick={this.props.onClose}>Cancel</button>
                  <button type="submit"  onClick={this.props.onDelete}>Ok</button>
              </div>
          </form>
        )
    }
}