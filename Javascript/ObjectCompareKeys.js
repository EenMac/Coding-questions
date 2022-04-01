function compare(obj1, obj2){
    for (let key in obj1){
        if(!(key in obj2)){
            return false;
        }if(obj1[key]!==obj2[key]){
            return false;
        }
    }
    return true;

}

console.log(compare(
    {
        "apples": "red",
        "oranges": "orange",
    },
    {
        "apples": "red",
        "oranges": "orange",
    }))