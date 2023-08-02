import "./AssessmentCard.css";
import PropTypes from "prop-types";
import TextPillWithIcon from "../../components/TextPillWithIcon/TextPillWithIcon";
import DividerX from "../../components/Divider/DividerX";
import DividerY from "../../components/Divider/DividerY";
import Briefcase from "../../assets/icons/briefcase.svg";
import ThreeDots from "../../assets/icons/triple_dots.svg";
import UserInitialsIcon from "../../assets/icons/user_circle.svg";
import LinkIcon from "../../assets/icons/link.svg";

const AssessmentCard = ({ title, type, date, duration, questions }) => {
  return (
    <div className="assessmentCard">
      <div className="assessmentCardInfo">
        <div className="assessmentCardInfo-a">
          <div>
            <img src={Briefcase} alt="" />
          </div>
          <div>
            <h2>{title}</h2>
            <div className="flex-row assessmentCardInfo-a-meta">
              <h3>{type}</h3>
              <DividerY length="20px" />
              <p>{date}</p>
            </div>
          </div>
        </div>

        <div className="assessmentCardInfo-b clickable">
          <img src={ThreeDots} alt="assessment options" />
        </div>
      </div>

      <DividerX length="100%" />

      <div className="assessmentCardDetails">
        <div className="assessmentCardDetails-a">
          <div className="flex-col">
            <h2>{duration}</h2>
            <h3>Duration</h3>
          </div>
          <div className="flex-col">
            <h2>{questions}</h2>
            <h3>Questions</h3>
          </div>
        </div>
        <div className="assessmentCardDetails-b clickable">
          <TextPillWithIcon
            icon={LinkIcon}
            text="Share"
            bgColor="#fff"
            borderColor="#1C4980"
          />
          <img src={UserInitialsIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

AssessmentCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  date: PropTypes.string,
  duration: PropTypes.string,
  questions: PropTypes.string,
};

export default AssessmentCard;
