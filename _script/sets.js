const generator = () => {
  const markup = name => document.querySelector('.wrapper').innerHTML += `<p>My name is ${name}</p>`;
  const names = new Set(['Susan', 'Linda', 'Candy', 'Jane', 'John']);
  const namesGen = names.values(); 
  for (const name of namesGen) markup(name); 
};
 
generator();  
