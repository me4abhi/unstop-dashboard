import PropTypes from "prop-types";

const DividerX = ({ length, borderStyle }) => {
  return (
    <div
      style={{
        width: length,
        borderTop: borderStyle ? borderStyle : "1px solid #bacbd5",
      }}
    ></div>
  );
};

DividerX.propTypes = {
  length: PropTypes.string.isRequired,
  borderStyle: PropTypes.string,
};

export default DividerX;
