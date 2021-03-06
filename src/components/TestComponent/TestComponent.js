import React, { Component } from 'react';
import DatePicker from "material-ui/DatePicker";

import "./TestComponent.css";

export class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstDate: null,
      secondDate: null,
      hidden: true
    };
  }
  
  handleFirstDateChange = (event, date) => {
    if (this.state.secondDate === null) {
      this.setState({
        firstDate: date,
        secondDate: date,
      });
      this.hideInutText('#dp2', true);
    } else {
      this.setState({
        firstDate: date,
      });
      this.hideInutText('#dp2',false);
    }
  };

  handleSecondDateChange = (event, date) => {
    this.setState({
      secondDate: date
    });
    this.hideInutText('#dp2', false);
  };

  hideInutText(id, isTouched) {
    const input = document.querySelector(id);

    if(isTouched) {
      input.classList.add('hidden');
      this.setState({
        hidden: true
      });
    } else {
      input.classList.remove('hidden');
      this.setState({
        hidden: false
      });
    }
  }

  render() {
    const { firstDate, secondDate, hidden } = this.state;

    return (
      <div>
        <h1 className='title'>
          Date Pickers
        </h1>
        <div className='container'>
          <div className='date-wrapper'>
            <DatePicker
              id="dp1"
              hintText="First Date Picker"
              container="inline"
              value={firstDate}
              onChange={this.handleFirstDateChange}
            />
          </div>
          <div className='date-wrapper'>
            <DatePicker
              id="dp2"
              hintText="Second Date Picker"
              container="inline"
              value={secondDate}
              onChange={this.handleSecondDateChange}
              hintStyle={{opacity: Number(hidden)}}
            />
          </div>
        </div>
      </div>
    );
  }
};
