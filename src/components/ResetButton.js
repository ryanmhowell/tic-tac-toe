import React, {Component} from "react";

const ResetButton = (props) => {
    return (
        <div>
          <button onClick={props.resetGame}>Reset</button>
        </div>
    )
};

export default ResetButton;