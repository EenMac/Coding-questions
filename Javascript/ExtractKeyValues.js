function uniqueValues(string){
    let character = string;
    let uniql = "";

    for(var x=0; x < character.length; x++){
        if(uniql.indexOf(character.charAt(x)) == -1)
        {
            uniql += character[x];
        }   
    }return uniql;
}

console.log(uniqueValues("helloiloveplayingonmycomputer"))