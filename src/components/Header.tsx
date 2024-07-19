// src/components/Header.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'rgb(19 21 22 / 81%)' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Search for cities</Typography>
        </Box>
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <SearchIcon />
          <InputBase
            placeholder="Search for cities…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ ml: 1, flex: 1, color: 'inherit' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
