import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  total() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positive() {
    const { good } = this.state;
    return Math.round((good / this.total()) * 100);
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Feedback
          title="Please leave feedback"
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.total()}
          positive={this.positive()}
        />
      </div>
    );
  }
}

export default App;
