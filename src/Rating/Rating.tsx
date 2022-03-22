import React from 'react';
import style from "./Rating.module.css";
import starGold from "../starGold.svg";
import starGrey from "../starGrey.svg";

type RatingPropsType = {
    value: number
}
type StarPropsType = {
    selected: boolean
}

export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
};


const Star = (props: StarPropsType) => {
    if (props.selected) {
        return <img className={style.star} src={starGold} width={30} height={30}/>
    } else {
        return <img className={style.star} src={starGrey} width={30} height={30}/>
    }
};