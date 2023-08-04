import { useState } from "react";
import Sidebar from "./layouts/Sidebar/Sidebar";
import AssessmentView from "./views/AssessmentView";
import ModalView from "./views/ModalView";
// import MobileSideMenu from "./components/MobileSideMenu/MobileSideMenu";

function App() {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <Sidebar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <AssessmentView
        showModal={showModal}
        setShowModal={setShowModal}
        setShowMobileMenu={setShowMobileMenu}
      />
      {/* {showModal && ( */}
      <ModalView showModal={showModal} setShowModal={setShowModal} />
      {/* )} */}
    </>
  );
}

export default App;
