

let st = new Set<string>([
    "Cairo university",
    "Sadat",
    "Ataba",
    "Naser",
    "Al Shohadaa",
])



export function Repath(path:string[],color_map:Map<string, number>){
    let n = path.length;
    let newPath = [];
    
    for(let i=0;i<n;i++){

        if(i+1 < n && i-1 >= 0 && st.has(path[i])){
            let nextcolor = color_map.get(path[i+1]);
            let curcolor = color_map.get(path[i]);
            if(nextcolor != curcolor){
                newPath.push(path[i]);
                newPath.push(`changing to line ${color_map.get(path[i+1])}`);
                continue;
            }

        }
        newPath.push(path[i])

        
    }
    return newPath
}



