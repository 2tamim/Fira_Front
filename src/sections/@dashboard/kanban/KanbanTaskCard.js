import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
// @mui
import { Paper, Typography, Box, Avatar, Chip, Modal, IconButton } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import CircularProgressWithLabel from '../../../components/CirculeProgressbar';
import KanbanTaskDetails from './KanbanTaskDetails';
// import { Margin } from '@mui/icons-material';
import './KanbanTaskCard.css';

const useStyles = makeStyles((theme) => ({
  customBorderRadius: {
    borderRadius: 15
  }
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

KanbanTaskCard.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  onDeleteTask: PropTypes.func,
};

export default function KanbanTaskCard({ card, onDeleteTask, index , onClicktask , tasklabel , current , handleDeleteCard , name}) {
  const [openDetails, setOpenDetails] = useState(false);
  const [completed, setCompleted] = useState(card?.completed || false);
  const [hovered, setHovered] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpenDetails = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const HnadleBadgeColor=(tasklabel)=>{
    let color="";
    if (tasklabel==="آموزش") {
      color= "warning";
    }
    else if (tasklabel==="ماموریت") {
      color= "info";
    }
    else{
      color= "success";
    }
    return color;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Draggable draggableId={`${card.id}`} key={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isdragging={snapshot.isdragging}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.75 : 1
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Paper onClick={onClicktask} className={openDetails ? [classes.customBorderRadius ,'TaskCardClicked'].join(" ") : classes.customBorderRadius} sx={{ px: 2 , pt:1 , width: 1, position: 'relative' }} elevation={2} >
          {/* <Paper onClick={onClicktask} className={classes.customBorderRadius} sx={{ px: 2 , pt:1 , width: 1, position: 'relative' }} elevation={2} > */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: .50 , px:0 , }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* <Chip color={"info"} label={"فعالیت"} size="small" sx={{ borderRadius: 0.7 }} style={{ height: '100%', width: '100%' }} /> */}
                <Chip color={HnadleBadgeColor(tasklabel)} label={tasklabel} size="small" sx={{ borderRadius: 0.7 }} style={{ height: '100%', width: '100%' }} />
              </Box>

              <CircularProgressWithLabel 
                value={card.progress}
                progressStyle={{ height: '7%', width: '7%' ,pt: 0 , mt:0 }}
                labelStyle={{ fontSize: '.90rem'}}

              />
              
              <img src="/icons/kara/low.svg" alt="mySvgImage" style={{ height: '8%', width: '8%' , marginLeft:'0px' , padding:'0px' , margin:'0px'}} sx={{ px:0 , mx:0 }} />

            </Box>
            


            <Box onClick={handleOpenDetails}  sx={{ pt: 1, cursor: 'pointer' }}>
              <Typography noWrap variant="subtitle2" sx={{ py: 1, pl: 0 }}>
                {card.name}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {hovered && (
                name ==="شروع نشده" ? 
                    <IconButton onClick={()=>handleDeleteCard(card.id)} aria-label="delete">
                      <DeleteSweepOutlinedIcon />
                    </IconButton>

                  :
                    <IconButton onClick={handleOpen} aria-label="report">
                      <EditNoteIcon />
                    </IconButton>



              )}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    بخش گزارش نویسی
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    اینجا باید گزارش بنویسی
                  </Typography>
                </Box>
              </Modal>
              <Typography variant="caption" display="block" gutterBottom sx={{ py: 1, pl: 0 }}>
                صادق طاهریان
              </Typography>
              <Avatar
                alt="صادق طاهریان"
                src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg"
                sx={{ width: 24, height: 24, mb:1}}
              />
            </Box>
          </Paper >
    <KanbanTaskDetails
      card={card}
      isOpen={openDetails}
      onClose={handleCloseDetails}
      onDeleteTask={() => onDeleteTask(card.id)}
    />
  { provided.placeholder }
        </div >
      )
}
    </Draggable >
  );
}
