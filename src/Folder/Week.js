import React from 'react';


const Week = () => {
  return (
    <div className="inspection-failure-rate-container"style={{ height: '250px', width: '300px' }}>
      <h5 className='header3'>Inspection Failure Rate Container</h5>
      <div><div className="failure-rate-summary">
        <div className="this-week">
          <div className="percentage"><h1 style={{color:"blue"}}>14.3%</h1></div>
          <div className="label">This Week</div>
        </div>
        <div className="changed-from-last-week">
          <div className="percentage"><h1 style={{color:"red"}}>14.3%</h1></div>
          <div className="label">Changed from Last Week</div>
        </div>
      </div></div>
      
    </div>
  );
};

export default Week;
