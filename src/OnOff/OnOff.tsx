import React, {useState} from 'react';
import style from './OnOff.module.css'

type PropsType = {
    on: boolean
}

export const OnOff = (props: PropsType) => {
    return (
        <div>
            <div className={`${style.button} ${props.on? style.on : ''}`}>On</div>
            <div className={`${style.button} ${!props.on? style.off : ''}`}>Off</div>
            <div className={`${style.lamp} ${props.on? style.on : style.off}`}></div>
        </div>
    );
};

