import PropTypes from 'prop-types';

const Button = ({ type = 'button', text, disabled = false }) => (
  <button
    type={type}
    className={`w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-500 transition duration-300 ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    disabled={disabled}
  >
    {text}
  </button>
);

// Define PropTypes for validation
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

// Set default props
Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
