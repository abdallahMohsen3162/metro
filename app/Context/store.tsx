'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
let Graph = new Array<any>(100);

for(let i=0;i<1000;i++){
    Graph[i] = new Array(0);
}

const edge_list:string[][] = [
    ["El-Mounib", "Sakiat Mekki"],
    ["Giza", "Omm el Misryeen"],
    ["Sakiat Mekki","Omm el Misryeen"],
    ["Giza", "Faisal"],
    ["Faisal", "Cairo university"],
    ["Bolak Al-Dakror", "Cairo university"],
    ["Gamaet Al-Dowal","Bolak Al-Dakror"],
    ["Imbaba", "Sudan"],
    ["Al-Bohy", "Imbaba"],
    ["Al-Kawmeiah", "Al-Bohy"],
    ["Ring Road","Al-Kawmeiah"],
    ["Gamaet Al-Dowal", "Wadi Al-Nile"],
    ["Rod Al-Farag Corridor", "Ring Road"],
    ["Ain Helwan","Helwan"],
    ["Helwan University", "Ain Helwan"],
    ["Wadi Hof","Helwan University"],
    ["Hadayeq Helwan","Wadi Hof"],
    ["El-Maasara","Hadayeq Helwan"],
    ["Tora El-Asmant","El-Maasara"],
    ["Tora El-Asmant","Kozzika"],
    ["Tora El-Balad","Kozzika"],
    ["Tora El-Balad", "Thakanat El-Maadi"],
    ["Thakanat El-Maadi", "Maadi"],
    ["Hadayeq El-Maadi", "Maadi"],
    ["Hadayeq El-Maadi", "Dar El-Salam"],
    ["Dar El-Salam", "El-Zahraa"],
    ["Mar Girgis", "EL malek elsaleh"],
    ["EL malek elsaleh","AlSayyeda Zeinab"],
    ["Saad Zaghloul", "AlSayyeda Zeinab"],
    ["Sadat","Saad Zaghloul"],
    ["Opera", "Sadat"],
    ["Dokki", "Opera"],
    ["El Behoos","Dokki"],
    ["El Behoos", "Cairo university"],
    ["Dar El-Salam", "El-Zahraa"],
    ["Mar Girgis", "El-Zahraa"],
    ["Sadat", "Naguib"],
    ["Rod Al-Farag Corridor", "Ring Road"],
    ["Al-Kawmeiah","Ring Road"],
    ["Al-Kawmeiah","Al-Bohy"],
    ["Imbaba","Al-Bohy"],
    ["Imbaba","Sudan"],
    ["Al-Tawfikya","Kit Kat"],
    ["Al-Tawfikya","Wadi Al-Nile"],
    ["Kit Kat","Sudan"],
    ["Kit Kat","Zamalek"],
    ["Maspero","Zamalek"],
    ["Maspero","Naser"],
    ["Ataba","Naser"],
    ["Urabi","Naser"],
    ["Urabi","Al Shohadaa"],
    ["Sadat","Naser"],
    ["Adly Mansour", "Hikestep"],
    ["Omar ibn Al-khattab", "Hikestep"],
    ["Omar ibn Al-khattab", "Kebaa"],
    ["Hisham Barakat", "Kebaa"],
    ["Hisham Barakat", "El-Nozha"],
    ["El-Shams Club", "El-Nozha"],
    ["El-Shams Club", "Alf Masken"],
    ["Heliopolis Square", "Alf Masken"],
    ["Heliopolis Square", "Alf Masken"],
    ["Heliopolis Square", "Haroun"],
    ["Al Ahram", "Haroun"],
    ["Al Ahram", "Koleyet El Banat"],
    ["Cairo Stadium", "Koleyet El Banat"],
    ["Cairo Stadium", "Fair Zone"],
    ["Abbassia", "Fair Zone"],
    ["Abbassia", "Abdou Pasha"],
    ["El Geish", "Abdou Pasha"],
    ["El Geish", "Bab El Shaaria"],
    ["Ataba", "Bab El Shaaria"],
    ["Ataba", "Naguib"],
    ["Ezbet El-Nakhl", "El-Marg"],
    ["Ezbet El-Nakhl", "Ain Shams"],
    ["El-Matareyya", "Ain Shams"],
    ["El-Matareyya", "Helmeyet El-Zaitoun"],
    ["Hadayeq El-Zaitoun", "Helmeyet El-Zaitoun"],
    ["Hadayeq El-Zaitoun", "Hammamat El-Qobba"],
    ["Kobri El-Qobba", "Hammamat El-Qobba"],
    ["Kobri El-Qobba", "Manshiet El-Sadr"],
    ["El-Demerdash", "Manshiet El-Sadr"],
    ["El-Demerdash", "Ghamra"],
    ["El-Demerdash", "Ghamra"],
    ["Al Shohadaa", "Ghamra"],


]
const colors:number[] = [
    1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,
    2,2,2,3,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3
    ,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
    ,2,2,2,2,2,2,2,2,2,1,1,3,3,3,3,3,3,3,3,3
    ,1,1,1,3,3,3,3,3,3,3,3,3
]
const arr:string[] = [
    "El-Mounib","Sakiat Mekki","Omm el Misryeen", "Giza",
    "Faisal","Cairo university", "Bolak Al-Dakror", "Gamaet Al-Dowal", 
    "Wadi Al-Nile","Al-Tawfikya", "Rod Al-Farag Corridor",
    "Ring Road","Al-Kawmeiah", "Al-Bohy", "Imbaba",
    "Sudan", "Kit Kat", "Zamalek","Maspero", 
    "Naser","Urabi","Al Shohadaa","Massara","Road El-Farag",
    "Sainte Teresa","Khalafawy","Mezallat","Koliet El-Zeraa",
    "Shobra El Kheima","Ghamra","El-Demerdash","Manshiet El-Sadr",
    "Kobri El-Qobba","Hammamat El-Qobba","Saray El-Qobba","Hadayeq El-Zaitoun",
    "Helmeyet El-Zaitoun",
    "El-Matareyya","Ain Shams","Ezbet El-Nakhl","El-Marg",
    "New El-Marg","Adly Mansour","Hikestep","Omar ibn Al-khattab",
    "Kebaa","Hisham Barakat","El-Nozha",
    "El-Shams Club","Alf Masken","Heliopolis Square",
    "Airport","Sheraton","Military Academy",
    "Al-Hegaz 2","Al-Hegaz Square","Haroun",
    "Al Ahram","Koleyet El Banat","Cairo Stadium",
    "Fair Zone","Abbassia","Abdou Pasha",
    "El Geish",
    "Bab El Shaaria","Ataba",
    "Naguib",
    "Sadat",
    "Saad Zaghloul",
    "AlSayyeda Zeinab",
    "Mar Girgis",
    "El-Zahraa",    
    "Dar El-Salam",
    "Hadayeq El-Maadi",
    "Maadi",
    "Thakanat El-Maadi",
    "Tora El-Balad",
    "Opera",
    "Dokki",
    "El Behoos",
    "Kozzika",
    "Tora El-Asmant",
    "El-Maasara",
    "Hadayeq Helwan",
    "Wadi Hof",
    "Helwan University",
    "Ain Helwan",
    "Helwan",
    "EL malek elsaleh"
];

