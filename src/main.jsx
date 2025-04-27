import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

async function enableMocking(){
  // Enable msw to mock any API requests but only in development mode
  if (import.meta.env.MODE !== "development") {
    return;
  }
  // return;

  const {worker} = await import("../mocks/browser.js");

  // This is a promise, 
  // if the msw worker is ready, this resolves
  // if something goes wrong, this will throw
  return worker.start();

}


// Determine if mocking is needed or not
enableMocking().then(() => {

  // And then, create and run the React app 
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );

});