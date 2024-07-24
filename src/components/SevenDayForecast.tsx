import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SevenDayForecast: React.FC = () => {
  const theme = useTheme();

  const dailyData = [
    { day: 'Today', condition: 'Sunny', temp: '36/22', icon: '☀️' },
    { day: 'Tue', condition: 'Sunny', temp: '37/21', icon: '☀️' },
    { day: 'Wed', condition: 'Sunny', temp: '37/21', icon: '☀️' },
    { day: 'Thu', condition: 'Cloudy', temp: '37/21', icon: '☁️' },
    { day: 'Fri', condition: 'Cloudy', temp: '37/21', icon: '☁️' },
    { day: 'Sat', condition: 'Rainy', temp: '37/21', icon: '🌧' },
    { day: 'Sun', condition: 'Sunny', temp: '37/21', icon: '☀️' },
  ];

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#1E2A38', // Dark Blue Background
      color: '#FFFFFF', // White Text
      borderRadius: '10px',
    },
    title: {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
    },
    iconAvatar: {
      backgroundColor: '#1E2A38',
      color: '#FFFFFF',
    },
    listItemText: {
      color: '#FFFFFF',
    },
    tempText: {
      color: '#FFFFFF',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    divider: {
      backgroundColor: '#BCC5D3', // Light Gray Divider
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h5" sx={styles.title}>7-Day Forecast</Typography>
      <List>
        {dailyData.map((data, index) => (
          <React.Fragment key={index}>
            <ListItem sx={styles.listItem}>
              <ListItemAvatar>
                <Avatar sx={styles.iconAvatar}>{data.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={data.day} secondary={data.condition} sx={styles.listItemText} />
              <Typography sx={styles.tempText}>{data.temp}</Typography>
            </ListItem>
            {index < dailyData.length - 1 && <Divider sx={styles.divider} />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default SevenDayForecast;
