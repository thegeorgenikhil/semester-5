import { Navbar } from "../components";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div className="mt-12 mx-8">
      <Navbar />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
