import Axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) => {
  let changableUrl = url;
  if (country) changableUrl += "/countries/" + country;
  try {
    const { data } = await Axios.get(changableUrl);
    return {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
  } catch (e) {
    console.log(e);
  }
};
export const fetchDailyData = async () => {
  try {
    const { data } = await Axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => {
      return {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      };
    });
    return modifiedData;
  } catch (e) {}
};
export const fetchcountriesData = async () => {
  try {
    const { data: countries } = await Axios.get(`${url}/countries`);

    return countries.countries.map((country) => {
      return country.name;
    });
  } catch (error) {}
};
