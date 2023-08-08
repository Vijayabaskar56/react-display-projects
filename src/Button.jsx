
import { useState } from 'react'

export function Button() {
    
    const [color, setColor] = useState('#000');

    const getRgb = () => Math.floor(Math.random() * 256)

    const rgbToHex = (r,g,b) => 
        '#' +
        [r,g,b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('')


    const handleGenerate = () => {
        const color = {
            r: getRgb(),
            g: getRgb(),
            b:getRgb(),
        }
        
        setColor(rgbToHex(color.r,color.g,color.b));
    }
    return (
        <div className="container" style={{backgroundColor: color}}>
        <button style={{color: color}} onClick={ handleGenerate }>
            {color}
        </button>
        </div>
    )
}