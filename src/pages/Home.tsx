import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WeatherDetails from '../components/WeatherDetails';
import TodayForecast from '../components/TodayForecast';
import SevenDayForecast from '../components/SevenDayForecast';
import Footer from '../components/Footer';
import { useTheme } from '@mui/material/styles';
import config from '../config';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  visibility: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  dt: number;
  timezone: number;
  id: number;
  cod: number;
}

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const theme = useTheme();

  const getWeatherApi = async (lat: number, lon: number) => {
    try {
      const url = `${config.apiUrl}?lat=${lat}&lon=${lon}&appid=${config.apiKey}`;
      //const url = `${config.apiUrlForRain}?lat=${lat}&lon=${lon}&appid=${config.apiKey}`;
      //console.log('url=', url);
      const response = await fetch(url);
      const result = await response.json();
      setWeatherData(result);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherApi(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          // Fallback to a default location if needed
          getWeatherApi(28.6139, 77.2090); // Coordinates for Delhi
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Fallback to a default location if geolocation is not supported
      getWeatherApi(28.6139, 77.2090); // Coordinates for Delhi
    }
  }, []);

  console.log('Wind=', weatherData);

  const styles = {
    themeColor: {
      backgroundColor: '#1E2A38',
      color: '#FFFFFF',
      minHeight: '100vh',
    },
    mainGrid: {
      padding: '30px 20px 20px 30px',
    },
    sidebar: {
      backgroundColor: '#1E2A38',
    },
  };

  const convertKelvinToCelsius = (kelvin: number): number => {
    return Math.trunc(kelvin - 273.15);
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
            <WeatherDetails
              dataLocation={weatherData?.name}
              temperature={weatherData ? convertKelvinToCelsius(weatherData.main.temp) : undefined}
              windSpeed={weatherData?.wind?.speed}
              realFeel={weatherData ? convertKelvinToCelsius(weatherData.main.feels_like) : undefined}
              weatherDescription={weatherData?.weather[0]?.description}
              cloudiness={weatherData?.clouds.all}
            />
          </Grid>
          <Grid item xs={12} md={6}>
          <TodayForecast
             // realFeel={weatherData ? convertKelvinToCelsius(weatherData.main.feels_like) : undefined}
              //rainChance={weatherData?.clouds.all}
              //windSpeed={weatherData?.wind.speed}
              //uvIndex={weatherData?.uvIndex} // This may need adjustment depending on your data source
              //condition={weatherData?.weather[0]?.description}
            />
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
