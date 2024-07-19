import React from 'react';
import { Box, Typography } from '@mui/material';

const TodayForecast: React.FC = () => {
  const hourlyData = [
    { time: '6:00 AM', temp: '25°', icon: '🌥' },
    { time: '9:00 AM', temp: '28°', icon: '🌤' },
    { time: '12:00 PM', temp: '33°', icon: '☀️' },
    { time: '3:00 PM', temp: '34°', icon: '☀️' },
    { time: '6:00 PM', temp: '32°', icon: '☀️' },
    { time: '9:00 PM', temp: '30°', icon: '🌥' },
  ];

  return (
    <Box>
      <Typography variant="h5">Today's Forecast</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
        {hourlyData.map((data, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <Typography variant="body2">{data.time}</Typography>
            <Typography variant="h6">{data.icon}</Typography>
            <Typography variant="body1">{data.temp}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TodayForecast;
