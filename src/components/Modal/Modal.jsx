import "./Modal.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Cross from "../../assets/icons/cross.svg";
import DividerX from "../Divider/DividerX";

const Modal = ({ modalOpen, onClose, children }) => {
  if (!modalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div
        className={modalOpen ? "modal-container show-modal" : "modal-container"}
        // style={{ top: modalOpen ? "50%" : "200%" }}
      >
        <div className="modal-header">
          <h1>Create new assessment</h1>
          <img
            src={Cross}
            alt="close modal"
            className="modal-close-btn clickable"
            onClick={onClose}
          />
        </div>
        <DividerX length="100%" />
        <div className="modal-content">
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // Render the modal outside the main DOM hierarchy
  );
};

Modal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
