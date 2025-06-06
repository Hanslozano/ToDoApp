import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Global.css"
import App from './app'





createRoot(document.getElementById('Root')).render(
  <StrictMode>
  <App />
  </StrictMode>
)

