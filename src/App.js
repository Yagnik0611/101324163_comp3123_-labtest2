import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02d": "/icon/day.svg",
  "02n": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
};

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  padding: 20px 10px;
 
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background:  url("pexels-eberhard-grossgasteiger-1287075.jpg");
  font-family: Montserrat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const AppLabel = styled.span`
  color: white;
  
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b4b7bdf9cb1e34259ab6190e18d354a8`,
    );
    updateWeather(response.data);
  };

  return (<>
    <Container>
      <AppLabel>React Weather App</AppLabel>
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      {weather &&
        <WeatherComponent weather={weather} city={city} />
        }
  
    </Container>
   </>
  );
}

export default App;