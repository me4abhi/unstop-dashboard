import PropTypes from "prop-types";
import Form from "../components/Form/Form";
import Modal from "../components/Modal/Modal";
import { AnimatePresence } from "framer-motion";

const ModalView = ({ showModal, setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <Modal modalOpen={showModal} onClose={handleCloseModal}>
          <Form />
        </Modal>
      )}
    </AnimatePresence>
  );
};

ModalView.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ModalView;
