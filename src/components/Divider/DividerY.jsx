import PropTypes from "prop-types";

const DividerY = ({ length, thickness, color }) => {
  return (
    <div
      style={{
        width: thickness ? thickness : "1px",
        height: length,
        backgroundColor: color ? color : "#bacbd5",
      }}
    ></div>
  );
};

DividerY.propTypes = {
  length: PropTypes.string.isRequired,
  thickness: PropTypes.string,
  color: PropTypes.string,
};

export default DividerY;
