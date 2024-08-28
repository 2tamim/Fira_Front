import axios from 'axios';
import { HOST_API } from '../config';

const API_URL = `${HOST_API}api`;
const JWT_TOKEN = window.localStorage.getItem('access');

const getAlltask = async() => {
    try {
        const response = await axios.get(`${API_URL}/task/kanban/`, {
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

const getTaskDetials = async(taskId) => {
    try {
        const response = await axios.get(`${API_URL}/task/${taskId}/`, {
            headers: {
            Authorization: `Bearer ${JWT_TOKEN}`,
            },
        });

        // Access the data from the response
        const data = response.data;

        // Process the data as needed
        console.log('Data Detials from API:', data);

        return data;
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        throw error;
    }
};

const getTaskComments = async(taskId) => {
    try {
        const response = await axios.get(`${API_URL}/task/${taskId}/comment/`, {
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

const getTaskAttachments = async(taskId) => {
    try {
        const response = await axios.get(`${API_URL}/task/${taskId}/attachment/`, {
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

const getChildrenTask = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/children/`, {
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

const getChildrenKanban = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/task/kanban/?user=${userId}`, {
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

const createTaskKanban = async (formData) => {
    try {
        await axios.post(`${API_URL}/task/`, formData, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWT_TOKEN}`,
            },
      });
  
      console.log('Task created successfully');
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      console.log(formData);
      throw error;
    }
  };  

const changeProgressTask = async (taskId, progressValue) => {
  try {
    await axios.put(`${API_URL}/task/progress/${taskId}/`, {
      progress: progressValue,
    }, {
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
    });

    console.log('progress update');
  } catch (error) {
    console.error('Error in progress update:', error);
    throw error;
  }
};  

const confirmTaskKanban = async (taskId, scoreValue) => {
  try {
    await axios.put(`${API_URL}/task/${taskId}/confirm/`, {
      score: scoreValue,
    }, {
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
    });

    console.log('score submit');
  } catch (error) {
    console.error('Error in score submit:', error);
    throw error;
  }
};


export { getAlltask, getTaskDetials, getTaskComments, getTaskAttachments, getChildrenTask, getChildrenKanban, createTaskKanban, changeProgressTask, confirmTaskKanban };