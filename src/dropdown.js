import { React, useState } from 'react';
import Select from 'react-select';
import './dropdown.css';

function Dropdown ()
{
    
    const colors = [
        { label : 'Lime', 
        value : 'lime' }, 
        { label : 'Lavender', 
        value : 'lavender' }, 
        { label : 'Crimson',
         value : 'crimson' }, 
         { label : 'Darkblue', 
         value : 'darkblue' }, 
         { label : 'Teal', 
         value : 'teal' }, 
         { label : 'Rebecca Purple', 
         value : 'rebeccapurple' }, 
         { label : 'Ghost White', 
         value : 'ghostwhite' }, 
         { 
            label : 'Aqua Marine', 
         value : 'aquamarine' }, 
         { 
            label : 'Alice Blue', 
         value : 'aliceblue'
         } 

        ];
    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='cl'>
        <div className='dropdownWrapper'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1>Color Changer</h1>
            </center>
            
            <div className="dropdownContainer">
                <center>
                <Select options={colors} onChange={click} className='select' placeholder="Select "></Select>
                </center>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>
        </div>
    );
}
export default Dropdown;