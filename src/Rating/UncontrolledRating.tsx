import React, {useState} from 'react';
import starGold from '../starGold.svg'
import starGrey from '../starGrey.svg'
import style from './Rating.module.css'

type StarPropsType = {
    selected: boolean
    callBack: () => void
}

export const UncontrolledRating = () => {
    let [value, setValue] = useState(0)

    const onClickHandle = (value: number) => {
        setValue(value)
    }
    return (
        <div>
            <Star selected={value > 0} callBack={() => onClickHandle(1)}/>
            <Star selected={value > 1} callBack={() => onClickHandle(2)}/>
            <Star selected={value > 2} callBack={() => onClickHandle(3)}/>
            <Star selected={value > 3} callBack={() => onClickHandle(4)}/>
            <Star selected={value > 4} callBack={() => onClickHandle(5)}/>
        </div>
    );
};


const Star = (props: StarPropsType) => {
    const onClickHandle = () => {
        props.callBack()
    }
    return props.selected ?
        <img className={style.star} src={starGold} width={30} height={30} onClick={() => onClickHandle()}/>
        : <img className={style.star} src={starGrey} width={30} height={30} onClick={() => onClickHandle()}/>
};