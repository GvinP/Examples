import React from 'react';
import './App.css';
import {UncontrolledOnOff} from "./OnOff/UncontrolledOnOff";
import {OnOff} from "./OnOff/OnOff";
import {Accordion} from "./Accordion/Accordion";
import {UncontrolledAccordion} from "./Accordion/UncontrolledAccordion";
import {Rating} from "./Rating/Rating";
import {UncontrolledRating} from "./Rating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <UncontrolledOnOff/>
            <OnOff on={false}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <UncontrolledAccordion title={'List'}/>
            <Rating value={3}/>
            <UncontrolledRating/>
        </div>
    );
}

export default App;
