function wordsUpperCase(str){

    let arr = str.toUpperCase().split(/\W+/).filter(x=>x!='');
   console.log(arr.join(", "));

}

wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');