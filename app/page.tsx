"use client";
import Link from 'next/link'
import { main_algorithm } from './algorithm/algorithm';
import { useEffect, useState } from 'react';
import { reHash } from './algorithm/rehashing';
import Pathcomponent from './component/Pathcomponent';
import { mapping } from './algorithm/mapping';
import { Repath } from './algorithm/repath';
import { useGlobalContext } from './Context/store';




export default function Home() {


  
  const {Graph,Hash1,Hash2, arr, color_map} = useGlobalContext()
  const [start , setstart]= useState("El-Mounib");
  const [end , setend]= useState("El-Mounib");

  const [path , setpath] = useState<string[]>([]);
  const fill = () => {
    setpath([]);
    
    let st = mapping(start, Hash1);
    let en = mapping(end, Hash1);

    let p = main_algorithm(st!, en!, Graph);
    let p2 = Repath(p , color_map);
    let rehashed = reHash(Hash2, p);
    let final = Repath(rehashed, color_map);
    setpath([]);
    for(const i of final){
      setpath((prev) => [...prev, i])
    }
  }

  
  
  return (
    <div>
      {
        // <><h1>{Hash1.get(start)}</h1><h1>{Hash1.get(end)}</h1></>
      }
      <div className='form'>
      <select onChange={(e) => setstart(e.target.value)}>
        {
         arr.map((el, idx) => {
          return(
            <option value={el} key={idx}>
               {el}
            </option>
          )
         }) 
        }
      </select>
      
      <select  onChange={(e) => setend(e.target.value)}>
        {
         arr.map((el, idx) => {
          return(
            <option value={el} key={idx}>
              {el}
            </option>
          )
         }) 
        }
      </select>
        <button onClick={()=>fill()}>Go</button>

      </div>
      <br /><br /><br />
      
      {
        path.length?(
          <  Pathcomponent path={path}/>
        ):(
          ""
        )
      }
   

    </div>
  )
}
