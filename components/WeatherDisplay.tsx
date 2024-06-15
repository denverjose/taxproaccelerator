import { WeatherDisplayProps } from "../interfaces/weather";

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {

  return (
    <div>
      <h3 className="text-4xl">
        Weather in {weather.name} is{" "}
        <span className="font-bold">{weather.main.temp}°F</span>
      </h3>
    </div>
  );
};

export default WeatherDisplay;
