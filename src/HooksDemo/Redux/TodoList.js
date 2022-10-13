import React from "react";

const TODO_ACTIONS = {
  ADD_TODO: "add_todo",
  EDIT_TODO: "edit_todo",
  DELETE_TODO: "delete_todo",
  COMPLETE_TODO: "complete_todo",
};

const TodoStatus = {
  completed: "completed",
  inprogress: "inprogress",
};

class Todo {
  title;
  id;
  status;

  constructor(title) {
    this.title = title;
    this.id = Date.now();
    this.status = TodoStatus.inprogress;
  }
}

export function TodoItem(props) {
  const { title, id, status, dispatch } = props;
  console.log(dispatch);
  let color = "red";
  if (status === TodoStatus.completed) {
    color = "green";
  }
  return (
    <div className="todo-item">
      <span style={{ color }}>{title}</span>
      <button>Edit</button>
      <button
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.COMPLETE_TODO, payload: props })
        }
      >
        Complete
      </button>
      <button
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: props })
        }
      >
        Delete
      </button>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case TODO_ACTIONS.COMPLETE_TODO:
      return {
        todoList: state.todoList.map((todo) => {
          return todo.id === action.payload.id
            ? { ...todo, status: TodoStatus.completed }
            : todo;
        }),
      };
    case TODO_ACTIONS.DELETE_TODO:
      return {
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

export default function TodoList() {
  const [todos, dispatch] = React.useReducer(reducer, { todoList: [] });
  const [title, updateTitle] = React.useState("");

  const addTodo = (event) => {
    event.preventDefault();
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: new Todo(title) });
    updateTitle("");
  };

  const deleteItem = () => {};

  const editItem = () => {};

  const complete = () => {};

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={title}
          onChange={(e) => updateTitle(e.target.value)}
        />
      </form>
      <div>
        {todos.todoList.map((item) => (
          <TodoItem {...item} key={item.key} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}
