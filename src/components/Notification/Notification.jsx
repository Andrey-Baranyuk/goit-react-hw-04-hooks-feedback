import PropTypes from 'prop-types';

function Notification({ massage }) {
    return <p>{massage }</p>
};

Notification.propTypes = {
    massage: PropTypes.string.isRequired
};

export default Notification;

