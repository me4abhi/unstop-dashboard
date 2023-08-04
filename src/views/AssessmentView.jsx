import "./css/AssessmentView.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Header from "../layouts/Header/Header";
import AssessmentsOverview from "./components/AssessmentsOverview/AssessmentsOverview";
import MyAssessment from "./components/MyAssessment/MyAssessment";

/*
  Sub-Components:
    1. AssessmentOverview
    2. MyAssessment
*/

const AssessmentView = ({ setShowModal, setShowMobileMenu }) => {
  // state => show/hide [mobile-device]-dataChart
  const [showMobileCharts, setShowMobileCharts] = useState(false);

  // setting device-type => mobile || not_mobile
  const isMobile = useMediaQuery("(max-width: 550px)");

  // assessment-view => header/navigation_items
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

  // [component]-MyAssessment =>  existing assessment cards data
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
      <div
        className="assessment-container"
        style={{
          paddingTop: isMobile ? (showMobileCharts ? "20px" : 0) : "20px",
        }}
      >
        <AssessmentsOverview
          isMobile={isMobile}
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
