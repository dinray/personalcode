import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TodayForecast: React.FC = () => {
  const theme = useTheme();
  
  const hourlyData = [
    { time: '6:00 AM', temp: '25°', icon: '🌥' },
    { time: '9:00 AM', temp: '28°', icon: '🌤' },
    { time: '12:00 PM', temp: '33°', icon: '☀️' },
    { time: '3:00 PM', temp: '34°', icon: '☀️' },
    { time: '6:00 PM', temp: '32°', icon: '☀️' },
    { time: '9:00 PM', temp: '30°', icon: '🌥' },
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
    forecastItem: {
      textAlign: 'center',
    },
    time: {
      color: '#BCC5D3', // Light Gray for time
    },
    temp: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h5" sx={styles.title}>Today's Forecast</Typography>
      <Grid container spacing={2}>
        {hourlyData.map((data, index) => (
          <Grid item xs={12} sm={4} md={2} key={index} sx={styles.forecastItem}>
            <Typography variant="body2" sx={styles.time}>{data.time}</Typography>
            <Typography variant="h6">{data.icon}</Typography>
            <Typography sx={styles.temp}>{data.temp}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TodayForecast;
