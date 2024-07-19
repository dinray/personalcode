import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WeatherDetails from '../components/WeatherDetails';
import TodayForecast from '../components/TodayForecast';
import SevenDayForecast from '../components/SevenDayForecast';
import Footer from '../components/Footer';
import { useTheme } from '@mui/material/styles';

const Home: React.FC = () => {
  const theme = useTheme();

  const styles = {
    themeColor: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      minHeight: '100vh', // Adjust as needed for full page height
    },
    mainGrid: {
      padding: '30px 20px 20px 30px',
    },
  };

  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10} sx={styles.themeColor}>
        <Header />
        <Grid container spacing={2} sx={styles.mainGrid}>
          <Grid item xs={12}>
            <WeatherDetails />
          </Grid>
          <Grid item xs={12} md={6}>
            <TodayForecast />
          </Grid>
          <Grid item xs={12} md={6}>
            <SevenDayForecast />
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
