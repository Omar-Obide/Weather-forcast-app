export default interface CurrentWeatherResponse {
  units: 'metric' | 'us' | 'uk' | 'ca';
  timezone: string;
  current: Current;
}

interface Current {
  icon_num: number;
  wind: Wind;
  precipitation: Precipitation;
  cloud_cover: number;
  uv_index: number;
  humidity: number;
  visibility: number;
  icon: string;
  summary: string;
  feels_like: number;
  temperature: number;
}

interface Wind {
  speed: number;
  gusts: number;
  angle: number;
  dir: string;
}

interface Precipitation {
  total: number;
  type: string;
}
