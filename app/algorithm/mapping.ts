/**
 *   @ author:  Abdallah Mohsen
 *   
**/

import { useGlobalContext } from "../Context/store";

export function mapping(station:string, mp:Map<string, number>){
    return mp.get(station);
}





