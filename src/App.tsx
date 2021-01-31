import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import useThemeStorage from './hooks/useThemeStorage';
import Routes from './routes';
import store from './store';
import { GlobalStyles } from './styles/global';
import darkTheme from './styles/themes/dark';
import lightTheme from './styles/themes/light';

const App: React.FC = () => {
  const [theme, setTheme] = useThemeStorage<DefaultTheme>('theme', darkTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }, [setTheme, theme.title]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer autoClose={4000} />
        <Header toggleTheme={toggleTheme} />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
