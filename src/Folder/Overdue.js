import React from 'react';

const Overdue = () => {
  const overdueCount = 10;
  const totalInspections = 12; // Assuming a total of 12 inspections

  // Calculate the percentage
  const percentage = ((overdueCount / totalInspections) * 100).toFixed(1);

  return (
    <div className="overdue-container"style={{ height: '250px', width: '300px' }}>
      <h5 className='header2'>Fuel History</h5>
      <div className='overdue'>
      <div className="left-side">
        <h1 style={{color:"purple"}}>{overdueCount}</h1>
        <p>Overdue</p>
      </div>
      <div className="right-side">
        <h1 style={{color:"deepskyblue"}}>{percentage}%</h1>
        <p>Total Scheme</p>
      </div>
      </div>
    </div>
  );
};

export default Overdue;
