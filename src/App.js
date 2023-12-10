import React from 'react'
import './App.css';
import Dshboard  from './Folder/Dshboard';
import First from './Folder/First';
import Header from './Folder/Header';
import Overdue from './Folder/Overdue';
import Charts from './Folder/Charts';
import Week from './Folder/Week';
import Totalcost from './Folder/Totalcost';
import Sixth from "./Folder/Sixth";
function App() {

  return (

    <div>
      <Header/>
      <Dshboard/>
      <First />
       <Overdue/>
       <Charts/>
       <Week/>
       <Totalcost/>
       <Sixth/>
    </div>
  );
};


export default App;
