function returnKeys(object){
    if(!isObject(object)){
        return [];
    }
    if (Object.keys){
        return Object.keys(object)
    };
    var keys = [];
    for(var key in object){
        if (_.has(object, key)){
            keys.push(key);
            return keys
        }
    }
}

function isObject(object){
    var type = typeof object;
    return type == 'function' || type == 'object' && !!object;
}

console.log(returnKeys({red: "Red", green: "Green", blue: "Blue"}))

// var Animal = {
//     name: "Lion",
//     age: 10,
//     food: "meat",
// }

// console.log(Object.values(Animal))