import React, {Component} from "react";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleCellChange = this.handleCellChange.bind(this);
    }


    handleCellChange = (props) => {
        // let array = this.props.grid;
        // array[props.cell] = "X";
        // this.setState({
        //   grid: array
        // });
        const value = this.props.value;
        this.props.callBack(value);
      };


    render() {
    return (
      <div value={this.props.value} 
      className="cell col-3"
      onClick={this.handleCellChange}
      name="cell">
      {this.props.value}
      </div>
    )
  };
}
  export default Cell;