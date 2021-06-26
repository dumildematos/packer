import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  return (
    <>
    <h1>App component again Dumilde</h1>
    <button onClick={()=>{
      electron.notificationAPI.sendNotification('This app sent a notification')
    }}>Notify</button>
    </>
  )
}