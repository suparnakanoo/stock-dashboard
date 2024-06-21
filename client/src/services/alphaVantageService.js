import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

const alphaVantageService = axios.create({
    baseURL: BASE_URL,
});

//Fetching news sentiment
export const getNewSentiment = async () => {
    try {
      const response = await alphaVantageService.get('', {
        params: {
          function: 'NEWS_SENTIMENT',
          sort:'LATEST' ,
          apikey: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching treasury yield data', error);
      throw error;
    }
  };

export const getCrudeOilData = async () => {
    try {
        const response = await alphaVantageService.get('', {
            params: {
                function: 'BRENT',
                interval: 'daily',
                apikey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching stock data', error);
        throw error;
    }
  };

  export const getTreasuryYieldData = async (maturity = '10year', interval = 'monthly') => {
    try {
      const response = await alphaVantageService.get('', {
        params: {
          function: 'TREASURY_YIELD',
          maturity: maturity,
          interval: interval,
          apikey: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching treasury yield data', error);
      throw error;
    }
  };


export default alphaVantageService;