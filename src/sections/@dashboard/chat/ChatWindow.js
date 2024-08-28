import React, { useState } from 'react';
import { 
  Grid, 
  Paper,  
  Button, 
  Box,
  Avatar,
  Divider,
  ListItem,
  TextField,
  Typography,
  ListItemText,
  ListItemAvatar, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// utils
import { fDate } from '../../../utils/formatTime';

const ReportDetails = ({ selectedReport }) => {
  
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleYesButtonClick = () => {
    // Add logic for 'Yes' button click if needed
    console.log('Yes button clicked');
  };

  const handleNoButtonClick = () => {
    // Add logic for 'No' button click if needed
    console.log('No button clicked');
  };

  const handleAdditionalDetailsChange = (event) => {
    setAdditionalDetails(event.target.value);
  };
  
  const [openReply, setOpenReply] = useState(false);

  const handleOpenReply = () => {
    setOpenReply(true);
  };
  const hasReply = true;

  return (
    <Grid item xs={9} sx={{ overflow: 'hidden', borderColor: 'grey.500', position: 'relative' }}>
      <Paper sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', borderColor: 'grey.500', borderWidth: '1px 0 0 0' }}>
        <>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '0.5px solid #8080801a', padding: '16px' }}>
            <Typography variant="h5">
              نوع کار : 
              {selectedReport.title}
            </Typography>
            <div>
              <Button variant="contained" color="error" onClick={handleNoButtonClick} sx={{mx:1}}>
                رد کردن گزارش
              </Button>
              <Button variant="contained" color="primary" onClick={handleYesButtonClick}  sx={{mx:1}}>
                گزارش جامع
              </Button>
              <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>

          {/* Body */}
          <div style={{ marginBottom: '16px', flex: 1, overflowY: 'auto', padding: '16px' }}>
            <Typography variant="h6" sx={{ mb: 5 }}>
              {selectedReport.details}
            </Typography>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam.
            </Typography>
          </div>

          {/* Reply */}
          <ListItem
            disableGutters
            sx={{alignItems: 'flex-start',py: 3,...(hasReply && {ml: 'auto', width: (theme) => `calc(100% - ${theme.spacing(7)})`,}),}}
          >
            <ListItemAvatar>
              <Avatar alt={selectedReport.comments.name} src={selectedReport.comments.avatarUrl} sx={{ width: 48, height: 48 }} />
            </ListItemAvatar>

            <ListItemText
              primary={selectedReport.comments.name}
              primaryTypographyProps={{ variant: 'subtitle1' }}
              secondary={
                <>
                  <Typography
                    gutterBottom
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: 'text.disabled',
                    }}
                  >
                    {fDate(selectedReport.comments.postedAt)}
                  </Typography>
                  <Typography component="span" variant="body2">
                    <strong>{selectedReport.comments.tagUser}</strong> {selectedReport.comments.message}
                  </Typography>
                </>
              }
            />

            {!hasReply && (
              <Button size="small" onClick={handleOpenReply} sx={{ position: 'absolute', right: 0 }}>
                Reply
              </Button>
            )}
          </ListItem>

          {/* Footer */}
          <div style={{ borderTop: '1px solid #8080801a', padding: '16px' }}>
            <TextField
              label="نوشتن پیام"
              variant="outlined"
              fullWidth
              value={additionalDetails}
              onChange={handleAdditionalDetailsChange}
            />
          </div>
        </>
      </Paper>
    </Grid>
  );
};

export default ReportDetails;
