import "./TextPillWithIcon.css";
import PropTypes from "prop-types";

const TextPillWithIcon = ({ icon, text, bgColor, borderColor }) => {
  return (
    <div
      className="textPillWithIcon"
      style={{
        background: bgColor ? `${bgColor}` : "#f9f9f9",
        border: borderColor ? `1px solid ${borderColor}` : "1px solid #000",
      }}
    >
      {icon && <img src={icon} alt={text} />}
      <span>{text}</span>
    </div>
  );
};

TextPillWithIcon.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
};

export default TextPillWithIcon;
