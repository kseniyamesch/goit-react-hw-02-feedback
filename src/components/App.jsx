import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = evt => {
    const { name } = evt.currentTarget;
    console.log(evt.currentTarget.name)
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }), () => console.log(this.state));
  };

  countTotalFeedback = () => {
    return (
      this.state.good + this.state.neutral + this.state.bad
    )
  }

  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state
    return (
      Math.round(good / (good + neutral + bad) * 100)
    )
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onBtnClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {(this.state.good || this.state.neutral || this.state.bad) 
          ? <Statistics 
          good= {this.state.good}
          neutral = {this.state.neutral}
          bad = {this.state.bad}
          total = {this.countTotalFeedback()}
          percentage = {this.countPositiveFeedbackPercentage()}
          ></Statistics>
        : <Notification message="There is no feedback"></Notification>
        }
        </Section>
      </div>
    );
  }
}
