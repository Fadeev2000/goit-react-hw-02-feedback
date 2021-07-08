//import logo from './logo.svg';
//import Feedback from './components/Feedback';

import './App.css';

import { Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  incrementState = button => {
        this.setState(prevState => (
            { [button]: prevState[button] + 1 }
        ))
  };
  
  countTotalFeedback = () => {
        const arrNumFeedback = Object.values(this.state);

        return arrNumFeedback.reduce((sum, current) => (sum + current));
  };
  
  countPositiveFeedbackPercentage = () => (
        Math.floor(100 * this.state.good / this.countTotalFeedback())
  );

  render() {
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.incrementState} />
        </Section>
        
        <Section title="Statistics">
          <Statistics
            state={this.state}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  };
}
  
export default App;
