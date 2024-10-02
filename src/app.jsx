import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import React from 'react'

const todos = [
    { id: 1, name: "Hacer la compra", completed: false },
    { id: 2, name: "Estudiar React", completed: true },
    { id: 3, name: "Sacar la basura", completed: false },
    { id: 4, name: "Leer un libro", completed: true },
    { id: 5, name: "Ir al gimnasio", completed: false }
];  

function RenderTodos(){
    return(
        <React.Fragment>

            <TodoCounter completed={5} total={15}/>
            <TodoSearch />

            <TodoList>
                {todos.map(todo =>(
                    <TodoItem key={todo.id} name={todo.name} completed={todo.completed}/>
                ))}
            </TodoList>

            <CreateTodoButton />

        </React.Fragment>
    )
}

export {RenderTodos} 