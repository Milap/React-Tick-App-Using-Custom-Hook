import React, { useState } from 'react';
import useInterval from '../hooks/Interval';

const Timer = () => {
    let [time, setTime] = useState(0);

    useInterval(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <>
            <div className='container my-3'>
                <h2>Seconds: {time}</h2>
            </div>
        </>);
}


export default Timer;