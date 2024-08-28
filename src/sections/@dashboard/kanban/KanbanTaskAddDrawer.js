import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import DatePicker from "react-multi-date-picker";
// import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
// import persianfa from "react-date-object/locales/persian_fa"
import persianFa from "react-date-object/locales/persian_fa"

// @mui
import { MobileDateRangePicker } from '@mui/lab';
import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Drawer,
  Button,
  Avatar,
  Tooltip,
  Divider,
  MenuItem,
  TextField,
  Typography,
  OutlinedInput,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';





// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { IconButtonAnimate } from '../../../components/animate';
// import { AdapterJalali } from '../../../components/AdapterJalali';
//
import KanbanTaskCommentList from './KanbanTaskCommentList';
import KanbanTaskAttachments from './KanbanTaskAttachments';
import KanbanTaskCommentInput from './KanbanTaskCommentInput';
import { useDatePicker, DisplayTime } from './KanbanTaskAdd';

// ----------------------------------------------------------------------

const PRIORITIZES = ['low', 'medium', 'hight'];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  width: 140,
  fontSize: 13,
  flexShrink: 0,
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

KanbanTaskAddDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export default function KanbanTaskAddDrawer({ drawerIsOpen, onClose , card , addTask}) {
  const isDesktop2 = useResponsive('up', 'sm');
  const [value, setValue] = useState(new Date());
  const fileInputRef = useRef(null);
  const [taskCompleted, setTaskCompleted] = useState();
//   const [taskCompleted, setTaskCompleted] = useState(card.completed);

  const [prioritize, setPrioritize] = useState('low');



//   const [values, setValues] = useState([
//     new DateObject().subtract(4, "days"),
//     new DateObject().add(4, "days")
//   ])


const [taskType, setTaskType] = useState('');
const [taskPriority, setTaskPriority] = useState('');
const [taskDifficulty, setTaskDifficulty] = useState('');
const [taskName, setTaskName]=useState('');
const [taskParent, setTaskParent]=useState('');
const [taskFunctor, setTaskFunctor]=useState('');
const [timeEstimation, setTimeEstimation] = useState();
const [endLessTask, setEndLessTask]=useState(false);
const [taskDescription, setTaskDescription]=useState('');



  const commentsJSON = [
    {
        "pk": 919,
        "content":   "very good",
        "user": 1,
        "created": "2024-02-20T16:29:43.861968"
    },
    {
      "pk": 920,
      "content": "thanks!",
      "user": 1,
      "created": "2024-02-20T16:30:43.861968"
  },
  {
    "pk": 921,
    "content": "nice to meet you",
    "user": 1,
    "created": "2024-02-20T16:31:43.861968"
},
]

const attachments = [
  {
      "pk": 166,
      "name": "aaa",
      "attachment_file": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxJ37JRqg6v70EGhx9MQjbz8o6OMrVf8HvA&usqp=CAU",
      "filename": "Capture.PNG",
      "user": {
          "username": "sm.hemmat",
          "first_name": "??? ????",
          "last_name": "???",
          "email": "SM.Hemmat@medad-art.ir",
          "is_superuser": false,
          "last_login": "2024-02-22T10:16:35.325677",
          "avatar": "media/users/images/user_8/8b27b4b6cd461ae497d7da19a97c431e45c9702084f7ed350e7125406a33d3ecprofile.PNG"
      }
  },
  {
    "pk": 167,
    "name": "bbb",
    "attachment_file": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxJ37JRqg6v70EGhx9MQjbz8o6OMrVf8HvA&usqp=CAU",
    "filename": "Capture.PNG",
    "user": {
        "username": "sm.hemmat",
        "first_name": "??? ????",
        "last_name": "???",
        "email": "SM.Hemmat@medad-art.ir",
        "is_superuser": false,
        "last_login": "2024-02-22T10:16:35.325677",
        "avatar": "media/users/images/user_8/8b27b4b6cd461ae497d7da19a97c431e45c9702084f7ed350e7125406a33d3ecprofile.PNG"
    }
}
]

//   const { name, description, due, assignee } = card;
const { description, due, assignee } = "";
  
  const {
    dueDate,
    startTime,
    endTime,
    isSameDays,
    isSameMonths,
    onChangeDueDate,
    openPicker,
    onOpenPicker,
    onClosePicker,
  } = useDatePicker({
    date: due,
  });

//   const [age, setAge] = useState('');


// const [taskType, setTaskType] = useState('');
// const [taskPriority, setTaskPriority] = useState('');
// const [taskDifficulty, setTaskifficulty] = useState('');
// const [taskName, setTaskName]=useState('');
// const [taskParent, setTaskParent]=useState('');
// const [timeEstimation, setTimeEstimation] = useState();
// const [endLessTask, setEndLessTask]=useState(false);
// const [taskDescription, setTaskDescription]=useState('');

  const handleChangeTaskType = (event) => {
    setTaskType(event.target.value);
  };
  const handleChangeTaskPriority = (event) => {
    setTaskPriority(event.target.value);
  };
  const handleChangeTaskDifficulty = (event) => {
    setTaskDifficulty(event.target.value);
  };
  const handleChangeTaskName = (event) => {
    setTaskName(event.target.value);
  };
  const handleChangeTaskParent = (event) => {
    setTaskParent(event.target.value);
  };
  const handleChangeTaskFunctor = (event) => {
    setTaskFunctor(event.target.value);
  };
  const handleChangesTimeEstimation = (event) => {
    setTimeEstimation(event.target.value);
  };
  const handleChangeEndLessTask = (event) => {
    setEndLessTask(event.target.value);
  };
  const handleChangeTaskDescription= (event) => {
    setTaskDescription(event.target.value);
  };


  const handleAttach = () => {
    fileInputRef.current?.click();
  };

//   const handleToggleCompleted = () => {
//     setTaskCompleted((prev) => !prev);
//   };

  const handleChangePrioritize = (event) => {
    setPrioritize(event.target.value);
  };


//   {
//     "id": 6018,
//     "name": "lancer2",
//     "creator": {
//         "username": "admin",
//         "first_name": "asghar",
//         "last_name": "Gholizadeh",
//         "email": "asghar@corp.com",
//         "is_superuser": false,
//         "last_login": "2024-02-20T11:17:19.418501",
//         "avatar": "media/users/images/user_6/51c7a5420e7a23a6fbff0df99e0dabe809dc644051916fedf53e7b21ff083846s.jpg"
//     },
//     "user_assignee": {
//         "username": "admin",
//         "first_name": "asghar",
//         "last_name": "Gholizadeh",
//         "email": "asghar@corp.com",
//         "is_superuser": false,
//         "last_login": "2024-02-20T11:17:19.418501",
//         "avatar": "media/users/images/user_6/51c7a5420e7a23a6fbff0df99e0dabe809dc644051916fedf53e7b21ff083846s.jpg"
//     },
//     "assign_status": 1,
//     "progress": 0,
//     "task_priority": 1,
//     "current": false,
//     "approved": true
// },


// const [taskType, setTaskType] = useState('');
// const [taskPriority, setTaskPriority] = useState('');
// const [taskDifficulty, setTaskifficulty] = useState('');
// const [taskName, setTaskName]=useState('');
// const [taskParent, setTaskParent]=useState('');
// const [timeEstimation, setTimeEstimation] = useState();
// const [endLessTask, setEndLessTask]=useState(false);
// const [taskDescription, setTaskDescription]=useState('');

  const handleAddTask=(e)=>{
    e.preventDefault()

    const event ={
      id: Math.floor(Math.random() * 100),
      taskTypea: taskType,
      task_priority : taskPriority,
      taskDifficultya: taskDifficulty,
      name: taskName,
      taskParenta: taskParent,
      user_assignee: taskFunctor,
      timeEstimationa: timeEstimation,
      endLessTaska: endLessTask,
      taskDescriptiona: taskDescription,
      progress: 0
    }

    addTask(event)
    onClose()
  }


  return (
    <>
      <Drawer open={drawerIsOpen} onClose={onClose} anchor="right" PaperProps={{ sx: { width: { xs: 1, sm: 600 } } }} BackdropProps={{ invisible: true }}>
        <Stack p={2.5} direction="row" alignItems="center">
          {!isDesktop2 && (
            <>
              <Tooltip title="Back">
                <IconButtonAnimate onClick={onClose} sx={{ mr: 1 }}>
                  <Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />
                </IconButtonAnimate>
              </Tooltip>
            </>
          )}



            <Box sx={{ flexGrow: 1 , my:0 }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <Select
                                value={taskType}
                                onChange={handleChangeTaskType}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >

                                <MenuItem value={"ماموریت"}>ماموریت</MenuItem>
                                <MenuItem value={"آموزش"}>آموزش</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                value={taskPriority}
                                onChange={handleChangeTaskPriority}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={"پایین"}>پایین</MenuItem>
                                <MenuItem value={"عادی"}>عادی</MenuItem>
                                <MenuItem value={"بالا"}>بالا</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={1}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                value={taskDifficulty}
                                onChange={handleChangeTaskDifficulty}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={"ساده"}>ساده</MenuItem>
                                <MenuItem value={"متوسط"}>متوسط</MenuItem>
                                <MenuItem value={"سخت"}>سخت</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
          
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack  sx={{ px: 2.5, py: 3 }}>

            <Box sx={{ flexGrow: 1 , my:3 }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <LabelStyle sx={{ mt: 1.5 }}>نام پروژه</LabelStyle>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField onChange={handleChangeTaskName} fullWidth size="small" id="outlined" placeholder='نام پروژه را وارد کنید'/>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1 , my:2 }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <LabelStyle sx={{ mt: 1.5 }}>کار والد</LabelStyle>
                    </Grid>
                    <Grid item xs={9}>
                        <FormControl sx={{ m: 1, minWidth: 70 }}>
                            <Select
                                fullWidth 
                                size="small"
                                value={taskParent}
                                onChange={handleChangeTaskParent}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >

                                <MenuItem value={"بدافزار"}>بدافزار</MenuItem>
                                <MenuItem value={"آموزش"}>آموزش</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1 , my:2 }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                            <LabelStyle sx={{ mt: 1.5 }}>سپردن به</LabelStyle>
                    </Grid>
                    <Grid item xs={3}>
                        <Tooltip title="سپردن یه">
                            <IconButtonAnimate sx={{ p: 1, ml: 0.5, border: (theme) => `dashed 1px ${theme.palette.divider}` }}>
                                <Iconify icon={'eva:plus-fill'} width={20} height={20} />
                            </IconButtonAnimate>
                        </Tooltip>
                    </Grid>
                </Grid>
            
            </Box>

            <Box sx={{ flexGrow: 1 , my:2 }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <LabelStyle> زمانبندی</LabelStyle>
                    </Grid>
                    <Grid item xs={3}>
                        <DatePicker
                            calendar={persian}
                            locale={persianFa}
                            value={timeEstimation}
                            onChange={setTimeEstimation}
                            range
                            />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1 , my:2 }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        {/* <LabelStyle> زمانبندی</LabelStyle> */}
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel required control={<Checkbox onChange={endLessTask} />} label="کار جاری" />
                    </Grid>
                </Grid>
            </Box>
            <Stack direction="row">
              <LabelStyle sx={{ my: 3 }}>توضیح</LabelStyle>
              <OutlinedInput
                fullWidth
                multiline
                rows={3}
                size="small"
                placeholder="توضیح"
                value={description}
                sx={{ typography: 'body2' }}
              />
            </Stack>
            <Stack direction="row" sx={{my:3}}>
              <LabelStyle sx={{ mt: 2 }}>ضمیمه</LabelStyle>
              <Stack direction="row" flexWrap="wrap">
                <KanbanTaskAttachments attachments={attachments} />
              </Stack>
            </Stack>
          </Stack>

          {/* {commentsJSON.length > 0 && <KanbanTaskCommentList comments={commentsJSON} />} */}
        </Scrollbar>

        <Divider />

        <Box sx={{ flexGrow: 1 , my:2 }}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
                {/* <LabelStyle> زمانبندی</LabelStyle> */}
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleAddTask} variant="contained" disableElevation>
                ایجاد کار
              </Button>
            </Grid>

          </Grid>

        </Box>
      </Drawer>
    </>
  );
}
