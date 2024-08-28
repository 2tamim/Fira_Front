import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { HOST_API } from '../config';
// hooks
import useAuth from '../hooks/useAuth';

const API_URL = `${HOST_API}/api/user`;
const JWT_TOKEN = window.localStorage.getItem('access'); 

const ServerTimeComponent = ({ isLight }) => {
  const { logout } = useAuth();
  const [serverTime, setServerTime] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 1;

  useEffect(() => {
    const fetchServerTime = async () => {
      try {
        const response = await axios.get(`${API_URL}/get_server_time/`, {
          headers: {
            Authorization: `Bearer ${JWT_TOKEN}`,
          },
        });
        setServerTime(response.data.server_time);
        setRetryCount(0);
      } catch (error) {
        if (retryCount < maxRetries) {
          setRetryCount(retryCount + 1);
          return;
        }

        setError('مشکل در برقراری ارتباط با سرور');
        console.error('Error fetching server time:', error);

        if (error.response && error.response.status === 401) {
          setRetryCount(retryCount + 1);
          return;
        }

        await logout();
        // navigateToLogin();
      } finally {
        setLoading(false);
      }
    };

    fetchServerTime();

    const intervalId = setInterval(fetchServerTime, 1000);

    return () => clearInterval(intervalId);
  }, [retryCount, logout]);

  return (
    <>
      {loading && <Typography>Loading server time...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {!loading && !error && (
        <Typography variant="body1" color={isLight ? 'text.primary' : 'text.secondary'}>{serverTime}</Typography>
      )}
    </>
  );
};

export default ServerTimeComponent;


