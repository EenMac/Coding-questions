const dig = (obj, target) =>
// checks if the target is in object
  target in obj
//   if it is---do this
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
        // if it isn't --- return undefined
      }, undefined);

const data = {
    level1: {
        level2: {
            level3: 'some data',
            level4: '',

        }
    }
};
console.log(dig(data, "level2"))
console.log(dig(data, "level3"))
console.log(dig(data, "level4"))
console.log(dig(data, "level5"))