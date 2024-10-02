import './styles/TodoItem.css'

function TodoItem(arroz){
    return (
        <li className='todoItem'>
            <span>V</span>
            <p>{arroz.name}</p>
            <span>X</span>
        </li>
    )
}

export {TodoItem}