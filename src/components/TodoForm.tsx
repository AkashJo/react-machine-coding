import React, { useState } from 'react'
import DisplayList from './DisplayList';
import './styles.css'
import { TodoModel } from './todoModel';

const TodoForm : React.FC = () => {

    const [todoText , setTodoText] = useState<string>("");
    const [todoList , setTodoList] = useState<TodoModel[]>([]);

    const handleAddTodo = (e : React.FormEvent) => {
        e.preventDefault();

        console.log("My todo text is : ",todoText);
        
        if(todoText) {
            console.log("Insideeee");
            console.log(todoList)
            setTodoList([...todoList,{id: Date.now(), todoText ,isDone:false}]) //Here todoText is = todoText (property) : todoText (value)
            setTodoText("")
            console.log(todoList)
        }
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
        //console.log(todoText)
    }

    return (
        <div className='div-form'>
            <form className='input-form'>
                <input type="text" 
                 placeholder='Add a task'
                 className='input-box'
                 value={todoText}
                 onChange={handleChange}/>
                <button type='submit' className='input-submit' onClick={handleAddTodo}>GO</button>
            </form>
            <DisplayList todos={todoList} setTodoList={setTodoList}/>
        </div>
    )
}

export default TodoForm