import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme'
import { render } from "@testing-library/react";

export const renderComponent = (ui) => {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>,
  );
};
