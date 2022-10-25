import React from 'react';
import calculate from '../logic/calculate';

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="display">
          {' '}
          {total}
          {' '}
          {operation}
          {' '}
          {next}
          {' '}
        </div>

        <div className="buttonContainer">
          <div>
            <button type="button" onClick={this.handleClick}>AC</button>
            <button type="button" onClick={this.handleClick}>+/-</button>
            <button type="button" onClick={this.handleClick}>%</button>
            <button type="button" onClick={this.handleClick}>+</button>
          </div>
          <div>
            <button type="button" onClick={this.handleClick}>7</button>
            <button type="button" onClick={this.handleClick}>8</button>
            <button type="button" onClick={this.handleClick}>9</button>
            <button type="button" onClick={this.handleClick}>x</button>
          </div>
          <div>
            <button type="button" onClick={this.handleClick}>4</button>
            <button type="button" onClick={this.handleClick}>5</button>
            <button type="button" onClick={this.handleClick}>6</button>
            <button type="button" onClick={this.handleClick}>-</button>
          </div>
          <div>
            <button type="button" onClick={this.handleClick}>1</button>
            <button type="button" onClick={this.handleClick}>2</button>
            <button type="button" onClick={this.handleClick}>3</button>
            <button type="button" onClick={this.handleClick}>+</button>
          </div>
          <div>
            <button type="button" className="zero" onClick={this.handleClick}>0</button>
            <button type="button" onClick={this.handleClick}>.</button>
            <button type="button" onClick={this.handleClick}>=</button>
          </div>
        </div>

      </>
    );
  }
}

export default Calculator;
