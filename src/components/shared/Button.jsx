import PropTypes from "prop-types";
// we will have props passed in for styling and functionalities
// chlidren -  e are gonna be wrapping the component aroud whathever the text of the button
// version - primary, secondary (for class)
// type - if that is submit or regular button
// isDisabled - if the button is disabled or no
function Button({
  children,
  version,
  type,
  isDisabled,
}) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  isDisabled: false,
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;
