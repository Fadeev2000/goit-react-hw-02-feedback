import PropTypes from 'prop-types';

import firstUppercase from '../../commons/firstUpp';

function Statistics({
    state,
    countTotalFeedback,
    countPositiveFeedbackPercentage
}) {
    const arrItems = Object.keys(state);

    return (
        <>
            <h3>Statistics</h3>
            <ul>
                {arrItems.map(item => (
                    <li key={item}>{firstUppercase(item)}: {state[item]}</li>
                ))}
                <li>Total: {countTotalFeedback()}</li>
                <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
            </ul>
        </>
    );
}

Statistics.propTypes = {
    state: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired
};

export default Statistics;