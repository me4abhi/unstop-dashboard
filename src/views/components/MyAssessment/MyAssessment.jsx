import "./MyAssessment.css";
import PropTypes from "prop-types";
import SearchIcon from "../../../assets/icons/search.svg";
import FilterIcon from "../../../assets/icons/filter.svg";
import ChartsIcon from "../../../assets/icons/charts.svg";
import AddNewCard from "../../../components/AddNewCard/AddNewCard";
import AssessmentCard from "../../../components/AssessmentCard/AssessmentCard";

const MyAssessment = ({
  assessmentCardsData,
  setShowModal,
  setShowMobileCharts,
}) => {
  // function => toggle assessment-chart view on mobile-device
  const toggleShowMobileCharts = () => {
    setShowMobileCharts((prev) => !prev);
  };

  return (
    <>
      <div className="myAssessmentHeader">
        <h2>My Assessment</h2>
        <div className="utilityIcons">
          <img src={SearchIcon} alt="search" />
          <img src={FilterIcon} alt="filter" />
          <img src={ChartsIcon} alt="charts" onClick={toggleShowMobileCharts} />
        </div>
      </div>

      <div className="myAssessment">
        <AddNewCard
          title="New Assessment"
          description="From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!"
          setShowModal={setShowModal}
        />

        {/* adding assessment-cards only when existing  */}
        {assessmentCardsData &&
          assessmentCardsData.map((assessment) => (
            <AssessmentCard
              key={assessment.id}
              title={assessment.title}
              type={assessment.type}
              date={assessment.date}
              duration={assessment.duration}
              questions={assessment.questions}
            />
          ))}
      </div>
    </>
  );
};

MyAssessment.propTypes = {
  assessmentCardsData: PropTypes.array,
  setShowModal: PropTypes.func,
  setShowMobileCharts: PropTypes.func,
};

export default MyAssessment;
