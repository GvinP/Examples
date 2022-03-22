import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}
export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h1>-- {props.title} --</h1>
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