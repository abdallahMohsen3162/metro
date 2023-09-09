

/**
 *    author:  Abdallah Mohsen
 *   
**/










export function reHash(Hash2:Map<number, string>, path:number[]) : string[]{
    let ret:string[] = [];
    for(let i=0;i<path.length;++i){
        ret.push(Hash2.get(path[i])!);
    }
    return ret;
}


