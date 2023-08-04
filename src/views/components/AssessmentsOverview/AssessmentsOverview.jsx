import "./AssessmentsOverview.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
import PropTypes from "prop-types";
import TotalAssessment from "../../../assets/icons/total_assessment.svg";
import Candidates from "../../../assets/icons/candidates.svg";
import CandidatesSource from "../../../assets/icons/candidate_source.svg";
import TotalPurpose from "../../../assets/icons/total_purpose.svg";
import DividerY from "../../../components/Divider/DividerY";

const AssessmentsOverview = ({ showMobileCharts }) => {
  const isMobile = useMediaQuery("(max-width: 550px)");

  return (
    <>
      <h2 className="assessment-overview-title">Assessments Overview</h2>
      <motion.div
        initial={{
          height: isMobile ? 0 : "auto",
          opacity: isMobile ? 0 : 1,
        }}
        animate={{
          height: isMobile ? (showMobileCharts ? "auto" : 0) : "auto",
          opacity: isMobile ? (showMobileCharts ? 1 : 0) : 1,
        }}
        exit={{ height: isMobile ? 0 : "auto", opacity: isMobile ? 0 : 1 }}
        transition={{ duration: isMobile ? 0.5 : 0, ease: "easeInOut" }}
        style={{
          overflow: isMobile ? "hidden" : "auto",
        }}
      >
        <div className="assessment-overview-container">
          <div className="assessment-overview-child aoc-1">
            <h3>Total Assessment</h3>
            <TotalDesign icon={TotalAssessment} text="34" />
          </div>

          <div className="assessment-overview-child aoc-2">
            <h3>Candidates</h3>
            <div className="ao-child-20">
              <AoIcon icon={Candidates} />
              <AoMetaInfo
                metaMain="11,145"
                metaExtra="+89"
                metaSubtitle="Total Candidate"
              />
              <DividerY length="50px" />
              <AoMetaInfo
                metaMain="114"
                metaExtra="+89"
                metaSubtitle="Who Attempted"
              />
            </div>
          </div>

          <div className="assessment-overview-child aoc-3">
            <h3>Candidates Source</h3>
            <div className="ao-child-20">
              <AoIcon icon={CandidatesSource} />
              <AoMetaInfo
                metaMain="11,000"
                metaExtra="+89"
                metaSubtitle="Email"
              />
              <DividerY length="50px" />
              <AoMetaInfo
                metaMain="145"
                metaExtra="+89"
                metaSubtitle="Social Share"
              />
              <DividerY length="50px" />
              <AoMetaInfo
                metaMain="145"
                metaExtra="+89"
                metaSubtitle="Unique Link"
              />
            </div>
          </div>

          <div className="assessment-overview-child aoc-4">
            <h3>Total Purpose</h3>
            <TotalDesign icon={TotalPurpose} text="11" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

AssessmentsOverview.propTypes = {
  showMobileCharts: PropTypes.bool,
};

export default AssessmentsOverview;

// eslint-disable-next-line react/prop-types
function TotalDesign({ icon, text }) {
  return (
    <div className="ao-child-10">
      <div className="icon-bg">
        <img src={icon} alt="" />
      </div>
      <div>{text}</div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function AoIcon({ icon }) {
  return (
    <div className="icon-bg">
      <img src={icon} alt="icon" />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function AoMetaInfo({ metaMain, metaExtra, metaSubtitle }) {
  return (
    <div className="ao-meta-info">
      <div className="flex-row">
        <div className="meta-main">{metaMain}</div>
        <div className="meta-extra">{metaExtra}</div>
      </div>
      <div className="meta-subtitle">{metaSubtitle}</div>
    </div>
  );
}
