const name = Symbol();  
const person = {
  [name]: 'John Smith' 
};

console.log(person[name]); // John Smith

/*

  ::: Symbols + object[ property ] :::

    - when using 'Symbol' as a property, make sure to wrap it with '[ ]' like this '[name]'
    - Symbols are often used to identify object properties.
    - Often to avoid name clashing between properties, since no symbol is equal to another. 
    - we will see this in a later example about 'name clashing' 
*/
