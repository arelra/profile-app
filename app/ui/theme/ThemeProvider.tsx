import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
// @ts-ignore
import theme from "@rebass/preset";

interface Props {
  children?: React.ReactNode,
}

const ThemeProvider = ({children}: Props) => (
  <EmotionThemeProvider theme={theme}>
    {children}
  </EmotionThemeProvider>
);

export default ThemeProvider;
