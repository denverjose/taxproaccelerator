import { WeatherDisplayProps } from "../interfaces/weather";

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  if (!weather) {
    return null;
  }
  return (
    <>
      <h3 className="text-xl md:text-3xl">
        Weather in {weather?.name} is{" "}
        <span className="font-bold">{weather?.main.temp}°F</span>
      </h3>
    </>
  );
};

export default WeatherDisplay;
