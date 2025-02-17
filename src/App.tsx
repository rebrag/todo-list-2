import Form from "./Components/Forms";
import { useState, useEffect, FormEventHandler } from "react";
import ToDoList from "./Components/ToDoList"
import { collection, onSnapshot, query, doc, deleteDoc, addDoc, updateDoc} from "firebase/firestore"
import { db } from "./Components/Firebase";

interface TodoType {
  text? : string
  completed?: boolean
  id: string
}

const App = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [input, setInput] = useState("")

  //create
  const createTodo : FormEventHandler<HTMLInputElement>= async (e) => {
    e.preventDefault()
    if (input === "") {
      alert('please enter a task') 
      return
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    })
    setInput("");
  }

  //read
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const todosArr: TodoType[] = [];
      QuerySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id });
      });
     setTodo(todosArr);
    });
    return () => unsubscribe();
  }, []);
  
  //update
  const toggleComplete = async (todo:TodoType) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    });
  }

  //delete
  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos",id))
  }

  return (
    <div className='h-screen w-screen p-4 bg-teal-300 overflow-y-scroll'>
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-2xl p-4">
          <h1 className="text-3xl font-bold text-center">Josh n' Kate's to-do list!</h1>
          <Form createTodo={createTodo} input={input} setInput={setInput}/>
          <ul>
            {todo.map((todos,index) => (
              <ToDoList key={index} todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
            ))}
          </ul>
          <p className="text-center">{`You have ${todo.length} thing(s) to complete`}</p>
          <p>Copyright 2025!</p>
        </div>
    </div>
  );
};

export default App;