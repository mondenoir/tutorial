// generator function
function* eachLetter(arr) {
  for (const item of arr) yield item;
}

// generator
const letters = eachLetter(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

// markup
const markup = str => document.querySelector('.wrapper').innerHTML += `<p>${str}</p>`;

// set + clear interval
const abcs = setInterval(() => {  
  const letter = letters.next();
  letter.done ? markup(`<span>Now I know my ABC</span>`) && clearInterval(abcs) : markup(letter.value); 
}, 500);
