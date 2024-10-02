import { createRoot } from 'react-dom/client'
import { RenderTodos } from './app'

const root = createRoot(document.getElementById('app'))
root.render(<RenderTodos />)