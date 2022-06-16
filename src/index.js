import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function MyCompoment()
{
  return <h1>my first component</h1>
}
//Create the root div for REACT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyCompoment />
      
  // <React.StrictMode>
    
  // </React.StrictMode>
);