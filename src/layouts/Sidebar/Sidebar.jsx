import "./Sidebar.css";
import PropTypes from "prop-types";
import Cross from "../../assets/icons/cross.svg";
import DashboardIcon from "../../assets/icons/dashboard.svg";
import NoteAltIcon from "../../assets/icons/note_alt.svg";
import MyLibraryIcon from "../../assets/icons/my_library.svg";
import RoundStatusIcon from "../../assets/icons/admin_meds.svg";
import IconWithTitle from "../../components/IconWithTitle/IconWithTitle";
import TextPillWithIcon from "../../components/TextPillWithIcon/TextPillWithIcon";
import DividerX from "../../components/Divider/DividerX";

const Sidebar = ({ showMobileMenu, setShowMobileMenu }) => {
  const sidebarIcons = [
    {
      id: 1,
      icon: DashboardIcon,
      title: "Dashboard",
    },
    { id: 2, icon: NoteAltIcon, title: "Assessment" },
    { id: 3, icon: MyLibraryIcon, title: "My Library" },
  ];

  return (
    <div
      className={showMobileMenu ? "sidebar showSidebar" : "sidebar hideSidebar"}
    >
      {showMobileMenu && (
        <div className="sidebarMobileHeader">
          <h2>Menu</h2>
          <img
            src={Cross}
            alt="close menu"
            className="clickable"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
      )}

      {/* Sidebar Navigation Icons */}
      <div className="navMenu">
        {sidebarIcons.map((element) => {
          return (
            <a key={element.id}>
              <IconWithTitle icon={element.icon} title={element.title} />
            </a>
          );
        })}
      </div>

      {/* Horizontal Divider */}
      <DividerX length="100%" borderStyle="2px dotted #bacbd5" />

      {/* Admin Info */}
      <div className="adminInfo">
        <TextPillWithIcon
          text="Admin"
          bgColor="#fbebea"
          borderColor="#d63500"
        />
        <a>
          <IconWithTitle icon={RoundStatusIcon} title="Round Status" />
        </a>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  showMobileMenu: PropTypes.bool,
  setShowMobileMenu: PropTypes.func,
};

export default Sidebar;
