import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar: React.FC = () => {
  return (
    <Box sx={{ width: 250, bgcolor: 'rgb(19 21 22 / 81%)', height: '170vh', color: 'white' }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <UmbrellaIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Weather" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocationCityIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Cities" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MapIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Map" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
