import React, { useState } from 'react'
import { TodoModel } from './todoModel'
import {AiFillEdit , AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'

type Props = {
    todoItem : TodoModel,
    todos : TodoModel[];
    setTodoList : React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const SingleTodo : React.FC<Props> = (props : Props) => {

    const {todoItem , todos , setTodoList} = props;

    const [editFlag, setEditFlag] = useState<boolean>(false);
    const [editTodoText , setEditTodoText] = useState<string>(todoItem.todoText);

    const handleDone = (id : number) => {

        setTodoList(todos.map((todo)=> {
            if(todo.id === id) {
                return {...todo,isDone:!todo.isDone};
            } else {
                return todo;
            }
        }))
    }

    const handleDelete = (id : number) => {

        setTodoList(todos.filter((todo)=> todo.id !== id));
    }

    const handleEdit = (e : React.FormEvent , id:number) => {
        e.preventDefault()

        setTodoList(todos.map((todo) => (todo.id === id ? {...todo,todoText : editTodoText} : todo)))
        setEditFlag(false)
    }

  return (
    <div>
        <form className='todo-single-container' onSubmit={(e) => handleEdit(e,todoItem.id)}>

            {
                //For edit
                editFlag ? (
                    <input type="text" 
                        value={editTodoText}
                        onChange={(e)=>setEditTodoText(e.target.value)}
                    />
                ) : (
                    todoItem.isDone ? (
                        <s className='todo-single-text'>
                            {todoItem.todoText}
                        </s>
                    ) : (
                        <span className='todo-single-text'>
                            {todoItem.todoText}
                        </span>
                    )
                )
            }
            <div>
                <span className="todo-icon">
                    <AiFillEdit onClick={ () => {
                            if(!editFlag && !todoItem.isDone) {
                                setEditFlag(!editFlag)
                            }
                        }  
                    }/>
                </span>
                <span className="todo-icon">
                    <AiFillDelete onClick={()=> handleDelete(todoItem.id)}/>
                </span>
                <span className="todo-icon">
                    <MdDone onClick={()=> handleDone(todoItem.id)}/>
                </span>
            </div>
        </form>
    </div>
  )
}

export default SingleTodo