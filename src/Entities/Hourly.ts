export default interface HourlyResponse {
  timezone: string;
  units: string;
  hourly: Data;
}

interface Data {
  data: Props[];
}

interface Props {
  date: string;
  icon: number;
  temperature: number;
  wind: Wind;
  precipitation: Precipitation;
}

interface Precipitation {
  total: number;
}

interface Wind {
  speed: number;
}
