import axios from 'axios';
import { HOST_API } from '../config';

const API_URL = `${HOST_API}/api/user/notification`;
const JWT_TOKEN = window.localStorage.getItem('access');

const getCountNoti = async() => {
    try {
        const response = await axios.get(`${API_URL}/count/`, {
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


const getAllNoti = async() => {
    try {
        const response = await axios.get(`${API_URL}/`, {
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

// const markFeedbackAsSeen = async (feedbackId) => {
//     try {
//       await axios.put(`${API_URL}/feedback/${feedbackId}/seen/`, {
//         seen: true,
//       }, {
//         headers: {
//           Authorization: `Bearer ${JWT_TOKEN}`,
//         },
//       });

//       console.log('Feedback marked as seen successfully');
//     } catch (error) {
//       console.error('Error marking feedback as seen:', error);
//       throw error;
//     }
//   };


export { getCountNoti, getAllNoti };