import React from 'react';
import './App.css';

{/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
> */}

function App() {
  return (
    <div className="container-fluid grand">
      <div className="top">Settings
        <a class="btn btn-primary my-3 logout" href="#" role="button">Log Out</a>
      </div>
     
      <div className="body">Body</div>
    </div>
  );
}

export default App;
