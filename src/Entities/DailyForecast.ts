export default interface DailyForcastResponse {
  units: string;
  daily: Daily;
}

interface Daily {
  data: Data[];
}

interface Data {
  day: string;
  icon: number;
  temperature_min: number;
  temperature_max: number;
  precipitation: Precipitation;
}

interface Precipitation {
  total: number;
}
