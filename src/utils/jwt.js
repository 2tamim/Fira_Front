import jwtDecode from 'jwt-decode';
//
import axios from './axios';

// ----------------------------------------------------------------------

const isValidToken = (access) => {
  if (!access) {
    return false;
  }

  // ----------------------------------------------------------------------

  const decoded = jwtDecode(access);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp) => {
  let expiredTimer;

  window.clearTimeout(expiredTimer);
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;

  expiredTimer = window.setTimeout(() => {
    // Check if the Notification API is supported
    if ('Notification' in window) {
      // Request permission to show notifications
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // Create and show the notification
          const notification = new Notification('Token Expired', {
            body: 'Your session has expired. Please log in again.',
          });

          // You can also add an event listener to handle clicks on the notification
          notification.addEventListener('click', () => {
            // Handle click event (e.g., redirect to login page)
          });
        }
      });
    }

    console.log('expired');
    // You can do whatever else you want here
  }, timeLeft);
};


// ----------------------------------------------------------------------

const setSession = (access) => {
  if (access) {
    localStorage.setItem('access', access);
    axios.defaults.headers.common.Authorization = `Bearer ${access}`;
    // This function below will handle when token is expired
    const { exp } = jwtDecode(access);
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem('access');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
