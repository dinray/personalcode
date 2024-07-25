import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WeatherDetails from '../components/WeatherDetails';
import TodayForecast from '../components/TodayForecast';
import SevenDayForecast from '../components/SevenDayForecast';
import Footer from '../components/Footer';
import { useTheme } from '@mui/material/styles';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState();
  const theme = useTheme();
  const getWeatherApi = async (city: string) => {
    try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3232c166ecbe3eab6cef2124ba286e33`
    console.log('url=',url)
    const response = await fetch(url);
    const result = await response.json();
    setWeatherData(result)
    }
    catch(error){

    }
  }

  useEffect(() => {
    getWeatherApi('Delhi')
  }, [])
  console.log('weatherData=',weatherData)
  const styles = {
    themeColor: {
      backgroundColor: '#1E2A38', // Dark Blue Background
      color: '#FFFFFF', // White Text
      minHeight: '100vh',
    },
    mainGrid: {
      padding: '30px 20px 20px 30px',
    },
    sidebar: {
      backgroundColor: '#1E2A38', // Ensure Sidebar has the same dark background
    },
  };

  return (
    <Grid container sx={styles.themeColor}>
      <Grid item xs={2} sx={styles.sidebar}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
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
