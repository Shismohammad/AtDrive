import { use, useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [temperature, setTemperature] = useState(0);

  const fetchTemperature = async () => {
    try {
      axios
        .get(
          'https://api.open-meteo.com/v1/forecast?latitude=16.6956&longitude=74.2317&current_weather=true',
        )
        .then((response) => {
          setTemperature(response.data.current_weather.temperature);
        })
        .catch((error) => {
          console.error('Error fetching temperature:', error);
        });
    } catch (error) {
      console.error('Error fetching temperature:', error);
    }
  };

  useEffect(() => {
    fetchTemperature();
  }, []);

  return (
    <div style={{ marginTop: '150px' }}>
      <h1>AtDrive Coding Assessment</h1>
      <div className="card">
        <h2>Current Temperature of Kolhapur: {temperature}°C</h2>
        <h5>Data is fetched from the Open-Meteo open-source weather API</h5>
      </div>
    </div>
  );
}
