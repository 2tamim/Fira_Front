import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import { ReactComponent as LogoSvg } from '../static/kara.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="34.143" height="33.766" viewBox="0 0 34.143 33.766">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" y1="0.667" x2="0.085" y2="0.978" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={PRIMARY_MAIN}/>
            <stop offset="100%" stopColor={PRIMARY_MAIN}/>
          </linearGradient>
          <linearGradient id="linear-gradient-2" x1="0.328" y1="0.665" x2="0.093" y2="0.961" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={PRIMARY_MAIN}/>
            <stop offset="100%" stopColor={PRIMARY_DARK}/>
          </linearGradient>
        </defs>
        <g id="logo_kara2" data-name="logo kara2" transform="translate(5926.032 -13958.382)">
          <path id="Subtraction_35" data-name="Subtraction 35" d="M18.605,33.765H6.86a10.056,10.056,0,0,1-3.43-1.244,7.124,7.124,0,0,1-2.358-2.209A6.916,6.916,0,0,1,0,26.463V7.133A9.494,9.494,0,0,1,.977,3.566,6.49,6.49,0,0,1,3.091,1.114,6.964,6.964,0,0,1,7.081,0V24.939a1.541,1.541,0,0,0,.115.586c.438,1.9,2.554,8.11,11.409,8.238Zm-.188-17.458H13.291a2.032,2.032,0,0,1-2.031-2.028V7.014a9.227,9.227,0,0,1,1.006-3.505A6.485,6.485,0,0,1,14.4,1.1,7.137,7.137,0,0,1,18.417,0v16.3Z" transform="translate(-5926.032 13958.382)" fill="url(#linear-gradient)"/>
          <g id="Group_3428" data-name="Group 3428" transform="translate(-5918.729 13967.654)">
            <path id="Path_3425" data-name="Path 3425" d="M83.843,82V75.732c0-8.8-7.075-10.432-9.249-10.674-.406-.044-1.585-.1-1.994-.1H71.51v7.034h1.636c4.055,0,3.786,3.343,3.786,3.343v5.146a1.69,1.69,0,0,1-1.69,1.69H58.478a1.679,1.679,0,0,1-1.552-.946c.547,2.188,2.694,8.225,11.807,8.225h8.251C84.8,89.453,83.843,82,83.843,82Z" transform="translate(-57.04 -64.96)" fill="url(#linear-gradient-2)"/>
          </g>
        </g>
      </svg>
      {/* <LogoSvg /> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
          />
          <path
            fill="url(#BG2)"
            d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
          />
          <path
            fill="url(#BG3)"
            d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
          />
        </g>
      </svg> */}
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
