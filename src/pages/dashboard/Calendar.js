import React, { useState } from 'react';  // Import useState
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// @mui
import { Card, Button, Container, Stack, ToggleButton, ToggleButtonGroup, Paper, Typography, Box, Avatar, Chip } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from '@mui/material/styles';
// @mobiscroll
import { Eventcalendar, Page, Draggable, toast, setOptions, locale } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { PATH_DASHBOARD } from '../../routes/paths';
import useSettings from '../../hooks/useSettings';
// components
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import Iconify from '../../components/Iconify';



// setOptions({
//   theme: 'ios',
//   themeVariant: 'light'
// });

const hwInvalids = [{
  recurring: {
    repeat: 'daily'
  },
  resource: ['res4', 'res5', 'res6']
}];

const swInvalids = [{
  recurring: {
    repeat: 'daily'
  },
  resource: ['res1', 'res2', 'res3']
}];

const hwColors = [{
  recurring: {
    repeat: 'daily'
  },
  resource: ['res1', 'res2', 'res3'],
  background: '#1ad4041a'
}];

const swColors = [{
  recurring: {
    repeat: 'daily'
  },
  resource: ['res4', 'res5', 'res6'],
  background: '#1ad4041a'
}];


const myResources = [{
  id: 'hwt',
  name: 'HW Team',
  eventCreation: false,
  children: [{
    id: 'res1',
    name: 'Resource 1',
    color: '#0e9ea5'
  }, {
    id: 'res2',
    name: 'Resource 2',
    color: '#0e9ea5'
  }, {
    id: 'res3',
    name: 'Resource 3',
    color: '#0e9ea5'
  }]
}, {
  id: 'swt',
  name: 'SW Team',
  eventCreation: false,
  children: [{
    id: 'res4',
    name: 'Resource 4',
    color: '#c3b726'
  }, {
    id: 'res5',
    name: 'Resource 5',
    color: '#c3b726'
  }, {
    id: 'res6',
    name: 'Resource 6',
    color: '#c3b726'
  }]
}];

const myTasks = [{
  id: 1,
  label: 'آموزش',
  title: 'آموزش زبان عربی',
  start: '08:00',
  end: '12:00',
  category: 'hw',
  color: '#0e9ea5'
}, {
  id: 2,
  label: 'درخواست',
  title: 'درخواست گواهی اشتغال به تحصیل',
  start: '08:00',
  end: '12:00',
  category: 'hw',
  color: '#0e9ea5'
}, {
  id: 3,
  label: 'درخواست',
  title: 'درخواست گواهی اشتغال به تحصیل',
  start: '08:00',
  end: '12:00',
  category: 'hw',
  color: '#0e9ea5'
}, {
  id: 4,
  label: 'درخواست',
  title: 'درخواست گواهی اشتغال به تحصیل',
  start: '08:00',
  end: '12:00',
  category: 'sw',
  color: '#c3b726'
}, {
  id: 5,
  label: 'درخواست',
  title: 'درخواست گواهی اشتغال به تحصیل',
  start: '08:00',
  end: '12:00',
  category: 'sw',
  color: '#c3b726'
}, {
  id: 6,
  label: 'درخواست',
  title: 'درخواست گواهی اشتغال به تحصیل',
  start: '08:00',
  end: '14:00',
  category: 'sw',
  color: '#c3b726'
}];

const eventsList = [
  {
  "start":"2023-12-27T08:00:00.000Z","end":"2023-12-27T12:00:00.000Z","title":"Point Presentation","color":"rgb(203 244 214)"
},
{
  "start":"2023-12-25T08:00:00.000Z","end":"2023-12-25T14:00:00.000Z","title":"Point Presentation","color":"rgb(203 244 214)"
},
{
  "start":"2023-12-30T08:00:00.000Z","end":"2023-12-30T12:00:00.000Z","title":"Point Presentation","color":"rgb(203 244 214)"
},
]

const myInvalid = [{
  start: '08:00',
  end: '17:00',
  // title: 'استراحت روزانه',
  recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,SA,SU'
  },
  color: '#c3b726'
}];

const useStyles = makeStyles((theme) => ({
  customBorderRadius: {
    borderRadius: 15
  }
}));

function Task(props) {
  const [draggable, setDraggable] = React.useState();

  const setDragElm = React.useCallback((elm) => {
    setDraggable(elm);
  }, []);

  const classes = useStyles();

  return (
    <div ref={setDragElm} className="dynamically-color-and-invalidate-task" dir="rtl">
      <Paper className={classes.customBorderRadius} sx={{ px: 2, py: 1, width: 1, position: 'relative',  }} elevation={2} >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2 }}>
          <Chip color="info" label={props.data.label} size="small" sx={{ borderRadius: 0.7 }} style={{height : "100%", width : "27%"}} />
          <img src={'/icons/kara/low.svg'} alt='mySvgImage' style={{height : "10%", width : "10%"}} />
        </Box>
        <Box sx={{ pt: 1,cursor: 'pointer' }}>
          <Typography
            noWrap
            variant="subtitle2"
            sx={{ py: 2, pl: 2 }}
          >
            {props.data.title}
          </Typography>
        </Box>
      </Paper>
      <Draggable dragData={props.data} element={draggable} />
    </div>
  );
}


