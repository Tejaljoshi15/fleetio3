import React from 'react';
import Overdue from './Overdue';

// Import CSS file for styling

const Charts = () => {
  return (
    <div className="vehicle-assignments-container">
      
      <div className="assignment-summary"style={{ height: '250px', width: '300px' }}><h5 style={{paddingBottom:"160px"}}>Overdue Inspection</h5>
        <div className="assigned">
          <div className="number"><h1 style={{color:"Blue"}}>8</h1></div>
          <div className="label"><h6>Assign</h6></div>
        </div>
        <span>
          
        </span>
        <div className="unassigned">
          <div className="percentage"><h1 style={{color:"red"}}>44.3%</h1></div>
          <div className="label"><h6 >Unassigned</h6></div>
        </div>
      </div>
    </div>
  );
};

export default Charts;





