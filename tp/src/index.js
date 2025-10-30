import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import ProductSearch  from './ex2.jsx';
// import TasksList from './ex3.jsx';
// import SortablePaginatedTable from './ex4.jsx';
// import Ex5 from './ex5.jsx';
// import OrderStats from './ex1.jsx';
import App from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <OrderStats />
    <ProductSearch />
    <TasksList />
    
    <SortablePaginatedTable />
    <Ex5 /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

