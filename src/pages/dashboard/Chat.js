import * as React from 'react';
import { useEffect } from 'react';
// @mui
import { Card, Container, Stack, ToggleButton, ToggleButtonGroup, Button } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// redux
import { useDispatch } from '../../redux/store';
import { getConversations, getContacts } from '../../redux/slices/chat';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { ReportTitleList, ReportDetails } from '../../sections/@dashboard/chat';
import Iconify from '../../components/Iconify';


// ----------------------------------------------------------------------
// Sample JSON data for conversations
const sampleConversations = [
  { id: 1, title: 'Task 1', details: 'Details for Task 1', comments:{
    name: "John Doe",
    avatarUrl: "https://example.com/avatar.jpg",
    postedAt: "2024-01-27T12:34:56Z",
    tagUser: "JaneDoe",
    message: "Hello, this is a sample message.",
    hasReply: false
  } },
  { id: 2, title: 'Task 2', details: 'Details for Task 2', comments:{
    name: "John Doe",
    avatarUrl: "https://example.com/avatar.jpg",
    postedAt: "2024-01-27T12:34:56Z",
    tagUser: "JaneDoe",
    message: "Hello, this is a sample message.",
    hasReply: false
  } },
  { id: 3, title: 'Task 3', details: 'Details for Task 3', comments:{
    name: "John Doe",
    avatarUrl: "https://example.com/avatar.jpg",
    postedAt: "2024-01-27T12:34:56Z",
    tagUser: "JaneDoe",
    message: "Hello, this is a sample message.",
    hasReply: false
  } },
];

export default function Chat() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  const [gp, setGP] = React.useState('');

  const handleChange = (event) => {
    setGP(event.target.value);
  };

  const [manager, setManager] = React.useState('');

  const handleChangeManager = (event) => {
    setManager(event.target.value);
  };

  const [alignment, setAlignment] = React.useState('right');
  const [devices, setDevices] = React.useState(() => ['phone']);
  const [selectedReport, setSelectedReport] = React.useState(null);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment === 'center') {
      window.location.href = '/dashboard/calendar';
    }
  };

  const handleDevices = (event, newDevices) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  const handleReportSelection = (report) => {
    setSelectedReport(report);
  };

  return (
    <Page title="کارکرد">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="کارکردها"
          links={[{ name: 'داشبورد', href: PATH_DASHBOARD.root }, { name: 'کارکرد' }]}
          action={
            <Button
              variant="contained"
              startIcon={<Iconify icon={'eva:plus-fill'} />}
              // onClick={handleOpenCompose}
            >
              گزارش
            </Button>
          }
        />
        <Stack direction="row" spacing={4} sx={{mb: 2}}>
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

          <FormControl sx={{ width: '10%' }}>
            <InputLabel id="demo-simple-select-label">گروه</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gp}
              label="گروه"
              onChange={handleChange}
            >
              <MenuItem value={10}>صیاد</MenuItem>
              <MenuItem value={20}>زین</MenuItem>
              <MenuItem value={30}>سلمان</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: '10%' }}>
            <InputLabel id="demo-simple-select-label">مسئول</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={manager}
              label="مسئول"
              onChange={handleChangeManager}
            >
              <MenuItem value={10}>سجاد قلیان</MenuItem>
              <MenuItem value={20}>رضا ژیان</MenuItem>
              <MenuItem value={30}>حسین سوزوکی</MenuItem>
            </Select>
          </FormControl>

        </Stack>
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ReportTitleList onSelectReport={handleReportSelection} />
          {selectedReport && <ReportDetails selectedReport={selectedReport} />}
        </Card>
      </Container>
    </Page>
  );
}


