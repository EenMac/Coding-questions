function sameCase(a, b) {
    if (a.toUpperCase() === a.toLowerCase()|| b.toUpperCase() === b.toLowerCase()){
        return -1
    } else if( a === a.toLowerCase() && b ===b.toLowerCase() || a===a.toUpperCase() && b === b.toLowerCase()){
        return 1
    } else{
        return 0
    }
}
console.log(sameCase("a", "g"))