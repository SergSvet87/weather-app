const API_URI = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = "a74fe2d50cd2a4989c9a6b0bda0a1dd9";

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_URI}weather?q=${city}&appid=${API_KEY}&lang=ua`
    );

    if (!response.ok) {
      throw new Error("Ошибка запроса :(");
    }

    const data = await response.json();

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await fetch(
      `${API_URI}forecast?q=${city}&appid=${API_KEY}&lang=ua`
    );

    if (!response.ok) {
      throw new Error("Ошибка запроса :(");
    }

    const data = await response.json();

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};
