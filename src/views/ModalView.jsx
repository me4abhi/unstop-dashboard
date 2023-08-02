import Form from "../components/Form/Form";
import Modal from "../components/Modal/Modal";
import PropTypes from "prop-types";

const ModalView = ({ showModal, setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal modalOpen={showModal} onClose={handleCloseModal}>
      <Form />
    </Modal>
  );
};

ModalView.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ModalView;
