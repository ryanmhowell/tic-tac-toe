import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Cell from "./components/Cell";
import WinMessage from './components/WinMessage';
import ResetButton from './components/ResetButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeCell = this.changeCell.bind(this);
    this.switchTurns = this.switchTurns.bind(this);
    this.state = {
      row1: [
        1, 
        2, 
        3
      ],
      row2: [
        4,
        5,
        6
      ],
      row3: [
        7,
        8,
        9
      ],
      xTurn: true,
      draw: false,
      gameOver: false
    };
  }

  resetGame = (props) => {
    console.log("reset");
    this.setState({
      row1: [
        1,
        2,
        3
      ],
      row2: [
        4,
        5,
        6
      ],
      row3: [
        7,
        8,
        9
      ],
      xTurn: true,
      draw: false,
      gameOver: false
    })
  };

  changeCell = (cellNumber) => {
   let i = 0;
    switch(cellNumber) {
     case 1:
     case 2:
     case 3:
     for(i = 0; i < this.state.row1.length; i++) {
       if(cellNumber === this.state.row1[i]) {
        let array = this.state.row1;
        if(this.state.xTurn) {
          array[i] = "X";
          this.setState(prevState => ({
            xTurn: !prevState.xTurn
          }));
        } else {
          array[i] = "O";
          this.setState(prevState => ({
            xTurn: !prevState.xTurn
          }));
        }
        this.setState({
            row1: array
         });
       }
     }
     break;
     case 4:
     case 5:
     case 6:
     for(i = 0; i < this.state.row2.length; i++) {
      if(cellNumber === this.state.row2[i]) {
       let array = this.state.row2;
       if(this.state.xTurn) {
        array[i] = "X";
        this.setState(prevState => ({
          xTurn: !prevState.xTurn
        }));
      } else {
        array[i] = "O";
        this.setState(prevState => ({
          xTurn: !prevState.xTurn
        }));
      }
       this.setState(prevState => ({
           row2: array
        }));
      }
    }
    break;
    case 7:
    case 8:
    case 9:
    for(i = 0; i < this.state.row3.length; i++) {
      if(cellNumber === this.state.row3[i]) {
       let array = this.state.row3;
       if(this.state.xTurn) {
        array[i] = "X";
        this.setState(prevState => ({
          xTurn: !prevState.xTurn
        }));
      } else {
        array[i] = "O";
        this.setState(prevState => ({
          xTurn: !prevState.xTurn
        }));
      }
       this.setState(prevState => ({
           row3: array
        }));
      }
    }
    break;
    default:
    console.log("error");
   }
  };

  switchTurns = (props) => {
    if(this.state.xTurn) {
      return "X";
      this.setState(prevState => ({
        xTurn: !prevState.xTurn
      }));
    } else {
      return "O";
      this.setState(prevState => ({
        xTurn: !prevState.xTurn
      }));
    }
  }

  render() {
    return(
      <div className="text-center">
        <h1>Tic Tac Toe</h1>
        <ResetButton resetGame={this.resetGame}/>
        <br />
        <div className="container">
          <div className="row">
          <div className="col-9">
            {this.state.row1.map((cell, i) => 
            <Cell value={this.state.row1[i]}
            key={i+1} 
            callBack={this.changeCell}
            switchTurns={this.switchTurns}
            xTurn={this.state.xTurn}/>)} 
          </div>
          </div>
          <div className="row">
          <div className="col-9">
            {this.state.row2.map((cell, i) => 
            <Cell value={this.state.row2[i]}
            key={i+1}
            callBack={this.changeCell} 
            switchTurns={this.switchTurns}
            xTurn={this.state.xTurn}/>)} 
          </div>
          </div>
          <div className="row">
          <div className="col-9">
            {this.state.row3.map((cell, i) => 
            <Cell value={this.state.row3[i]}
            key={i+1}
            callBack={this.changeCell}
            switchTurns={this.switchTurns} 
            xTurn={this.state.xTurn}/>)} 
          </div>
          </div>
          {/* <div className="row">
          <div className="col-9">
            <Button cell={this.state.grid[3]}/> 
            <Button cell={this.state.grid[4]}/>
            <Button cell={this.state.grid[5]}/>
          </div>
          </div>
          <div className="row">
          <div className="col-9">
            <Button cell={this.state.grid[6]}/> 
            <Button cell={this.state.grid[7]}/>
            <Button cell={this.state.grid[8]}/>
          </div>
          </div> */}
        <WinMessage />
        </div>
      </div>
    )
  }

}





export default App;



