import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './i18n/i18n'
import './fonts.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