export default function Calendar() {
  const classes = useStyles();
  const { themeStretch } = useSettings();
  const [openCompose, setOpenCompose] = useState(false);
  const handleOpenCompose = () => {
    setOpenCompose(true);
  };

  const viewSettings = React.useMemo(() => {
    return {
      timeline: {
        type: 'month',
        resolutionHorizontal: 'hour',
        resolutionVertical: 'day',
        size: 1,
      },
    };
  }, []);

  const [alignment, setAlignment] = useState('center');
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment === 'right') {
      window.location.href = '/dashboard/chat';
    } else {
      setAlignment(newAlignment);
    }
  };

  const [myInvalids, setInvalids] = React.useState([]);
  const [myColors, setColors] = React.useState([]);

  const extendDefaultEvent = React.useCallback((event) => {
    const res = event.resource;

    if (res) {
      if (res === 'res1' || res === 'res2' || res === 'res3') {
        return {
          category: 'hw',
        };
      }
        return {
          category: 'sw',
        };
      }
    
  }, []);

  const onEventDragStart = React.useCallback((args) => {
    let event = args.event;

    if (event) {
      event = event.original || event;

      if (event.category === 'hw') {
        setInvalids(hwInvalids);
        setColors(hwColors);
      } else {
        setInvalids(swInvalids);
        setColors(swColors);
      }
    }
  }, []);

  const onEventDragEnd = React.useCallback(() => {
    setInvalids([]);
    setColors([]);
  }, []);

  const onEventCreated = React.useCallback(() => {
    toast({
      message: 'گزارش شما ثبت شد',
    });
  }, []);

  const onEventUpdated = React.useCallback(() => {
    toast({
      message: 'تغییرات انجام شد',
    });
  }, []);

  const onEventCreateFailed = React.useCallback(() => {
    toast({
      message: "نمی توانید گزارشی ثبت کنید",
    });
  }, []);

  const onEventUpdateFailed = React.useCallback(() => {
    toast({
      message: "نمی توانید تغییری ایجاد کنید",
    });
  }, []);

const persianDayNames = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];

// Get the existing persianLocale
const persianLocale = locale.fa;

// Update the day names properties
persianLocale.dayNamesShort = persianDayNames;
persianLocale.dayNamesMin = persianDayNames;

const theme = createTheme();
const style = {};

const myScheduleEvent = React.useCallback((data) => {
  const ev = data.original;
  const color = data.color;
  const borderRadius = '12px';

  return <div className="md-timeline-template-event" style={{borderColor: color, background: color, borderRadius}}>
      <div className="md-timeline-template-event-cont">
          {/* <span className={`mbsc-icon mbsc-font-icon mbsc-icon-${ev.taskType}`} style={{background: color}}></span>
          <span className="md-timeline-template-time" style={{color: color}}>{data.start}</span> */}
          <span className="md-timeline-template-title">{ev.title}</span>
      </div>
  </div>
});

  return (
  <div style={{backgroundColor: 'transparent !important'}}>
      <Page title="کارکرد">
      <Container maxWidth={themeStretch ? false : 'xl'} dir="rtl">
      <HeaderBreadcrumbs
          heading="کارکرد ها"
          links={[
            { name: 'داشبورد', href: PATH_DASHBOARD.root },
            { name: 'کارکرد', href: PATH_DASHBOARD.calendar }, 
          ]}
          action={
            <Button
              variant="contained"
              startIcon={<Iconify icon={'eva:plus-fill'} />}
              onClick={handleOpenCompose}
            >
              ثبت گزارش
            </Button>
          }
        />
        <Stack direction="row" spacing={4} dir="rtl" sx={{ mb: 2 }}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            {/* <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton> */}
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack direction="row"
            alignItems="flex-start"
            flexDirection= "row-reverse"
            style={{borderRadius: '16px', backgroundColor: 'rgb(245 246 248)'}}
            >
              <Card>
              <Eventcalendar
            theme="windows"
            themeVariant="light"
            locale={persianLocale}
            rtl
            dayNames
            view={viewSettings}
            dragToMove
            externalDrop
            extendDefaultEvent={extendDefaultEvent}
            onEventDragStart={onEventDragStart}
            onEventDragEnd={onEventDragEnd}
            onEventCreated={onEventCreated}
            onEventUpdated={onEventUpdated}
            onEventCreateFailed={onEventCreateFailed}
            onEventUpdateFailed={onEventUpdateFailed}
            renderScheduleEvent={myScheduleEvent}
            data={eventsList}
            invalid={myInvalid}
          />
              </Card>
              <Box>
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} sx={{ pt: 1, mx: 3 }}>
                <Typography variant="h6" component="h6">
                لیست کارهای فعال
                </Typography>
              </Stack>
              <Paper className={classes.customBorderRadius}  sx={{ px: 2 }} style={{backgroundColor: 'rgb(245 246 248)'}}>
                <Stack spacing={3}>
                  <Stack spacing={2} width={280}>
                    {myTasks.map((task) => (
                    <Task key={task.id} data={task} />
                    ))}
                  </Stack>
                </Stack>
              </Paper>
              </Box>
        </Stack>
      </Container>
    </Page>

  </div>
  );
}

