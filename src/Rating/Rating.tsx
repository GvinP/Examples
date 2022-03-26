import React from 'react';
import style from "./Rating.module.css";
import starGold from "./starGold.svg";
import starGrey from "./starGrey.svg";
import {RatingValueType} from "../App";

type RatingPropsType = {
    value: number
    callBack: (value: RatingValueType)=>void
}
type StarPropsType = {
    selected: boolean
    callBack: ()=>void
}

export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star selected={props.value > 0} callBack={()=>props.callBack(1)}/>
            <Star selected={props.value > 1} callBack={()=>props.callBack(2)}/>
            <Star selected={props.value > 2} callBack={()=>props.callBack(3)}/>
            <Star selected={props.value > 3} callBack={()=>props.callBack(4)}/>
            <Star selected={props.value > 4} callBack={()=>props.callBack(5)}/>
        </div>
    );
};


const Star = (props: StarPropsType) => {
    return <img onClick={props.callBack} className={style.star} src={props.selected? starGold : starGrey} width={30} height={30}/>
};