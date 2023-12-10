import React from "react";
const Sixth = () => {
    const overdueCount = 5;
    const totalInspections = 45; // Assuming a total of 45 inspections
  
    // Calculate the percentage
    const percentage = ((overdueCount / totalInspections) * 100).toFixed(1);
  
    return (
        <div>
            
      <div className="sixth-container"style={{ height: '250px', width: '300px' }}>
        <div className="heading"><h5>Open source</h5></div>
        <div className="left-side">
           
          <h1 style={{color:"lightgreen"}}>{overdueCount}</h1>
          <p>Open</p>
        </div>
        <div className="right-side">
          <h1 style={{color:"darkgreen"}}>{percentage}%</h1>
          <p>Overdue</p>
        </div>
      </div>
      </div>
    );
  };
  export  default Sixth;