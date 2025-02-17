
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import {TodoType} from "../Types";

interface TodoProps {
  todos: TodoType;
  deleteTodo: (id: string) => void;
  toggleComplete: (todo: TodoType) => void;
}

const ToDoList = ({ todos, deleteTodo, toggleComplete } : TodoProps) => {
  return (
    <li className="p-2 bg-teal-300 my-2 rounded-md shadow-sm">
        <div className="flex items-center justify-between">
            <p className={todos.completed ? "text-gray-700 cursor-default line-through opacity-20" : "text-gray-700 cursor-default"}>{todos.text}</p>
            <div className="flex gap-3">
                <button className='cursor-pointer'>
                  <CheckIcon onClick={() => toggleComplete(todos)}/>
                </button>
                <button className="cursor-pointer">
                  <DeleteIcon onClick={() => deleteTodo(todos.id)}/>
                </button>
            </div>
        </div>
    </li>
  )
}

export default ToDoList