const color_map = new Map<string, number>();
const Hash1 = new Map<string, number>();
const Hash2 = new Map<number, string>();

for(let i=0;i<arr.length; ++i){
    color_map.set(arr[i], colors[i]);
}



for(let i=0;i<arr.length; ++i){
    Hash1.set(arr[i], i);
    Hash2.set(i, arr[i]);
};





for(let i=0;i<edge_list.length;i++){

    
    let v = Hash1.get(edge_list[i][0]);
    let u = Hash1.get(edge_list[i][1]);
    
    
    if(u != undefined && v != undefined){

        Graph[v].push(u);
        Graph[u].push(v);
    }
    
}

interface ContextProps {
    Graph:number[][],
    Hash1:Map<string, number> ,
    Hash2:Map<number, string> ,
    arr:string[],
    color_map:Map<string, number>
};


const GlobalContext = createContext<ContextProps>({
    Graph:[],
    Hash1:Hash1,
    Hash2:Hash2,
    arr:arr,
    color_map
});

export const GlobalContextProvider = ({ children }:any) => {
    
    return (
        <GlobalContext.Provider value={{Graph,Hash1,Hash2,arr, color_map}}>
            {children}
        </GlobalContext.Provider>
    )
};




export const useGlobalContext = () => useContext(GlobalContext);