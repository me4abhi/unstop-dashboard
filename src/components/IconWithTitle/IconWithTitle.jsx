import "./IconWithTitle.css";
import PropTypes from "prop-types";

const IconWithTitle = ({ icon, title }) => {
  return (
    <div className="iconWithTitle">
      <img src={icon} />
      <p>{title}</p>
    </div>
  );
};

IconWithTitle.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IconWithTitle;
