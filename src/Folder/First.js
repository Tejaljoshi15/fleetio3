import React from "react";

const First = () => {
  return (
    <table className="vehicle"style={{ height: '250px', width: '300px' }}>
      <thead>
        <tr>
          <h5>Vehicle Status</h5>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Active</td>
          <td><button className="btn1" style={{borderRadius:"100%",background:"yellow"}}>11</button></td>
        </tr>
        <tr>
          <td>Inactive</td>
          <td><button className="btn2" style={{borderRadius:"100%",background:"red"}}>03</button></td>
        </tr>
        <tr>
          <td>In Shop</td>
          <td><button className="btn3" style={{borderRadius:"100%",background:"Green"}}>00</button></td>
        </tr>
      </tbody>
    </table>
  );
};

export default First;
