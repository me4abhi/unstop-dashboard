import "./css/AssessmentView.css";
import Header from "../layouts/Header/Header";
import AssessmentsOverview from "./components/AssessmentsOverview/AssessmentsOverview";
import MyAssessment from "./components/MyAssessment/MyAssessment";
import PropTypes from "prop-types";
import { useState } from "react";

const AssessmentView = ({ setShowModal, setShowMobileMenu }) => {
  const [showMobileCharts, setShowMobileCharts] = useState(false);

  const assessmentNav = [
    {
      id: 1,
      title: "My Assessments",
      link: "#",
    },
    {
      id: 2,
      title: "Unstop Assessments",
      link: "#",
    },
  ];

  const myAssessment = [
    {
      id: 1,
      title: "Math Assessment",
      type: "Job",
      date: "20 Apr 2023",
      duration: "00",
      questions: "00",
    },
    {
      id: 2,
      title: "Physics Assessment",
      type: "Job",
      date: "21 Apr 2023",
      duration: "00",
      questions: "00",
    },
    {
      id: 3,
      title: "Chemistry Assessment",
      type: "Job",
      date: "22 Apr 2023",
      duration: "00",
      questions: "00",
    },
    {
      id: 4,
      title: "English Assessment",
      type: "Job",
      date: "23 Apr 2023",
      duration: "00",
      questions: "00",
    },
  ];

  return (
    <div className="assessment-view">
      <Header
        navbarItems={assessmentNav}
        setShowMobileMenu={setShowMobileMenu}
      />
      <div className="assessment-container">
        <AssessmentsOverview
          showMobileCharts={showMobileCharts}
          setShowMobileCharts={setShowMobileCharts}
        />
        <MyAssessment
          assessmentCardsData={myAssessment}
          setShowModal={setShowModal}
          setShowMobileCharts={setShowMobileCharts}
        />
      </div>
    </div>
  );
};

AssessmentView.propTypes = {
  setShowModal: PropTypes.func,
  setShowMobileMenu: PropTypes.func,
};

export default AssessmentView;
