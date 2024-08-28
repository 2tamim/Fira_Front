import { useState } from 'react';
import axios from 'axios';
import {
  Snackbar,
} from '@mui/material';
import { HOST_API } from '../config';

const API_URL = `${HOST_API}api`;
const JWT_TOKEN = window.localStorage.getItem('access');

const useCreateTaskKanban = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

  const createTaskKanban = async (formData) => {
    try {
      await axios.post(`${API_URL}/task/`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT_TOKEN}`,
        },
      });

      console.log('Task created successfully');
      setSnackbarSeverity('info');
      setSnackbarMessage('پیشنهاد کار باموفقیت انجام شد');
      setSnackbarOpen(true);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      // Handle login error, show message, etc.
      setSnackbarSeverity('error');
      setSnackbarMessage(error.response.data);
      setSnackbarOpen(true);
      throw error;
    }
  };


  const addCommentTask = async (taskId, value) => {
    try {
      await axios.post(`${API_URL}/task/${taskId}/comment/`, {
        content: value,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT_TOKEN}`,
        },
      });

      console.log('Comment added successfully');
      setSnackbarSeverity('info');
      setSnackbarMessage('نظر شما ثبت شد');
      setSnackbarOpen(true);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      // Handle login error, show message, etc.
      setSnackbarSeverity('error');
      setSnackbarMessage(error.response.data);
      setSnackbarOpen(true);
      throw error;
    }
  };

  const delCommentTask = async (taskId, comId) => {
    try {
      await axios.delete(`${API_URL}/task/${taskId}/comment/${comId}/`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT_TOKEN}`,
        },
      });

      console.log('comment successfully delete');
      setSnackbarSeverity('info');
      setSnackbarMessage('کامنت مورد نظر پاک شد');
      setSnackbarOpen(true);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      // Handle login error, show message, etc.
      setSnackbarSeverity('error');
      setSnackbarMessage(error.response.data);
      setSnackbarOpen(true);
      throw error;
    }
  };


  const uploadAttachmentTask = async (taskId, formData) => {
    try {
      await axios.post(`${API_URL}/task/${taskId}/attachment/`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT_TOKEN}`,
        },
      });

      console.log('File attached successfully');
      setSnackbarSeverity('info');
      setSnackbarMessage('فایل مورد نظر پیوست شد');
      setSnackbarOpen(true);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      // Handle login error, show message, etc.
      setSnackbarSeverity('error');
      setSnackbarMessage(error.response.data);
      setSnackbarOpen(true);
      throw error;
    }
  };

  const delAttachmentTask = async (taskId, attId) => {
    try {
      await axios.delete(`${API_URL}/task/${taskId}/attachment/${attId}/`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT_TOKEN}`,
        },
      });

      console.log('File deattached successfully');
      setSnackbarSeverity('info');
      setSnackbarMessage('فایل مورد نظر پاک شد');
      setSnackbarOpen(true);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      // Handle login error, show message, etc.
      setSnackbarSeverity('error');
      setSnackbarMessage(error.response.data);
      setSnackbarOpen(true);
      throw error;
    }
  };

  return { createTaskKanban, snackbarOpen, snackbarMessage, snackbarSeverity, setSnackbarOpen, addCommentTask, uploadAttachmentTask, delAttachmentTask, delCommentTask };
};

export default useCreateTaskKanban;