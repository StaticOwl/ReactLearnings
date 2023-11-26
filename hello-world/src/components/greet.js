//Functional Component

import React from "react";

// function Greet() {
//   return <h1>This is the start.</h1>;
// }

export const Greet = ({name}) => {
    // console.log(props);
    return (
        <div>
            <h1>This is the start, {name.firstName}.</h1>
            {/*{children}*/}
        </div>
    )
};

// export default Greet;
