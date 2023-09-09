"use client";
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context/store';
interface Path{
    path:string[]
}

export default function Pathcomponent({path}:Path) {
    const [realtimepath , setter] = useState<string[]>([]);
    const [pointer , setpointer] = useState(0);
    const {color_map} = useGlobalContext();
    useEffect(() => {
        const timer = setInterval(()=>{
            setter((prev) => [...prev, path[pointer]]);
            setpointer((p) => p+1);
        }, 50);
        if(pointer >= path.length){
            clearInterval(timer);
        }
        return () => {
            clearInterval(timer);
        }  
    })  

    
  return (
    <div className='station-container'> 
      {
        realtimepath.map((el,i) => {
            return(

                <div key={el} className={`station-${color_map.get(el)}`}>
                    {el}
                </div>

            )
        })
      }
    </div>
  )
}
