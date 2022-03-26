import React from 'react';
import style from './OnOff.module.css'

type PropsType = {
    on: boolean
    onClick: (value: boolean)=> void
}

export const OnOff = (props: PropsType) => {
    return (
        <div>
            <div onClick={()=>props.onClick(props.on)} className={`${style.button} ${props.on? style.on : ''}`}>On</div>
            <div onClick={()=>props.onClick(props.on)} className={`${style.button} ${!props.on? style.off : ''}`}>Off</div>
            <div className={`${style.lamp} ${props.on? style.on : style.off}`}></div>
        </div>
    );
};

