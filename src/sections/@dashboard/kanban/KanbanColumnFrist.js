import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
// @mui
import { Paper, Stack, Button, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
// redux
import { useDispatch } from '../../../redux/store';
import { deleteColumn, updateColumn, addTask, deleteTask } from '../../../redux/slices/kanban';
// components
import Iconify from '../../../components/Iconify';
//
import KanbanAddTask from './KanbanTaskAdd';
import KanbanTaskCard from './KanbanTaskCard';
import KanbanColumnToolBar from './KanbanColumnToolBar';
import KanbanTaskAddDrawer from './KanbanTaskAddDrawer';


const useStyles = makeStyles((theme) => ({
  customBorderRadius: {
    borderRadius: 18
  }
}));


export default function KanbanColumnFrist({id, column, name, bg , handleDeleteCard , addTask}) {
  const [openAddTaskDrawer, setOpenAddTaskDrawer] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { board } = useSelector((state) => state.kanban);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  if (!column) {
    return null; // Handle the case where column is undefined
  }

  const { cardList } = column;

  const handleAddTask = (task) => {
    dispatch(addTask({ card: task, columnId: id }));
    handleCloseAddTask();
  };

  const handleOpenAddTask = () => {
    setOpen(true);
  };

  const handleCloseAddTask = () => {
    setOpen(false);
  };



  const handleOpenAddTaskDrawer = () => {
    setOpenAddTaskDrawer(true);
  };

  const handleCloseAddTaskDrawer = () => {
    setOpenAddTaskDrawer(false);
  };



  return (
    <Paper className={classes.customBorderRadius}  sx={{ px: 2 }} style={{backgroundColor: `${bg}` }}>
      <Stack spacing={3}>
        <KanbanColumnToolBar columnName={name} />
        <Droppable droppableId={id} type="task">
          {(provided, snapshot) => (
            <Stack ref={provided.innerRef} {...provided.droppableProps} isdraggingover={snapshot.isdraggingover} spacing={2} width={280}>
              {column.lenght === 0 ? (
                <Typography>
                  Empty 
                </Typography>
              ) : (
              column.map((card, index) => (
                <KanbanTaskCard
                  key={index}
                  onDeleteTask={() => {}}
                  card={card}
                  index={index}
                  tasklabel={"آموزش"}
                  current={card.current}
                  handleDeleteCard={handleDeleteCard}
                  name={name}
                />
              )))
              }
              {provided.placeholder}
            </Stack>
          )}
        </Droppable>

        <Stack spacing={2} sx={{ pb: 3 }}>
          {open && <KanbanAddTask onAddTask={handleAddTask} onCloseAddTask={handleCloseAddTask} />}
          <Button
              fullWidth
              size="large"
              color="inherit"
              startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
              // onClick={handleOpenAddTask}
              onClick={handleOpenAddTaskDrawer}
              sx={{ fontSize: 14 }}
            >
             پیشنهاد کار
            </Button>
        </Stack>
      </Stack>
      <KanbanTaskAddDrawer
        drawerIsOpen={openAddTaskDrawer}
        onClose={handleCloseAddTaskDrawer}
        card={column.card}
        addTask={addTask}
        

      />
    </Paper>
  );
}



