import {
  LocationWeather,
  LocationWeatherNEWAPI,
} from '../models/LocationWeather';

import { WeatherRequest } from '../models/WeatherRequest';
import axios from 'axios';
import { parseLocation } from './LocationParser';

async function getWeatherData(
  request: WeatherRequest
): Promise<LocationWeather | LocationWeatherNEWAPI> {
  const { data } = await axios.get<LocationWeather | LocationWeatherNEWAPI>(
    `/api/weather?city=${request.city}&country=${request.country}`
  );
  if (Array.isArray(data.weatherDetails)) {
    return data;
  } else if (Array.isArray(data.weatherDetails.Weather)) {
    return {
      ...data,
      weatherDetails: data.weatherDetails.Weather.map((details) => ({
        ...details,
        averageTemperature: details.average_temperature,
      })),
    } as LocationWeather;
  } else {
    throw new Error(
      `Cannot fetch weather data for provided location: ${request.city}, ${request.country}. Unknown data format.`
    );
  }
}

export async function fetchWeather(
  locationQuery: string
): Promise<LocationWeather | null> {
  const request = parseLocation(locationQuery);

  if (!request) {
    return null;
  }

  try {
    return await getWeatherData({
      city: request.city,
      country: request.country,
    });
  } catch {
    throw new Error(
      `Cannot fetch weather data for provided location: ${request.city}, ${request.country}`
    );
  }
}
