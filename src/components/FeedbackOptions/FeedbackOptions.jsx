import PropTypes from 'prop-types';
import styles from 'components/FeedbackOptions/FeedbackOptions.module.css'

function FeedbackOptions({ options, onLeaveFeedback }){
    return (
        <div>
        {
            options.map(option => (
                <button key={option} onClick={() => onLeaveFeedback(option)} className={styles.btn}>
                    {option}
                </button>
            ))
        }
    </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
