import { useTheme } from "./useTheme";

const withTheme = (WrappedComponent) => {
  const WithThemeComponent = (props) => {
    const { theme, updateTheme } = useTheme();
    return <WrappedComponent {...props} theme={theme} updateTheme={updateTheme} />;
  };
  return WithThemeComponent;
};

export default withTheme;
