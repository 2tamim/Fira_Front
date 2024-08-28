import { useState, useEffect , useCallback } from 'react';
import { Container, Stack, useTheme } from '@mui/material';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from '../../redux/store';
import { persistCard } from '../../redux/slices/kanban';
import { PATH_DASHBOARD } from '../../routes/paths';
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { KanbanColumn, KanbanColumnFrist } from '../../sections/@dashboard/kanban';


export default function Kanban() {
  const dispatch = useDispatch();

  // You can define your fixed set of columns here
  const fixedColumns = ['column-1', 'column-2', 'column-3', 'column-4'];

  const { board } = useSelector((state) => state.kanban);

  const [suspended, setSuspended] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [continued, setContinued] = useState([]);
  const [completed, setCompleted] = useState([]);
//   const [addTask, setAddTask] = useState([]);
  const theme = useTheme();  
  const isLight = theme.palette.mode === 'light';  // Get theme mode
  

  const tasksJSON = [
    {
        "id": 6018,
        "name": "bbbbbbbbbbbb",
        "creator": {
            "username": "admin",
            "first_name": "asghar",
            "last_name": "Gholizadeh",
            "email": "asghar@corp.com",
            "is_superuser": false,
            "last_login": "2024-02-20T11:17:19.418501",
            "avatar": "media/users/images/user_6/51c7a5420e7a23a6fbff0df99e0dabe809dc644051916fedf53e7b21ff083846s.jpg"
        },
        "user_assignee": {
            "username": "admin",
            "first_name": "asghar",
            "last_name": "Gholizadeh",
            "email": "asghar@corp.com",
            "is_superuser": false,
            "last_login": "2024-02-20T11:17:19.418501",
            "avatar": "media/users/images/user_6/51c7a5420e7a23a6fbff0df99e0dabe809dc644051916fedf53e7b21ff083846s.jpg"
        },
        "assign_status": 1,
        "progress": 0,
        "task_priority": 1,
        "current": false,
        "approved": true
    },
    {
        "id": 477,
        "name": "Windows OS",
        "creator": {
            "username": "admin",
            "first_name": "asghar",
            "last_name": "Gholizadeh",
            "email": "asghar@corp.com",
            "is_superuser": false,
            "last_login": "2024-02-20T11:17:19.418501",
            "avatar": "media/users/images/user_6/51c7a5420e7a23a6fbff0df99e0dabe809dc644051916fedf53e7b21ff083846s.jpg"
        },
        "user_assignee": null,
        "assign_status": null,
        "progress": 0,
        "task_priority": 1,
        "current": false,
        "approved": true
    },
        "id": 6013,
        "name": "aaaaaaaaa",
        "creator": {
            "username": "admin",
            "first_name": "asghar",
            "last_name": "Gholizadeh",
            "email": "asghar@corp.com",
            "is_superuser": false,
            "last_login": "2024-02-20T11:17:19.418501",
            "avatar": "media/users/images/user_6/51c7a5420e7a23a6fbff0df99e0dabe809dc644051916fedf53e7b21ff083846s.jpg"
        },
        "user_assignee": {
            "username": "admin",
            "first_name": "asghar",
            "last_name": "Gholizadeh",
            "email": "asghar@corp.com",
            "is_superuser": false,
            "last_login": "2024-02-20T11:17:19.418501",
            "avatar": "media/users/images/user_6/51c7a5420e7a23a6fbff0df99e0dabe809dc644051916fedf53e7b21ff083846s.jpg"
        },
        "assign_status": 1,
        "progress": 100,
        "task_priority": 1,
        "current": true,
        "approved": true
    }
]



useEffect(() => {
    const checkSuspended = tasksJSON.filter(item => item.progress === 0);
    setSuspended(checkSuspended);

    const checkiIncomplete = tasksJSON.filter(item => item.progress >= 1 );
    setIncomplete(checkiIncomplete);

    const checkIcontinued = tasksJSON.filter(item => item.current === true);
    setContinued(checkIcontinued);

    const checkCompleted = tasksJSON.filter(item => item.progress === 100);
    setCompleted(checkCompleted);

  },[]);


  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    
    if (source.droppableId === destination.droppableId) return;

    // REMOVE FROM SOURCE ARRAY

    if (source.droppableId === 4) {
      setCompleted(removeItemById(draggableId, completed));
    } else if (source.droppableId === 3) {
      setContinued(removeItemById(draggableId, continued));
    } else if (source.droppableId === 2) {
      setIncomplete(removeItemById(draggableId, incomplete));
    } else {
      setSuspended(removeItemById(draggableId, suspended));
    }

    // GET ITEM
  
    const task = findItemById(draggableId, [...incomplete, ...completed]);

    // ADD ITEM
    if (destination.droppableId === 4) {
      setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    } else {
      setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    }

  };

  function findItemById(id, array) {
    return array.find((item) => item.id === id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id !== id);
  }

const handleDeleteCard = useCallback((cardId) => {
    setSuspended((prevSuspended) => {
      return prevSuspended.filter((suspended) => {
        return cardId !== suspended.id;
      });
    });
  }, []);



  const addTask=(event)=>{
    setSuspended((prevTasks)=>{
        return [...prevTasks , event]
    })
  }



  return (
    <Page title="Kanban" sx={{ height: 1 }}>
      <Container maxWidth={false} sx={{ height: 1 }}>
        <HeaderBreadcrumbs
          heading="کانبان"
          links={[
            {
              name: 'داشبورد',
              href: PATH_DASHBOARD.root,
            },
            { name: 'کانبان' },
          ]}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <Stack
            direction="row"
            spacing={3}
            sx={{ height: 'calc(100% - 32px)', overflowY: 'hidden', justifyContent: 'center' }}
          >
          <KanbanColumnFrist id={"1"}  column={suspended} name={"شروع نشده"} bg={isLight ? '#F5F6F8' : '#121212'} handleDeleteCard={handleDeleteCard} addTask={addTask} />
          <KanbanColumn id={"2"}  column={incomplete} name={"در حال انجام"} bg={isLight ? '#EBF4F6' : '#121212'} />
          <KanbanColumn id={"3"}  column={continued} name={"کارهای جاری"} bg={isLight ? '#EBF4F6' : '#121212'} />
          <KanbanColumn id={"4"}  column={completed} name={"در انتظار تایید"} bg={isLight ? '#F1FCF2' : '#121212'} />
          </Stack>
        </DragDropContext>
      </Container>
    </Page>
  );
}
