import { useState } from "react";
import Sidebar from "./layouts/Sidebar/Sidebar";
import AssessmentView from "./views/AssessmentView";
import ModalView from "./views/ModalView";

function App() {
  // state => show/hide modal
  const [showModal, setShowModal] = useState(false);

  // state => show/hide [mobile-device]-sidebar
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {/* Responsive Sidebar Component */}
      <Sidebar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      {/* Main Content View */}
      <AssessmentView
        showModal={showModal}
        setShowModal={setShowModal}
        setShowMobileMenu={setShowMobileMenu}
      />

      {/* Modal View - Modal is added to DOM using React Portal */}
      <ModalView showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
