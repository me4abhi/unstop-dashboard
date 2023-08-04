import "./Header.css";
import PropTypes from "prop-types";
import Hamburger from "../../assets/icons/hamburger.svg";
import DividerY from "../../components/Divider/DividerY";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";

const Header = ({ navbarItems, setShowMobileMenu }) => {
  return (
    <div className="header">
      {/* header => menu-icon, page-title */}
      <div className="headerMain">
        <img
          src={Hamburger}
          alt="menu"
          onClick={() => setShowMobileMenu(true)}
        />
        <h1>Assessment</h1>
      </div>
      <DividerY length="80%" thickness="1px" color="#bacbd5" />
      {/* header => navigation-menu */}
      <HeaderNavbar className="headerNavbar" headerNavItems={navbarItems} />
    </div>
  );
};

Header.propTypes = {
  navbarItems: PropTypes.array,
  setShowMobileMenu: PropTypes.func,
};

export default Header;
