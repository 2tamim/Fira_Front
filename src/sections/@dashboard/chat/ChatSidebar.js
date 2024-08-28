import React, { useState } from 'react';
import { Grid, List, ListItem, ListItemText, Paper, Typography, Chip, InputBase, IconButton, Divider, Stack, Box, Avatar, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ReportTitleList = ({ onSelectReport }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDotClick = (report) => {
    // TODO: Add logic to mark the report as read
    // For now, let's just log the report id
    console.log('Mark as Read:', report.id);
  };

  const handleReportClick = (report) => {
    setSelectedReport(report);
    onSelectReport(report);
    if (report.status === 'unread') {
      handleDotClick(report);
    }
  };

  const reports = [
    { id: 1, title: 'شناسایی اهداف', rangeTime: '10:35 الی 10:52', dateTime: '1402/12/23', status: 'unread' , details:'aaa', comments:{
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      postedAt: "2024-01-27T12:34:56Z",
      tagUser: "JaneDoe",
      message: "Hello, this is a sample message.",
      hasReply: false} },
    { id: 2, title: 'تخریب تحدید نظری', rangeTime: '10:35 الی 10:52', dateTime: '1402/12/23', status: 'read' , details:'bbb', comments:{
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      postedAt: "2024-01-27T12:34:56Z",
      tagUser: "JaneDoe",
      message: "Hello, this is a sample message.",
      hasReply: false} },
    { id: 3, title: 'فیش حقوقی', rangeTime: '10:35 الی 10:52', dateTime: '1402/12/23', status: 'unread' , details:'ccc', comments:{
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      postedAt: "2024-01-27T12:34:56Z",
      tagUser: "JaneDoe",
      message: "Hello, this is a sample message.",
      hasReply: true} },
    // Add more reports as needed
  ];

  return (
    <Grid item xs={3} sx={{ border: '1px solid #8080801a', borderRadius: '4px', padding: '16px' }}>
      <Paper>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox  />} label="همه" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="گزارش" />
            <FormControlLabel control={<Checkbox  />} label="رویداد" />
            <FormControlLabel control={<Checkbox  />} label="نتیجه" />
        </Box>
        <div style={{ padding: '8px', display: 'flex', alignItems: 'center' }}>
          <IconButton disabled>
            <SearchIcon />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <InputBase
            placeholder="جستجو در عناوین"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <List>
          {reports.map((report) => (
            <ListItem
              key={report.id}
              onClick={() => handleReportClick(report)}
              sx={{
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.04)', // Add your hover background color
                },
                ...(selectedReport && selectedReport.id === report.id && {
                  bgcolor: 'rgba(0, 0, 0, 0.1)', // Add your selected background color
                }),
              }}
            >
              <ListItemText
                secondary={
                  <>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar
                        alt="صادق طاهریان"
                        src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg"
                        sx={{ width: 24, height: 24 }}
                      />
                      <Box sx={{ flexGrow: 1, minWidth: '80px' }}>
                        <Typography variant="caption">{report.title}</Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.secondary',
                          }}
                        >
                          {report.rangeTime} | {report.dateTime}
                        </Typography>
                      </Box>
                      {report.status === 'unread' && (
                        <Box
                          component="span"
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: 'primary.main', // Use your desired blue color
                          }}
                          onClick={(event) => {
                            event.stopPropagation();
                            handleDotClick(report);
                          }}
                        />
                      )}
                    </Stack>
                    {/* <Chip
                      label={report.status === 'read' ? 'Read' : 'Unread'}
                      color={report.status === 'read' ? 'primary' : 'secondary'}
                    /> */}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  );
};

export default ReportTitleList;

