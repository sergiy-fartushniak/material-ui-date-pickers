import React, { Component } from 'react';
import DatePicker from "material-ui/DatePicker";

import "./TestComponent.css";

export class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstDate: null,
      secondDate: null
    };
  }

  handleFirstDateChange = (event, date) => {
    this.setState({
      firstDate: date,
    });
  };
  handleSecondDateChange = (event, date) => {
    this.setState({
      secondDate: date,
    });
  };

  render() {
    const { firstDate, secondDate } = this.state;

    return (
      <div>
        <h1 className='title'>
          Date Pickers
        </h1>
        <div className='container'>
          <div className='date-wrapper'>
            <DatePicker
              id="dp1"
              container="inline"
              hintText="First Date input"
              value={firstDate}
              onChange={this.handleFirstDateChange}
            >
            </DatePicker>
          </div>
          <div className='date-wrapper'>
            <DatePicker
              id="dp2"
              container="inline"
              hintText="Second Date input"
              value={secondDate}
              onChange={this.handleSecondDateChange}
            >
            </DatePicker>
          </div>
        </div>
      </div>
    );
  }
};
