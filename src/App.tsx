import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./OnOff/UncontrolledOnOff";
import {OnOff} from "./OnOff/OnOff";
import {Accordion} from "./Accordion/Accordion";
import {UncontrolledAccordion} from "./Accordion/UncontrolledAccordion";
import {Rating} from "./Rating/Rating";
import {UncontrolledRating} from "./Rating/UncontrolledRating";

export type RatingValueType = 0|1|2|3|4|5

function App() {
    let [on, setOn] = useState<boolean>(false)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [ratingChange, setRatingChange] = useState<RatingValueType>(0)
    return (
        <div className="App">
            {/*<UncontrolledOnOff/>*/}
            <OnOff on={on} onClick={()=>setOn(!on)}/>
            <Accordion title={'Menu'} collapsed={accordionCollapsed} callBack={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<UncontrolledAccordion title={'List'}/>*/}
            <Rating value={ratingChange} callBack={setRatingChange}/>
            {/*<UncontrolledRating/>*/}
        </div>
    );
}

export default App;
