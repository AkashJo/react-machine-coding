import React from 'react'
import SingleTodo from './SingleTodo';
import { TodoModel } from './todoModel'

type Props = {
    todos : TodoModel[];
    setTodoList : React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const DisplayList : React.FC<Props> = (props : Props) => {


    
    const {todos,setTodoList} = props;

    console.log("Akkkkkkk",todos);
    
  return (
    <div className='display-todo'>
        <>
        {todos.map((item)=> {
            return (
                <SingleTodo 
                    key={item.id} 
                    todoItem={item}
                    todos={todos}
                    setTodoList={setTodoList}
                />
            )
        })}
        </> 
    </div>
  )
}

export default DisplayList