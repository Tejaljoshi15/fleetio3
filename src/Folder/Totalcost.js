import React from "react";
const Totalcost = () => {
    return (
      <div className="pie-container"style={{ height: '250px', width: '300px' }}>
        <h5 style={{paddingLeft:"130px", marginBottom:"180px"}}>Inspections Summary</h5>
        <div className="failure-rate-summary">
        
          <div className="this-week">
            <div className="percentage">
            
                <div className="circle">
                <div className="label" style={{paddingLeft:"110px",marginTop:"110px"}}>Total cost</div>
                </div>
            </div>
            
          </div>
          <div className="changed-from-last-week">
            <div className="triangle"></div>
            <div className="label"></div>
          </div>
        </div>
      </div>
    );
  };
export default Totalcost;