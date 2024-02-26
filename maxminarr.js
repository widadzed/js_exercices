function maxmin(arr){
    let arr =[1,5,8,3];
    let min=arr[0];max=arr[0];
    if (arr.length===0){
        return undefined;
    }
    for(let i=1;i<arr.length;i++){
        if (arr[i]<min){
            return min =arr[i];
        }else if (arr[i]>max){
            return max = arr[i];

        } 
    }
}
