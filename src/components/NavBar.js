import React from 'react';


const NavBar = () => {
  return (
      <>
          <div style={{ display: 'flex', justifyContent:'space-between', backgroundColor:'blue'}}>
             
              <div style={{ display: 'flex' }}><h1>Redux ToolKit</h1>
                  <div style={{margin:'35px'}}>Products</div></div>
              <div style={{display:'flex',margin:'35px'}}>My Bag</div>
         </div>
 </>
  );
}

export default NavBar;
