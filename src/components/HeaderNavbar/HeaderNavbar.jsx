import "./HeaderNavbar.css";
import PropTypes from "prop-types";

const HeaderNavbar = ({ headerNavItems }) => {
  return (
    <div className="header-navbar">
      {headerNavItems &&
        headerNavItems.map((item) => {
          return (
            <a key={item.id} href={item.link}>
              {item.title}
            </a>
          );
        })}
    </div>
  );
};

HeaderNavbar.propTypes = {
  headerNavItems: PropTypes.array,
};

export default HeaderNavbar;
