import React, { useState } from "react";

const App = () =>
{
    let currentTime = new Date().toLocaleTimeString();
    const [ctime,updatetime]= useState(currentTime);

    const Gtime = () =>
    {
        currentTime = new Date().toLocaleTimeString();
        updatetime(currentTime);
    };



    return(
        <div className = "conatiner" >
            <h1>{currentTime}</h1>
            <button onClick={Gtime}>Get Time</button>
        </div>
        

    );
};

export default App;