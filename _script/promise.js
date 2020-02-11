// data
const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

// promise + flow control 
const getPostById = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(post => post.id === id);
      post ? resolve(post) : reject('ERROR! No id is found!');
    }, 200);
  });
};

const hydrateAuthor = post => {
  return new Promise((resolve, reject) => {
    const authorDetails = authors.find(author => author.name === post.author);
    authorDetails ? (post.author = authorDetails) && resolve(post) : reject('ERROR!, No author is found!');
  });
};

getPostById(2)
  .then(post => hydrateAuthor(post))
  .then(post => console.log(post))
  .catch(message => console.error(message)); // {title: "CSS", author: {…}, id: 2}
