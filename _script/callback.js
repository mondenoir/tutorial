const data = { 
  name: 'Susan',
  age: 33
};

const greet = cb => cb(data);

greet(arg => {
  console.log('This is the 1st callback!');
  console.log(arg);
});

greet(arg => {
  console.log(`This is the 2nd callback!`);
  const { name, age } = data;
  console.log(`${name} is ${age}`);
})
