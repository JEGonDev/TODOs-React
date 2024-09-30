import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'


function App(){
    return(
        <div className="className App">

        <TodoCounter />
        <TodoSearch />

        <TodoList>
            <TodoItem />
            <TodoItem />
            <TodoItemtem />
        </TodoList>

        <CreateTodoButton />
        </div>
    )
}

export default App