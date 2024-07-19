import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home'; // Adjust the path as needed
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
