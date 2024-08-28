import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { MobileDateRangePicker } from '@mui/lab';
import { styled } from '@mui/system'; // Updated import path
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
import useResponsive from '../../hooks/useResponsive'; // Updated import path
import Iconify from '../../components/Iconify'; // Updated import path
import Scrollbar from '../../components/Scrollbar'; // Updated import path
import { IconButtonAnimate } from '../../components/animate'; // Updated import path

//
// import KanbanTaskCommentList from './KanbanTaskCommentList';
// import KanbanTaskAttachments from './KanbanTaskAttachments';
// import KanbanTaskCommentInput from './KanbanTaskCommentInput';
// import { useDatePicker, DisplayTime } from './KanbanTaskAdd';

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

InvoiceDetails.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  card: PropTypes.object,
  onDeleteTask: PropTypes.func,
};


export default function InvoiceDetails({ card, isOpen, onClose, onDeleteTask }) {
  const isDesktop = useResponsive('up', 'sm');

  const fileInputRef = useRef(null);
  const [taskCompleted, setTaskCompleted] = useState(card.completed);
  const [prioritize, setPrioritize] = useState('low');

  const { name, description, due, assignee, attachments, comments } = card;


  // const {
  //   dueDate,
  //   startTime,
  //   endTime,
  //   isSameDays,
  //   isSameMonths,
  //   onChangeDueDate,
  //   openPicker,
  //   onOpenPicker,
  //   onClosePicker,
  // } = useDatePicker({
  //   date: due,
  // });

  const handleAttach = () => {
    fileInputRef.current?.click();
  };

  const handleToggleCompleted = () => {
    setTaskCompleted((prev) => !prev);
  };

  const handleChangePrioritize = (event) => {
    setPrioritize(event.target.value);
  };

  return (
    <>
      <Drawer open={isOpen} onClose={onClose} anchor="right" PaperProps={{ sx: { width: { xs: 1, sm: 600 } } }} BackdropProps={{ invisible: true }}>
        <Stack p={2.5} direction="row" alignItems="center">
          {!isDesktop && (
            <>
              <Tooltip title="Back">
                <IconButtonAnimate onClick={onClose} sx={{ mr: 1 }}>
                  <Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />
                </IconButtonAnimate>
              </Tooltip>
            </>
          )}

          <Button
            size="small"
            variant="outlined"
            color={taskCompleted ? 'primary' : 'inherit'}
            startIcon={!taskCompleted && <Iconify icon={'eva:checkmark-fill'} width={16} height={16} />}
            onClick={handleToggleCompleted}
          >
            {taskCompleted ? 'Complete' : 'Mark complete'}
          </Button>

          <Stack direction="row" spacing={1} justifyContent="flex-end" flexGrow={1}>
            <Tooltip title="Like this">
              <IconButtonAnimate size="small">
                <Iconify icon={'ic:round-thumb-up'} width={20} height={20} />
              </IconButtonAnimate>
            </Tooltip>

            <>
              <Tooltip title="Attachment">
                <IconButtonAnimate size="small" onClick={handleAttach}>
                  <Iconify icon={'eva:attach-2-fill'} width={20} height={20} />
                </IconButtonAnimate>
              </Tooltip>
              <input ref={fileInputRef} type="file" style={{ display: 'none' }} />
            </>

            <Tooltip title="Delete task">
              <IconButtonAnimate onClick={onDeleteTask} size="small">
                <Iconify icon={'eva:trash-2-outline'} width={20} height={20} />
              </IconButtonAnimate>
            </Tooltip>

            <Tooltip title="More actions">
              <IconButtonAnimate size="small">
                <Iconify icon={'eva:more-horizontal-fill'} width={20} height={20} />
              </IconButtonAnimate>
            </Tooltip>
          </Stack>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ px: 2.5, py: 3 }}>
            <OutlinedInput
              fullWidth
              multiline
              size="small"
              placeholder="Task name"
              value={name}
              sx={{
                typography: 'h6',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
              }}
            />
            <Stack direction="row">
              <LabelStyle sx={{ mt: 1.5 }}>مسئول پروژه</LabelStyle>
              <Stack direction="row" flexWrap="wrap" alignItems="center">
                {/* {assignee.map((user) => (
                  <Avatar key={user.id} alt={user.name} src={user.avatar} sx={{ m: 0.5, width: 36, height: 36 }} />
                ))} */}

                <Tooltip title="سپردن یه">
                  <IconButtonAnimate sx={{ p: 1, ml: 0.5, border: (theme) => `dashed 1px ${theme.palette.divider}` }}>
                    <Iconify icon={'eva:plus-fill'} width={20} height={20} />
                  </IconButtonAnimate>
                </Tooltip>
              </Stack>
            </Stack>

            {/* <Stack direction="row" alignItems="center">
              <LabelStyle> زمان بندی</LabelStyle>
              <>
                {startTime && endTime ? (
                  <DisplayTime
                    startTime={startTime}
                    endTime={endTime}
                    isSameDays={isSameDays}
                    isSameMonths={isSameMonths}
                    onOpenPicker={onOpenPicker}
                    sx={{ typography: 'body2' }}
                  />
                ) : (
                  <Tooltip title="Add assignee">
                    <IconButtonAnimate
                      onClick={onOpenPicker}
                      sx={{
                        p: 1,
                        ml: 0.5,
                        border: (theme) => `dashed 1px ${theme.palette.divider}`,
                      }}
                    >
                      <Iconify icon={'eva:plus-fill'} width={20} height={20} />
                    </IconButtonAnimate>
                  </Tooltip>
                )}

                <MobileDateRangePicker
                  open={openPicker}
                  onClose={onClosePicker}
                  onOpen={onOpenPicker}
                  value={dueDate}
                  onChange={onChangeDueDate}
                  renderInput={() => {}}
                />
              </>
            </Stack> */}

            <Stack>
            <LabelStyle> شروع </LabelStyle>
            
            <LabelStyle> پایان</LabelStyle>
            
            </Stack>

            <Stack direction="row" alignItems="center">
              <LabelStyle>اولویت</LabelStyle>
              <TextField
                fullWidth
                select
                size="small"
                value={prioritize}
                onChange={handleChangePrioritize}
                sx={{
                  '& svg': { display: 'none' },
                  '& fieldset': { display: 'none' },
                  '& .MuiSelect-select': { p: 0, display: 'flex', alignItems: 'center' },
                }}
              >
                {PRIORITIZES.map((option) => (
                  <MenuItem key={option} value={option} sx={{ mx: 1, my: 0.5, borderRadius: 1 }}>
                    <Box
                      sx={{
                        mr: 1,
                        width: 14,
                        height: 14,
                        borderRadius: 0.5,
                        bgcolor: 'error.main',
                        ...(option === 'low' && { bgcolor: 'info.main' }),
                        ...(option === 'medium' && { bgcolor: 'warning.main' }),
                      }}
                    />
                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                      {option}
                    </Typography>
                  </MenuItem>
                ))}
              </TextField>
            </Stack>

            <Stack direction="row">
              <LabelStyle sx={{ mt: 2 }}>توضیحات</LabelStyle>
              <OutlinedInput
                fullWidth
                multiline
                rows={3}
                size="small"
                placeholder="توضیح بده ..."
                value={description}
                sx={{ typography: 'body2' }}
              />
            </Stack>

            <Stack direction="row">
              <LabelStyle sx={{ mt: 2 }}>ضمیمه</LabelStyle>
              <Stack direction="row" flexWrap="wrap">
                {/* <KanbanTaskAttachments attachments={attachments} /> */}
              </Stack>
            </Stack>
          </Stack>

          {/* {comments.length > 0 && <KanbanTaskCommentList comments={comments} />} */}
        </Scrollbar>

        <Divider />

        {/* <KanbanTaskCommentInput /> */}
      </Drawer>
    </>
  );
}
