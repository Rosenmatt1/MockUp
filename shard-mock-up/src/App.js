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
    <div className="container-fluid">

      <div className="row top"> 
        <p classname="my-2"> Settings </p>
        <a className="btn btn-primary my-2 logout" href="#" role="button"> Log Out </a>
      </div>

      <div className="col-1 leftNav">Left Nav</div>
     
      <div className="body">Body</div>

    </div>
  );
}

export default App;
