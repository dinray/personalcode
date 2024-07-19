import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const WeatherDetails: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3">Madrid</Typography>
      <Typography variant="h5">Chance of rain: 0%</Typography>
      <Typography variant="h2">31°</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6">Real Feel</Typography>
            <Typography variant="h4">30°</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6">Chance of rain</Typography>
            <Typography variant="h4">0%</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6">Wind</Typography>
            <Typography variant="h4">0.2 km/h</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6">UV Index</Typography>
            <Typography variant="h4">3</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherDetails;
