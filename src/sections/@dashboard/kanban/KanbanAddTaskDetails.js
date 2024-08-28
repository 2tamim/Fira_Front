import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import moment from 'jalali-moment';

import { format } from 'date-fns';
// @mui
import { MobileDateRangePicker } from '@mui/lab';
import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Drawer,
  Button,
  Avatar,
  TextField,
  Typography,
  Divider,
  Tooltip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Snackbar,
  IconButton,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import EditNoteIcon from '@mui/icons-material/EditNote';
// hooks
import useResponsive from '../../../hooks/useResponsive';
import useAuth from '../../../hooks/useAuth';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { IconButtonAnimate } from '../../../components/animate';
import KanbanTaskCommentInput from './KanbanTaskCommentInput';
import { getAlltask } from '../../../services/kanban.service';
import useCreateTaskKanban from '../../../services/task.service';
import { HOST_API } from '../../../config';


const API_URL = `${HOST_API}`;

// ----------------------------------------------------------------------

const PRIORITIZES = ['low', 'medium', 'high'];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  width: 140,
  fontSize: 13,
  flexShrink: 0,
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

KanbanAddTaskDetails.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default function KanbanAddTaskDetails({ isOpen, onClose, onSubmit }) {
  const { user } = useAuth();
  const isDesktop = useResponsive('up', 'sm');
  const [name, setName] = useState('');
  const [userAssignee, setUserAssignee] = useState(String(user.id));
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [file, setFile] = useState(null);
  const [taskType, setTaskType] = useState('false');
  const [taskCurrent, setTaskCurrent] = useState('false');
  const [taskDificulty, setTaskDificulty] = useState('1');
  const [taskEducational, setTaskEducational] = useState('false');
  const [taskPriority, setTaskPriority] = useState('1');
  const [taskParent, setTaskParent] = useState('والد را نتخاب کنید');
  const [disableTime, setDisableTime] = useState(false);
  const [tasks, setTasks] = useState([]);
  // const [snackbarOpen, setSnackbarOpen] = useState(false);
  // const [snackbarMessage, setSnackbarMessage] = useState(false);
  // const [snackbarSeverity, setSnackbarSeverity] = useState('info');
  const [value, setValue] = useState(new Date());

  const { createTaskKanban, snackbarOpen, snackbarMessage, snackbarSeverity, setSnackbarOpen } = useCreateTaskKanban();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await getAlltask();
  
        // Update users state
        setTasks(tasks);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleChangePriority = (event) => {
    setTaskPriority(event.target.value);
  };

  const handleChangeType = (event) => {
    setTaskEducational(event.target.value);
  };

  const handleChangeDificulty = (event) => {
    setTaskDificulty(String(event.target.value));
  };

  const handleChangeParent = (event) => {
    setTaskParent(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setDisableTime(event.target.checked);
    
    if (event.target.checked) {
      setTaskCurrent('true');
      // Disable the start and end time pickers
      setStartTime('');
      setEndTime('');
    } else {
      setTaskCurrent('false');
      // Enable the start and end time pickers
      setStartTime(new Date());
      setEndTime(new Date());
    }
  };

  const handleDateChange = (newDates) => {
    if (newDates.length === 1) {
      setStartTime(newDates[0]);
      setEndTime('');
    } else if (newDates.length === 2) {
      // const formattedStartDate = newDates[0] ? newDates[0].format('YYYY/MM/DD') : ""; 
      // const formattedEndDate = newDates[1] ? newDates[1].format('YYYY/MM/DD') : "";
      
      setStartTime(newDates[0]);
      setEndTime(newDates[1]);
    }
  };

  const formatDateString = (date) => {
    if (date instanceof Date){
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    }
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const startISOString = startTime ? new Date(startTime).toISOString().split('T')[0]: '';
    const endISOString = endTime ? new Date(endTime).toISOString().split('T')[0]: '';

    // console.log(formattedStartDate)
    // Format the date
    const startFormattedDate = formatDateString(startTime);
    const endFormattedDate = formatDateString(endTime);


    // Prepare form data
    const formdata = new FormData();
    // formData.append('name', name);
    // formData.append('description', description);
    // formData.append('task_parent', taskParent);
    // formData.append('task_type', "");
    // formData.append('user_assignee', userAssignee);
    // formData.append('startdate', startISOString);
    // formData.append('enddate', endISOString);
    // formData.append('current', taskCurrent);
    // formData.append('difficulty', taskDificulty);
    // formData.append('educational', taskEducational);
    // formData.append('task_attachments', file);

    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("task_parent", taskParent);
    formdata.append("task_type", "");
    formdata.append("user_assignee", userAssignee);
    formdata.append("startdate", startISOString);
    formdata.append("enddate", endISOString);
    formdata.append("current", taskCurrent);
    formdata.append("difficulty", taskDificulty);
    formdata.append("educational", taskEducational);
    formdata.append("task_priority", taskPriority);

    try {
      await createTaskKanban(formdata);
      // setSnackbarMessage('پیشنهاد کار موفقیت آمیز بود');
      // setSnackbarOpen(true);
    } catch (error) {
      console.error('پیشنهاد کار با خطا روبرو شد', error);
      console.log(formdata);
      // setSnackbarMessage('پیشنهاد کار با خطا روبرو شد');
      // setSnackbarOpen(true);

    }

    // // Call the onSubmit callback with form data
    // onSubmit(formData);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };



  return (
  <>
    <Drawer open={isOpen} onClose={onClose} anchor="right" PaperProps={{ sx: { width: { xs: 1, sm: 600 } } }} BackdropProps={{ invisible: true }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Box sx={{ display: 'flex', minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel> نوع کار </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={taskType}
              label="نوع کار"
              onChange={handleChangeType}
              style={{ width: '120px', height: '50px', backgroundColor: '#f0f0f0' }}
            >
              <MenuItem value={'false'} sx={{ justifyContent: 'flex-end' }}>ماموریت</MenuItem>
              <MenuItem value={'true'} sx={{ justifyContent: 'flex-end' }}>آموزش</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{mx:1}}>
            <InputLabel> اولویت </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={taskPriority}
              label="اولویت "
              onChange={handleChangePriority}
              style={{ width: '120px', height: '50px', backgroundColor: '#f0f0f0' }}
            >
              <MenuItem value={100} sx={{ justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>عادی</span>
                  <img src="/icons/kara/olaviaat/addi.svg" alt="mySvgImage" style={{ height: '10px', width: '10px' }}/>
                </div>
              </MenuItem>
              <MenuItem value={200} sx={{ justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>فوری</span>
                  <img src="/icons/kara/olaviaat/fori.svg" alt="mySvgImage" style={{ height: '10px', width: '10px' }}/>
                </div>
              </MenuItem>
              <MenuItem value={300} sx={{ justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>آنی</span>
                  <img src="/icons/kara/olaviaat/anii.svg" alt="mySvgImage" style={{ height: '10px', width: '10px' }}/>
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl fullWidth>
            <InputLabel> سختی کار </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={taskDificulty}
              label="سختی کار"
              onChange={handleChangeDificulty}
              style={{ width: '120px', height: '50px', backgroundColor: '#f0f0f0' }}
            >
              <MenuItem value={1} sx={{ justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>ساده</span>
                  <img src="/icons/kara/select degree/sadeh.svg" alt="mySvgImage" style={{ height: '40px', width: '40px' }}/>
                </div>
              </MenuItem>
              <MenuItem value={2} sx={{ justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>متوسط</span>
                  <img src="/icons/kara/select degree/motavasset.svg" alt="mySvgImage" style={{ height: '40px', width: '40px' }}/>
                </div>
              </MenuItem>
              <MenuItem value={3} sx={{ justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>سخت</span>
                  <img src="/icons/kara/select degree/sakht.svg" alt="mySvgImage" style={{ height: '40px', width: '40px' }}/>
                </div>
              </MenuItem>
              <MenuItem value={4} sx={{ justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>دشوار</span>
                  <img src="/icons/kara/select degree/doshavar B.svg" alt="mySvgImage" style={{ height: '40px', width: '40px' }}/>
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Divider />

      <Scrollbar>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} sx={{ px: 2.5, py: 3 }}>
            <Stack direction="row">
              <LabelStyle sx={{ mt: 1.5 }}>نام </LabelStyle>
              <Stack direction="row" flexWrap="wrap" alignItems="center">
                <Box sx={{ minWidth: 420 }}>
                  <TextField
                    fullWidth
                    multiline
                    size="small"
                    label="نام پروژه را وارد کنید"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
              </Stack>
            </Stack>

            <Stack direction="row">
              <LabelStyle sx={{ mt: 1.5 }}>کار والد</LabelStyle>
              <Stack direction="row" flexWrap="wrap" alignItems="center">
                <Box sx={{ minWidth: 420 }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={taskParent}
                      onChange={handleChangeParent}
                      style={{ height: '40px' }}
                      defaultValue='والد را نتخاب کنید'
                    >
                      <MenuItem value='والد را انتخاب کنید' disabled>والد را انتخاب کنید</MenuItem>
                      {tasks.map((task, index) => (
                        <MenuItem value={task.id}>{task.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
            </Stack>

            {/* <Stack direction="row">
              <LabelStyle sx={{ mt: 1.5 }}>اولویت </LabelStyle>
              <Stack direction="row" flexWrap="wrap" alignItems="center">
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                  <FormControlLabel
                    value="متوسط"
                    control={<Radio />}
                    label={(
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`${process.env.PUBLIC_URL}/icons/kara/low.svg`} alt="Low Priority" style={{ height: '7%', width: '7%', marginRight: '8px' }} />
                        متوسط
                      </div>
                    )}
                  />
                  <FormControlLabel
                    value="بالا"
                    control={<Radio />}
                    label={(
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`${process.env.PUBLIC_URL}/icons/kara/medium.svg`} alt="Medium Priority" style={{ height: '7%', width: '7%', marginRight: '8px' }} />
                        بالا
                      </div>
                    )}
                  />
                  <FormControlLabel
                    value="بسیار بالا"
                    control={<Radio />}
                    label={(
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`${process.env.PUBLIC_URL}/icons/kara/high.svg`} alt="High Priority" style={{ height: '7%', width: '7%', marginRight: '8px' }} />
                        بسیار بالا
                      </div>
                    )}
                  />
                </RadioGroup>
              </Box>
              </Stack>
            </Stack> */}

            <Stack direction="row">
              <LabelStyle sx={{ mt: 1.5 }}>مسئول پروژه</LabelStyle>
              <Stack direction="row" flexWrap="wrap" alignItems="center">
                <Tooltip title={`${user.first_name}${user.last_name}`}>
                  <Avatar
                    alt={user.username}
                    src={`${API_URL}${user.avatar}`}
                    sx={{ m: 0.5, width: 36, height: 36 }}
                  />
                </Tooltip>
                <Tooltip title="سپردن یه">
                  <IconButtonAnimate sx={{ p: 1, ml: 0.5, border: (theme) => `dashed 1px ${theme.palette.divider}` }}>
                    <Iconify icon={'eva:plus-fill'} width={20} height={20} />
                  </IconButtonAnimate>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack direction="row" alignItems="center" >
            <LabelStyle sx={{ mt: 1.5 }}> زمانبندی </LabelStyle>
            <Box sx={{ display:'flex', width: '220px' }}>
              <DatePicker value={value} onChange={handleDateChange} disabled={disableTime} calendar={persian} locale={persianFa} range plugins={[<DatePanel />]} calendarPosition='bottom-right' style={{ height: '40px' }} />
              
              {/* <MobileDateRangePicker
                  value={[startTime, endTime]}
                  onChange={(newValue) => {
                    setStartTime(newValue[0]);
                    setEndTime(newValue[1]);
                  }}
                  renderInput={(startProps) => <TextField {...startProps} size="small" />}
                  disabled={disableTime}
                />

                <MobileDateRangePicker
                  value={[startTime, endTime]}
                  onChange={(newValue) => {
                    setStartTime(newValue[0]);
                    setEndTime(newValue[1]);
                  }}
                  renderInput={(endProps) => <TextField {...endProps} size="small" />}
                  disabled={disableTime}
                /> */}
            </Box>
            </Stack>

            <Stack direction="row" alignItems="center">
            <LabelStyle sx={{ mt: 1.5 }}> </LabelStyle>
              <Box sx={{ display:'flex', width: '220px' }}>
                <Checkbox checked={disableTime} onChange={handleCheckboxChange} style={{ paddingRight: 0 }}/>
                <Typography variant="body2" sx={{ mt:1}}>کار جاری</Typography>
              </Box>
            </Stack>

            <Stack direction="row">
              <LabelStyle sx={{ mt: 1.5 }}>توضیح </LabelStyle>
              <Stack direction="row" flexWrap="wrap" alignItems="center">
                <Box sx={{ minWidth: 420 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="توضیح"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    
                  />
                </Box>
              </Stack>
            </Stack>

            <Stack direction="row">
              <LabelStyle>فایل ضمیمه</LabelStyle>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </Stack>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignContent: 'flex-end', height: '280px'}}>
              <Button type="submit" variant="contained" style={{ width: '300px', height: '45px' }}>
                ایجاد کار
              </Button>
            </Box>
            
          </Stack>
        </form>
      </Scrollbar>

      <Divider />
    </Drawer>
    <Snackbar 
      open={snackbarOpen} 
      autoHideDuration={6000} 
      onClose={handleCloseSnackbar}
    >
      <MuiAlert elevation={6} variant='filled' onClose={handleCloseSnackbar} severity={snackbarSeverity} >
        {snackbarMessage}
      </MuiAlert>
    </Snackbar>
  </>
  );
}

