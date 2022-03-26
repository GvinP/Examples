import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    callBack: () => void
}
type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}
export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title} callBack={props.callBack}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h1 onClick={props.callBack}>-- {props.title} --</h1>
        </div>
    );
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}