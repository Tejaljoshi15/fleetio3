import React from "react";

const Header =() =>{
    return(

        <div className="ui-fixed-menu">
           <div className="ui-container-center">
            <h2>My Dashboard:</h2>
            </div>
            <div className="search-box">
            <div className="search">
                <input type="text" defaultValue="All Group"></input>
            </div>
            <div className="box">
               <img className="box-a" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknXPAlzcu3hpgKYZ-Olaj-9IxgNcCYjXwDQ&usqp=CAU" height="20px" width="20px"></img>

            </div>

             <div className="box2">
                <img className="box-b" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwcuAF12HdA9HzolKhtxODJ3sCgRH07jG9w&usqp=CAU" height="20px" width="20px"></img>
             </div>

             </div>

        </div>
    )
}
export default Header;