import PropTypes from 'prop-types';

import firstUppercase from '../../commons/firstUpp';

function Statistics({state}) {
    const arrItems = Object.keys(state);

    return (
        <>
            <h3>Statistics</h3>
            <ul>
                {arrItems.map(item => (
                    <li key={item}>{firstUppercase(item)}: {state[item]}</li>
                ))}
            </ul>
        </>
    );
}

Statistics.propTypes = {
    state: PropTypes.objectOf(PropTypes.number.isRequired).isRequired
};

export default Statistics;