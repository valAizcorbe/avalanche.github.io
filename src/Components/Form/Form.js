import React, { Component } from "react";
import "../../styles/Form/form.css";
import Row from "../Row/Row";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      rows: [""],
      inputs: {
        date: "",
        amount: ""
      }
    };
  }

  addRow = () => {
    this.setState({
      rows: [...this.state.rows, ""]
    });
  };

  // save = id => {};

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { date, amount } = this.state;
    const { rows } = this.state;
    const table = rows.map((element, i) => {
      return <Row key={`row ${i}`} />;
    });
    console.log(this.state.rows);
    return (
      <form className="hole-background">
        <div className="first-box">
          <label>Date</label>
          <input
            onChange={e => this.handleInputs(e)}
            value={date}
            type="date"
          />
          <label>Extra Amount</label>
          <input
            onChange={e => this.handleInputs(e)}
            value={amount}
            type="number"
            placeholder="$$$"
          />
        </div>
        {table}
        {/* shows the table  */}
        {/* <table className="big-table">
          <tbody>
            <tr>
              <td>Type</td>
              <td>Remaining Balance</td>
              <td>Interest Rate</td>
              <td>Minimum Payment</td>
            </tr>
            <tr>
              <td id="cell0-0">
                <input
                  onChange={e => this.handleInputs(e)}
                  list="type"
                  value={type}
                />
                <datalist id="type">
                  <option value="Loan" />
                  <option value="Credit Card" />
                  <option value="Other" />
                </datalist>
              </td>
              <td>
                <input
                  onChange={e => this.handleInputs(e)}
                  value={balance}
                  type="number"
                  placeholder="$$"
                />
              </td>
              <td>
                <input
                  onChange={e => this.handleInputs(e)}
                  value={rate}
                  type="number"
                  placeholder="%"
                />
              </td>
              <td>
                <input
                  onChange={e => this.handleInputs(e)}
                  value={payment}
                  type="number"
                  placeholder="$"
                />
              </td>
            </tr>
          </tbody>
        </table> */}
        <button onClick={this.addRow} className="button-type">
          Add Row
        </button>
      </form>
    );
  }
}

export default Form;
