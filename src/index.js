import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component {
  state = {
    result: '0',
  };

  solve = expression => {
    let solution = eval(this.state.result)
    this.setState({result: solution})
  }
  handleOperations = operation => {
    if (!(this.state.result[this.state.result.length-1]===operation.currentTarget.value)) {
      switch (operation.currentTarget.value) {
        case '+':
          if ((this.state.result[this.state.result.length-1]===("-"))||
              (this.state.result[this.state.result.length-1]===('*'))||
              (this.state.result[this.state.result.length-1]===('/'))){
            this.setState({result: this.state.result.replace(/.$/, operation.currentTarget.value)})
          } else {
            this.setState({result: this.state.result+operation.currentTarget.value})
          }
          break
        case '-':
          if ((this.state.result[this.state.result.length-1]===("+"))||
              (this.state.result[this.state.result.length-1]===('*'))||
              (this.state.result[this.state.result.length-1]===('/'))){
            this.setState({result: this.state.result.replace(/.$/, operation.currentTarget.value)})
          } else {
            this.setState({result: this.state.result+operation.currentTarget.value})
          }
          break
        case '*':
          if ((this.state.result[this.state.result.length-1]===("+"))||
              (this.state.result[this.state.result.length-1]===('-'))||
              (this.state.result[this.state.result.length-1]===('/'))){
            this.setState({result: this.state.result.replace(/.$/, operation.currentTarget.value)})
          } else {
            this.setState({result: this.state.result+operation.currentTarget.value})
          }
          break
        case '/':
          if ((this.state.result[this.state.result.length-1]===("+"))||
              (this.state.result[this.state.result.length-1]===('*'))||
              (this.state.result[this.state.result.length-1]===('-'))){
            this.setState({result: this.state.result.replace(/.$/, operation.currentTarget.value)})
          }
          else {
            this.setState({result: this.state.result+operation.currentTarget.value})
          }
          break

      }

    }
  }
  handleDelOrClear = action => {
    if (action.currentTarget.value==='del') {
      this.setState({result: this.state.result.replace(/.$/, '')})
    } else {
      this.setState({result: ''})
    }

  }

  num1Click = value => {

    if (this.state.result==='0'){
      this.setState({result: value.currentTarget.value})

    } else {
      this.setState({result: this.state.result+value.currentTarget.value})
    }

  }


  represent(){
    return this.state.result
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Calculator_V1</h1>

          <h2>{this.represent()}</h2>


          <div className='btn-group'>
            <button id='button1' value='1' onClick={this.num1Click}>1</button>
            <button id='button1' value='2' onClick={this.num1Click}>2</button>
            <button id='button1' value='3' onClick={this.num1Click}>3</button>
            <button id='button2' value='+' onClick={this.handleOperations}>+</button>
            <button id='button2' value='*' onClick={this.handleOperations}>x</button>
            <button id='button3' value='(' onClick={this.num1Click}>(</button>
            <button id='button3' value=')' onClick={this.num1Click}>)</button>
            <button id='button4' value='Math.sin(' onClick={this.num1Click}>sin</button>
            <button id='button4' value='Math.cos(' onClick={this.num1Click}>cos</button>

          </div>
          <div className='btn-group'>
            <button id='button1' value='4' onClick={this.num1Click}>4</button>
            <button id='button1' value='5' onClick={this.num1Click}>5</button>
            <button id='button1' value='6' onClick={this.num1Click}>6</button>
            <button id='button2' value='-' onClick={this.handleOperations}>-</button>
            <button id='button2' value='/' onClick={this.handleOperations}>/</button>
            <button id='button3' value={Math.PI} onClick={this.num1Click}>pi</button>
            <button id='button3' value='**(1/2)' onClick={this.num1Click}>sqr(</button  >
            <button id='button4' value='Math.tan(' onClick={this.num1Click}>tan</button>
            <button id='button4' value='Math.ctg(' onClick={this.num1Click}>ctg</button>
          </div>
          <div className='btn-group'>
            <button id='button1' value='7' onClick={this.num1Click}>7</button>
            <button id='button1' value='8' onClick={this.num1Click}>8</button>
            <button id='button1' value='9' onClick={this.num1Click}>9</button>
            <button id='button1' value='0' onClick={this.num1Click}>0</button>
            <button id='button2' value='=' onClick={this.solve}>=</button>
            <button id='button3' value='**2' onClick={this.num1Click}>x^2</button>
            <button id='button3' value='**' onClick={this.num1Click}>x^y</button>
            <button id='button5' value='del' onClick={this.handleDelOrClear}>del</button>
            <button id='button6' value='clear' onClick={this.handleDelOrClear}>clear</button>
          </div>
        </header>

      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
