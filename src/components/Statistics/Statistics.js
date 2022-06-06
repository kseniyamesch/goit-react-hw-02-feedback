import React, { Component } from 'react';

export default class Statistics extends Component {

  render() {
    const { good, neutral, bad, total, percentage } = this.props;
    return (
      <ul>
        <li>
          <p> Good:
            <span>{good}</span>
          </p>
        </li>
        <li>
          <p> Neutral:
            <span>{neutral}</span>
          </p>
        </li>
        <li>
          <p> Bad:
            <span>{bad}</span>
          </p>
        </li>
        <li>
            <p> Total:
                <span>{total}</span>
            </p>
        </li>
        <li>
            <p> Positive feedback:
                <span>{percentage}%</span>
            </p>
        </li>
      </ul>
    );
  }
}
