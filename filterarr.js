 function filter(arr){
    let arr =[5,8,0,7,0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]=0){
            delete arr[i];
        }
    }
    return arr;
 }
 console.log(arr);