/*
  No componente main são realizadas: 
    As importações iniciais.
    O vínculo com a estilização global
    Também devem ser implementados quaisquer recursos prévios a abertura da primeira página.
    "Abre" o componente App
*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
