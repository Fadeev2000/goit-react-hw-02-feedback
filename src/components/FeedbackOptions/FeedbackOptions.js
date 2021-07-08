import PropTypes from 'prop-types';
import firstUppercase from '../../commons/firstUpp';

function FeedbackOptions({options, onLeaveFeedback}) {
    const arrButtons = Object.keys(options);
    
    return (
        <>
            {arrButtons.map(button => (
                <button type="button" key={button} onClick={() => onLeaveFeedback(button)}>{firstUppercase(button)}</button>
            ))}
        </>
    );
}
 
FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;