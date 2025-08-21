import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { pages } from './data'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App pages={pages} />
  </StrictMode>,
)
