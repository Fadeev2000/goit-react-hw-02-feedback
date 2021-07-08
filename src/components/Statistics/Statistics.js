import PropTypes from 'prop-types';

import firstUppercase from '../../commons/firstUpp';

function Statistics({
    state,
    total,
    positivePercentage
}) {
    const arrItems = Object.keys(state);

    return (
        <>
            <ul>
                {arrItems.map(item => (
                    <li key={item}>{firstUppercase(item)}: {state[item]}</li>
                ))}
                <li>Total: {total()}</li>
                <li>Positive feedback: {positivePercentage()}%</li>
            </ul>
        </>
    );
}

Statistics.propTypes = {
    state: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
};

export default Statistics;