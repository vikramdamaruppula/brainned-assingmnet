import React from "react"

const TodosList =({todos,setTodos,setEditTodo})=>{
    const handleDeleteTodo=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !== id))
    }

    const handleComplete=(todo)=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {...item, completed:!item.completed}
            }
            return item;
        }))
    }

    const handleEditTodo=({id})=>{
        const findTodo = todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo)
    }

    return(
        <div>
            {todos.map((eachTodo)=>(
                <li className="list-item" key={eachTodo.id}>
                    <input 
                        type="text" 
                        value={eachTodo.title} 
                        className={`list ${eachTodo.completed ?"complete" :""}`}
                        onChange={(event)=>event.preventDefault()} />

                <div>
                    <button className="button-complete task-button" onClick={()=>handleComplete(eachTodo)}>
                        <i className="fa fa-check-circle"></i>
                    </button>
                    <button className="button-edit task-button" onClick={()=>handleEditTodo(eachTodo)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="button-delete task-button" onClick={()=>handleDeleteTodo(eachTodo)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
                </li>
            ))}

            
        </div>
    )
}

export default TodosList