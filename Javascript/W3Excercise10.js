const extractIndex = (array, pullArray) => {
    let removed = [];
    let pulled = array.map((x, y) => (pullArray.includes(y) ? removed.push(x) : x))
    .filter((x, y) => !pullArray.includes(y));
    array.length = 0;
    pulled.forEach(element => array.push(element));
        return removed;
}

let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(extractIndex(arra1, [1, 3]));