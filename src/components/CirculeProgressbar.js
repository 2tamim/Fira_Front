import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

// import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";

function CircularProgressWithLabel({ value, progressStyle, labelStyle }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', marginLeft: '9rem', ...progressStyle }}>

      {/* <CircularProgress className="bottom-circle" variant="determinate" value={100} thickness={4} sx={{position: 'relative' , color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 400 : 1000],}} /> */}
      <CircularProgress className="bottom-circle" variant="determinate" value={100} thickness={6} sx={{ progressStyle ,position: 'absolute' , color: '#e0e0e0'}} size={15} />
      <CircularProgress className='top-circle' variant="determinate" value={value} thickness={5} sx={{ progressStyle ,position: 'relative' , mt:0 , pt:0}} size={15} />
      
      

      {/* <ProgressBarComponent id="circular-container" type="Circular" height="160px" value={100} animation={{
        enable: true,
        duration: 2000,
        delay: 0
      }}>
      </ProgressBarComponent> */}


      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
        }}
      >

        <Typography variant="caption" component="div" color="text.secondary" sx={{ labelStyle, marginRight: '1.5rem', fontWeight: 'bold', fontSize: '13px' }} >
          {`${Math.round(value)}%`}
        </Typography>
        {/* <img src="/icons/kara/low.svg" alt="mySvgImage" style={{ height: '5%', width: '5%'}} /> */}

      </Box>


    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  progressStyle: PropTypes.object, // Allow style prop for CircularProgress
  labelStyle: PropTypes.object, // Allow style prop for Typography
};

export default CircularProgressWithLabel;
