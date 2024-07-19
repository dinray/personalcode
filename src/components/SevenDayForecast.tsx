import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const SevenDayForecast: React.FC = () => {

  const dailyData = [
    { day: 'Today', condition: 'Sunny', temp: '36/22', icon: '☀️' },
    { day: 'Tue', condition: 'Sunny', temp: '37/21', icon: '☀️' },
    { day: 'Wed', condition: 'Sunny', temp: '37/21', icon: '☀️' },
    { day: 'Thu', condition: 'Cloudy', temp: '37/21', icon: '☁️' },
    { day: 'Fri', condition: 'Cloudy', temp: '37/21', icon: '☁️' },
    { day: 'Sat', condition: 'Rainy', temp: '37/21', icon: '🌧' },
    { day: 'Sun', condition: 'Sunny', temp: '37/21', icon: '☀️' },
  ];

  return (
    <Box>
      <Typography variant="h5">7-Day Forecast</Typography>
      <List>
        {dailyData.map((data, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{data.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.day} secondary={data.condition} />
            <Typography variant="body1">{data.temp}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SevenDayForecast;
