



/**
 *    @ author:  Abdallah Mohsen
 *   
**/







let path:number[];
let vis = new Array<boolean>(100);
let found : boolean = false;

function dfs(cur:number, end:number, cur_path:number[], Graph:number[][]){
    if(found) {return;}
    vis[cur] = true;
    if(cur == end){
        path = cur_path;
        found = true;
        return;
    }
    for(let i=0;i<Graph[cur].length;++i){
        if(vis[Graph[cur][i]] == false){
            dfs(Graph[cur][i], end,[...cur_path,Graph[cur][i] ], Graph);
        }
    }
}
let parents = new Array<number>(100);

function BFS(start:number, end:number, Graph:number[][]){
    let cur = start; 
    let q =[cur];
    vis[cur] = true;

    while(q.length != 0){
        
        if(cur == end){
            break;
        }
        cur = q[q.length-1];
        q.pop();
        vis[cur] = true;
        for(let i=0;i<Graph[cur].length;++i){
            if(!vis[Graph[cur][i]]){
                
                q = [Graph[cur][i], ...q];
                parents[Graph[cur][i]] = cur;
            }
        }
    }


}


// export function main_algorithm(start:number, end:number, Graph:number[][]){
//     for(let i=0;i<100;++i)
//         vis[i] = false;
    
//     dfs(start,end,[start], Graph);
//     for(let i=0;i<100;++i)
//         vis[i] = false;
//     return path;
// }



export function main_algorithm(start:number, end:number, Graph:number[][]){
    for(let i=0;i<100;++i)
        vis[i] = false;
    
    BFS(start,end, Graph);
    for(let i=0;i<100;++i)
        vis[i] = false;
    let i = end;
    let ret = new Array();
    while(start != i){
        ret.push(i);
        i = parents[i];
    }
    ret.push(start);
    ret.reverse();

    
    return ret;
}

