import React, { useState }  from 'react'; 


function Practicehook1() { 

    let [변하는값,값을바꾸기위한함수] = useState(1);

    const handleUpdate = () => {
        if (변하는값 === 12) {
            값을바꾸기위한함수(1);
        } else {
            값을바꾸기위한함수(변하는값 + 1);
        }
      };

    return(
    <div>
    <div>현재시각 : {변하는값}시 </div>
    <button onClick={handleUpdate}>Update</button> 
    </div>   
    )
};  

export default Practicehook1;