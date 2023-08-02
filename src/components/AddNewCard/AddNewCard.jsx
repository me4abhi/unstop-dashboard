import "./AddNewCard.css";
import PropTypes from "prop-types";
import AddIcon from "../../assets/icons/add.svg";

const AddNewCard = ({ title, description, setShowModal }) => {
  return (
    <div className="addNewCard">
      <div className="titleWithIcon">
        <img
          src={AddIcon}
          alt={title}
          className="clickable"
          onClick={() => setShowModal(true)}
        />
        <h2>{title}</h2>
      </div>
      {description && <div className="cardDescription">{description}</div>}
    </div>
  );
};

AddNewCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  setShowModal: PropTypes.func,
};

export default AddNewCard;
