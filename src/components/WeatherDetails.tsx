import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GrainIcon from '@mui/icons-material/Grain';
import AirIcon from '@mui/icons-material/Air';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WavesIcon from '@mui/icons-material/Waves';

const WeatherDetails: React.FC = () => {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#1E2A38', // Dark Blue Background
      color: '#FFFFFF', // White Text
      borderRadius: '10px',
      textAlign: 'center',
    },
    mainTemp: {
      fontSize: '5rem',
      fontWeight: 'bold',
    },
    subtitle: {
      color: '#BCC5D3', // Light Gray for subtitles
    },
    detailBox: {
      backgroundColor: '#2D3A48', // Slightly lighter dark background for boxes
      padding: '20px',
      borderRadius: '8px',
      margin: '10px',
      textAlign: 'center',
      color: '#FFFFFF', // Ensure text is white
    },
    detailTitle: {
      color: '#BCC5D3', // Light gray for detail titles
      marginBottom: '10px',
    },
    detailValue: {
      color: '#FFFFFF',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    icon: {
      fontSize: '2rem',
      marginBottom: '10px',
      color: '#FFFFFF',
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h3">Madrid</Typography>
      <Typography variant="h5" sx={styles.subtitle}>Chance of rain: 0%</Typography>
      <Typography sx={styles.mainTemp}>31°</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={3}>
          <Box sx={styles.detailBox}>
            <WbSunnyIcon sx={styles.icon} />
            <Typography variant="h6" sx={styles.detailTitle}>Real Feel</Typography>
            <Typography sx={styles.detailValue}>30°</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={styles.detailBox}>
            <GrainIcon sx={styles.icon} />
            <Typography variant="h6" sx={styles.detailTitle}>Chance of rain</Typography>
            <Typography sx={styles.detailValue}>0%</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={styles.detailBox}>
            <AirIcon sx={styles.icon} />
            <Typography variant="h6" sx={styles.detailTitle}>Wind</Typography>
            <Typography sx={styles.detailValue}>0.2 km/h</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={styles.detailBox}>
            <Brightness5Icon sx={styles.icon} />
            <Typography variant="h6" sx={styles.detailTitle}>UV Index</Typography>
            <Typography sx={styles.detailValue}>3</Typography>
          </Box>
        </Grid>
        {/* Additional Weather Icons */}
        <Grid item xs={12} md={3}>
          <Box sx={styles.detailBox}>
            <CloudIcon sx={styles.icon} />
            <Typography variant="h6" sx={styles.detailTitle}>Cloudy</Typography>
            <Typography sx={styles.detailValue}>70%</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={styles.detailBox}>
            <CloudOffIcon sx={styles.icon} />
            <Typography variant="h6" sx={styles.detailTitle}>Partly Cloudy</Typography>
            <Typography sx={styles.detailValue}>50%</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={styles.detailBox}>
            <BeachAccessIcon sx={styles.icon} />
            <Typography variant="h6" sx={styles.detailTitle}>Sunny</Typography>
            <Typography sx={styles.detailValue}>80%</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={styles.detailBox}>
            <WavesIcon sx={styles.icon} />
            <Typography variant="h6" sx={styles.detailTitle}>Windy</Typography>
            <Typography sx={styles.detailValue}>20 km/h</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherDetails;
