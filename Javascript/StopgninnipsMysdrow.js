function spinWords(string){
    if(string === "Welcome"){
      var splitString = string.split("");
      var reverseString = splitString.reverse();
      var joinString = reverseString.join("");
      return joinString;
    }else{
      return string.split(' ').map(function(word){
      return (word.length > 4) ? word.split('').reverse().join('') : word;
      }).join(' ');
    }
  }

  console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
  console.log(spinWords("This is a test"), "This is a test");
  console.log(spinWords("This is another test"), "This is rehtona test");
  console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
  console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
  console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");