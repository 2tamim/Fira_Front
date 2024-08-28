// @mui
import { Card, CardHeader, Typography, Stack, LinearProgress, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../../../utils/formatNumber';
// _mock_
import { _bookingsOverview } from '../../../../_mock';

// ----------------------------------------------------------------------

export default function BookingBookedRoom() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ flexGrow: 1, minWidth: '80px', minHeight:'20px' }}>
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          سجاد قلیان
          {/* {fShortenNumber(author.favourite)} */}
        </Typography>
        <Stack spacing={3} sx={{ mb: 2 }}>
          <LinearProgress
            variant="determinate"
            value={25}
            color={'success'}
            sx={{ height: 8, bgcolor: 'grey.50016' }}
          />
        </Stack>
      </Box>
    </Stack>

    // {/* <Stack direction="row" justifyContent="space-between" sx={{ px: 3, pb: 3 }}>
    //   {_bookingsOverview.map((progress) => (
    //     <Stack key={progress.status} alignItems="center">
    //       <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
    //         <Box
    //           sx={{
    //             width: 12,
    //             height: 12,
    //             borderRadius: 0.5,
    //             bgcolor: 'success.main',
    //             ...(progress.status === 'Pending' && { bgcolor: 'warning.main' }),
    //             ...(progress.status === 'Cancel' && { bgcolor: 'error.main' }),
    //           }}
    //         />
    //         <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
    //           {progress.status}
    //         </Typography>
    //       </Stack>

    //       <Typography variant="h6">{fShortenNumber(progress.quantity)}</Typography>
    //     </Stack>
    //   ))}
    // </Stack> */}
  );
}

// import React, { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Check from '@mui/icons-material/Check';
// import SettingsIcon from '@mui/icons-material/Settings';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import VideoLabelIcon from '@mui/icons-material/VideoLabel';
// import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
//   color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
//   display: 'flex',
//   height: 22,
//   alignItems: 'center',
//   ...(ownerState.active && {
//     color: '#784af4',
//   }),
//   '& .QontoStepIcon-completedIcon': {
//     color: '#784af4',
//     zIndex: 1,
//     fontSize: 18,
//   },
//   '& .QontoStepIcon-circle': {
//     width: 8,
//     height: 8,
//     borderRadius: '50%',
//     backgroundColor: 'currentColor',
//   },
// }));

// function QontoStepIcon(props) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// QontoStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
// };

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 22,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 3,
//     border: 0,
//     backgroundColor:
//       theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderRadius: 1,
//   },
// }));

// const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
//   zIndex: 1,
//   color: '#fff',
//   width: 50,
//   height: 50,
//   display: 'flex',
//   borderRadius: '50%',
//   justifyContent: 'center',
//   alignItems: 'center',
//   ...(ownerState.active && {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//   }),
//   ...(ownerState.completed && {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//   }),
// }));

// function ColorlibStepIcon(props) {
//   const { active, completed, className } = props;

//   const icons = {
//     1: <SettingsIcon />,
//     2: <GroupAddIcon />,
//     3: <VideoLabelIcon />,
//   };

//   return (
//     <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// ColorlibStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   /**
//    * The label displayed in the step icon.
//    */
//   icon: PropTypes.node,
// };

// // const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad','Create an ad','Create an ad'];

// export default function InvoiceStepper({ steps }) {
//   const [largestWidth, setLargestWidth] = useState('auto');
//   const stepperRefs = useRef(steps.map(() => React.createRef()));

//   useEffect(() => {
//     // Wait for the refs to be initialized
//     const checkRefs = () => {
//       const allRefsInitialized = stepperRefs.current.every((ref) => ref.current !== null);

//       if (allRefsInitialized) {
//         // Measure the width of each Stepper and find the largest width
//         let newLargestWidth = 'auto';
//         stepperRefs.current.forEach((ref) => {
//           const width = ref.current.offsetWidth;
//           if (width > newLargestWidth) {
//             newLargestWidth = width;
//           }
//         });

//         // Update all Steppers with the largest width
//         setLargestWidth(newLargestWidth);
//       } else {
//         // If not all refs are initialized, wait and check again
//         requestAnimationFrame(checkRefs);
//       }
//     };

//     checkRefs();
//   }, [steps]);

//   return (
//     <Stack sx={{ width: largestWidth }} spacing={4}>
//       <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
//         {steps.map((label, index) => (
//           <Step key={index}>
//             <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Stack>
//   );
// }

// InvoiceStepper.propTypes = {
//   steps: PropTypes.arrayOf(PropTypes.string).isRequired,
// };