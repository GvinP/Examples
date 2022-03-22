import React, {useState} from 'react';
import style from './OnOff.module.css'

export const UncontrolledOnOff = () => {
    let [on, setOn] = useState(false)

    return (
        <div>
            <div className={`${style.button} ${on? style.on : ''}`} onClick={()=>setOn(true)}>On</div>
            <div className={`${style.button} ${!on? style.off : ''}`} onClick={()=>setOn(false)}>Off</div>
            <div className={`${style.lamp} ${on? style.on : style.off}`}></div>
        </div>
    );
};

