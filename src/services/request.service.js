import axios from 'axios';
import { HOST_API } from '../config';

const API_URL = `${HOST_API}/api/`;
const JWT_TOKEN = window.localStorage.getItem('access');

const getAllrequest = async() => {
    try {
        const response = await axios.get(`${API_URL}/task/request/`, {
            headers: {
                Authorization: `Bearer ${JWT_TOKEN}`,
            },
        });

        // Access the data from the response
        const data = response.data;

        // Process the data as needed
        // console.log('Data from API:', data);

        return data;
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        throw error;
    }
};

export { getAllrequest };