import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Now store is available everywhere in the project */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
