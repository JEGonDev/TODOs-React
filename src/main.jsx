import { createRoot } from 'react-dom/client'
import TodoItem from './app'

const root = createRoot(document.getElementById('app'))
root.render(<TodoItem />)