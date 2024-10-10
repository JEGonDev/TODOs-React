import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import React from 'react'

const defaultTodos = [
    { id: 1, name: "Hacer la compra", completed: false },
    { id: 2, name: "Estudiar React", completed: true },
    { id: 3, name: "Sacar la basura", completed: false },
    { id: 4, name: "Leer un libro", completed: true },
    { id: 5, name: "Ir al gimnasio", completed: false }
];  

function RenderTodos(){

    const [todo, setTodo] = React.useState(defaultTodos)

    const [searchValue, setSearchValue] = React.useState('')

    const completedTodos = todo.filter(
        todo => !!todo.completed).length

    const totalTodos = todo.length

    const searchedTodos = todo.filter(
        (todo) => {
            return todo.name.toLowerCase().includes(
                searchValue.toLowerCase())
        }
    )

    const todoCompleted = (name) => {
        const newTodo = [...todo]
        const index = newTodo.findIndex(
            (todo) => todo.name == name
        )
        newTodo[index].completed = true
        setTodo(newTodo)
    }    

    const todoDeleted = (name) => {
        const newTodo = [...todo]
        const index = newTodo.findIndex(
            (todo) => todo.name == name
        )
        newTodo.splice(index, 1)
        setTodo(newTodo)
    }

    return(
        <React.Fragment>

            <TodoCounter 
                completed={completedTodos} 
                total={totalTodos}
            />

            <TodoSearch 
                searchValue={searchValue} 
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedTodos.map(todo =>(
                    <TodoItem 
                        key={todo.id} 
                        name={todo.name} 
                        completed={todo.completed}
                        onComplete= {() => todoCompleted(todo.name)}
                        onDelete={() => todoDeleted(todo.name)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

        </React.Fragment>
    )
}

export {RenderTodos} 