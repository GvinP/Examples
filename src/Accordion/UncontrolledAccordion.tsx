import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}
type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(false)
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.title} callBack={onClickHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h1 onClick={() => props.callBack()}>-- {props.title} --</h1>
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