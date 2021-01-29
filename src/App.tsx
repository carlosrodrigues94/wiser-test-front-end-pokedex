import React, { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import useThemeStorage from "./hooks/useThemeStorage";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";

import darkTheme from "./styles/themes/dark";
import lightTheme from "./styles/themes/light";

const App: React.FC = () => {
  const [theme, setTheme] = useThemeStorage<DefaultTheme>("theme", darkTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  }, [setTheme, theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
