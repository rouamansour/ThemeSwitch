import "./App.css";
import ThemeSelector from "./ThemeSelector";
import withTheme from "./withTheme";
import PropTypes from 'prop-types';

const App = ({ theme }) => {
  return (
    <div className="centered-container">
      <div className={theme}>
        <h3>Change Theme</h3>
        <ThemeSelector />
      </div>
    </div>
  );
};
App.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default withTheme(App);
