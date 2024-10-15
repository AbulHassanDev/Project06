import PropTypes from 'prop-types';

const Input = ({ label, type, placeholder, error, ...rest }) => (
  <div className="mb-4">
    {/* Label for the input */}
    <label className="block text-gray-700 mb-1">{label}</label>

    {/* Render either a text input or textarea based on 'type' */}
    {type === 'textarea' ? (
      <textarea
        className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={placeholder}
        {...rest}
      ></textarea>
    ) : (
      <input
        type={type}
        className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={placeholder}
        {...rest}
      />
    )}

    {/* Error message display */}
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

// Define PropTypes for validation
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, // e.g., "text", "textarea"
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

// Set default props (optional)
Input.defaultProps = {
  placeholder: '',
  error: null,
};

export default Input;
