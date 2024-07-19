// src/components/common/Footer.tsx

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3 }}>
      <Typography variant="body1" align="center">
        &copy; {new Date().getFullYear()} Weather App. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Built with '}
        <Link color="inherit" href="https://reactjs.org/" target="_blank" rel="noopener">
          React
        </Link>
        {' and '}
        <Link color="inherit" href="https://mui.com/" target="_blank" rel="noopener">
          Material-UI
        </Link>
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
