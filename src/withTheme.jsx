import React from 'react';
import { useTheme } from './useTheme';

export const withTheme = (WrappedComponent) => {
  return (props) => {
    const { theme, updateTheme } = useTheme();

    return (
      <WrappedComponent
        {...props}
        theme={theme}
        updateTheme={updateTheme}
      />
    );
  };
};
