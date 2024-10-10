import './styles/TodoItem.css';

function TodoItem(props) {
    return (
        <li className={`todoItem ${props.completed ? 'todoItem-completed' : ''}`}>
            <span
            onClick={props.onComplete}
            >V</span>
            <p className={props.completed ? 'completed' : ''}>{props.name}</p>
            <span
            onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export { TodoItem };
