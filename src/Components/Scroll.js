import React from 'react';

const Scroll = (props) => {
   return(
      <div style={{overflowY:'scroll', boxShadow:'0 0 20px #fff', height:'500px'}}>
         {props.children}
      </div>
   );
}
export default Scroll;