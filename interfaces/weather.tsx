export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}



export interface WeatherDisplayProps {
  weather: WeatherData | null;
}
