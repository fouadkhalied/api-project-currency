





import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js with auto-register

const ChartComponent = () => {
  var myData = [];
  let myDays = [];

function buildTimeseriesUrl(apiKey, startDate, endDate,symbol,base) {
  const baseUrl = 'https://api.apilayer.com/exchangerates_data/timeseries';
  // return api url
  return `${baseUrl}?apikey=${apiKey}&start_date=${startDate}&end_date=${endDate}&symbols=${symbol}&base=${base}`;
}

async function getHistoricalRates(apiKey,startDate,endData,symbol,base)
{
  const url = buildTimeseriesUrl(apiKey,startDate,endData,symbol,base);
  try {
    // Process the data
    const response = await fetch(url);
    const data = await response.json();

    // Push data and days
    for(let key in data.rates)
      myData.push(data.rates[key].EUR);
    for(let key in data.rates)
      myDays.push(key.split('-')[2]);
  } catch (error) {
    // Handle errors appropriately 
    console.log('Error fetching data:' , error);
  }
}

function getApiCode() {
    return "X3xvtyyJ1JK6s4ZofvuMXTUhQyXD9zMx";
}

function getStartDate() {
  const today = new Date();
  const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
  return thirtyDaysAgo.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
}

function getEndDate() {
  const today = new Date();
  return today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
}

function getSymbol(symbol) {
   return symbol;
}

function getBase(base) {
  return base;
}
getHistoricalRates(getApiCode(),getStartDate(),getEndDate(),getSymbol("EUR"),getBase("USD"));

const chartData = {
    labels: myDays|| [], // Use provided labels or empty array
    datasets: [
      {
        label: 'USD/EUR LineChart',
        data: myData || [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        pointStyle: 'circle'
      },
    ],
  };
  console.log(myData);
  console.log(myDays);
  return <Line data={chartData} />;
};

export default React.memo(ChartComponent);