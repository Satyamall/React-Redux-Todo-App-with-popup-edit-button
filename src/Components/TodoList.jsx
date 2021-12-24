import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import {removeTodo,toggleTodo} from '../Redux/action';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

function ModalUnstyledDemo({id,onDelete,onToggle}){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Edit Task
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
           <button onClick={()=>onToggle(id)}>TOGGLE</button>
           <button onClick={()=>onDelete(id)}>DELETE</button>
        </Box>
      </StyledModal>
    </div>
  );
}

function TodoItem({ title, status,id,onDelete,onToggle}) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>{title}</div>
      <div>{`${status}`}</div>
      <div><ModalUnstyledDemo id={id} onDelete={onDelete} onToggle={onToggle}/></div>
    </div>
  );
}

function TodoList() {
  const todos = useSelector((state) => state.todo);
  const dispatch= useDispatch(); 

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} 
        onDelete={handleDelete}
        onToggle={handleToggle}
         />
      ))}
    </div>
  );
}

export default TodoList;
