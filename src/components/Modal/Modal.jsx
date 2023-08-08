import "./Modal.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Cross from "../../assets/icons/cross.svg";
import DividerX from "../Divider/DividerX";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const useMobileAnimation = () => {
  const isMobile = useMediaQuery("(max-width: 550px)");

  return isMobile
    ? { x: "-50%", y: "0", opacity: 1 }
    : { x: "-50%", y: "-50%", opacity: 1 };
};

const Modal = ({ onClose, children }) => {
  const animationValue = useMobileAnimation();

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <motion.div
        initial={{ x: "-50%", y: "100%" }}
        animate={animationValue}
        exit={{ x: "-50%", y: "100%" }}
        transition={{ delay: 0, type: "tween", duration: 1 }}
        className="modal-container"
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
        <div className="modal-content">{children}</div>
      </motion.div>
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
