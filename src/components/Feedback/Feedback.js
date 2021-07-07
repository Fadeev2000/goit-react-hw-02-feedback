import { Component } from 'react';

import Statistics from '../Statistics';

import firstUppercase from '../../commons/firstUpp';

class Feedback extends Component {
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
        const arrButtons = Object.keys(this.state);

        return (
            <>
                <h2>Please leave feedback</h2>
                {arrButtons.map(button => (
                    <button key={button} onClick={() => {
                        this.incrementState(button);
                    }}>{firstUppercase(button)}</button>
                ))}

                <Statistics
                    state={this.state}
                    countTotalFeedback={this.countTotalFeedback}
                    countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
                />
            </>
        );
    }
}

export default Feedback;