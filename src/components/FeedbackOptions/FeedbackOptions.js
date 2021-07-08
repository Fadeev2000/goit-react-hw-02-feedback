import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import firstUppercase from '../../commons/firstUpp';

function FeedbackOptions({options, onLeaveFeedback}) {
    const arrButtons = Object.keys(options);
    
    return (
        <>
            {arrButtons.map(button => (
                <button className={css.button} type="button" key={button} onClick={() => onLeaveFeedback(button)}>{firstUppercase(button)}</button>
            ))}
        </>
    );
}
 
FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;