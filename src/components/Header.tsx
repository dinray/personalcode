import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
  const theme = useTheme();

  const styles = {
    appBar: {
      backgroundColor: 'rgba(19, 21, 22, 0.81)', // Dark background with transparency
      padding: '10px 20px',
    },
    searchBox: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
      display: 'flex',
      alignItems: 'center',
      padding: '2px 10px',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  };

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">WeatherApp</Typography>
        </Box>
        <Box sx={styles.searchBox}>
          <SearchIcon sx={styles.searchIcon} />
          <InputBase
            placeholder="Search for cities…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ ...styles.inputRoot, ...styles.inputInput }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
