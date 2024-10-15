// GOT THIS FROM CHATGPT
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

// Initialize dayjs with timezone support
dayjs.extend(utc);
dayjs.extend(timezone);

export function processWeatherData(weatherData) {
  if (!weatherData) return;
  // Create an object to group by date
  const groupedData = {};

  // Helper function to get the most common element in an array
  function getMostCommon(arr) {
    return arr.sort(
      (a, b) =>
        arr.filter(v => v === a).length - arr.filter(v => v === b).length
    ).pop();
  }

  // Iterate over the weather data to group it by day
  weatherData.forEach(entry => {
    const date = dayjs.unix(entry.dt).tz(dayjs.tz.guess()).format('YYYY-MM-DD');

    if (!groupedData[date]) {
      groupedData[date] = {
        maxTemp: entry.main.temp,
        minTemp: entry.main.temp,
        icons: [entry.weather[0].icon],
        descriptions: [entry.weather[0].description]
      };
    } else {
      groupedData[date].maxTemp = Math.max(groupedData[date].maxTemp, entry.main.temp);
      groupedData[date].minTemp = Math.min(groupedData[date].minTemp, entry.main.temp);
      groupedData[date].icons.push(entry.weather[0].icon);
      groupedData[date].descriptions.push(entry.weather[0].description);
    }
  });

  // Transform grouped data into the final format
  const result = Object.keys(groupedData).map(date => {
    const dayData = groupedData[date];
    return {
      date: date,
      maxTemp: dayData.maxTemp,
      minTemp: dayData.minTemp,
      mostCommonIcon: getMostCommon(dayData.icons),
      mostCommonDescription: getMostCommon(dayData.descriptions)
    };
  });

  return result;
}
