import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';

const Sidebar: React.FC = () => {
  const theme = useTheme();

  const styles = {
    container: {
      width: 250,
      backgroundColor: '#131516', // Dark background with some transparency
      height: '250vh',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '20px',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '30px',
    },
    listItem: {
      width: '100%',
    },
    listItemIcon: {
      color: '#FFFFFF',
    },
    listItemText: {
      '& .MuiTypography-root': {
        fontSize: '1.1rem',
      },
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.logo}>WeatherApp</Typography>
      <List>
        <ListItem button sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <UmbrellaIcon />
          </ListItemIcon>
          <ListItemText primary="Weather" sx={styles.listItemText} />
        </ListItem>
        <ListItem button sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <LocationCityIcon />
          </ListItemIcon>
          <ListItemText primary="Cities" sx={styles.listItemText} />
        </ListItem>
        <ListItem button sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Map" sx={styles.listItemText} />
        </ListItem>
        <ListItem button sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={styles.listItemText} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
