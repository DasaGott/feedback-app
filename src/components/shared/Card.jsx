import PropTypes from "prop-types";

//Card takes children of the card component, they are defined in the FeedbackItem
function Card({ children, reverse }) {
  //conditional class // if the card has also reverse bool true, it has reverse class
  return (
    <div
      className={`card ${reverse && "reverse"}`}
    >
      {children}
    </div>
  );
  //there is also possibility to have conditional inline styling as follows:
  //   return (
  //     <div
  //       className="card"
  //       style={{
  //         backgroundColor: reverse
  //           ? "rgba(0,0,0,0.4)"
  //           : "#fff",
  //         color: reverse ? "#fff" : "rgba(0,0,0.4)",
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
