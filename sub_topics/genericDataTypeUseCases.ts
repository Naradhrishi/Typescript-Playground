function getFirst<T>(arr: T[]): T | null{
    if(arr.length == 0){
        return null;
    }else{
        return arr[0];
    }
}

console.log(getFirst([10, 20, 30]));
console.log(getFirst(["a", "b", "c"]));
console.log(getFirst([]));
