 const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  ];
  const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  ];
function getPostById(id){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const post = posts.find(post => post.id === id);
			if(post) {
				resolve(post)
			} else {
				reject(Error('No post was found!'))
			}
		}, 2000)
	})
}

function hydrateAuthor(post){
	return new Promise((resolve, reject) => {
		const authorDetails = authors.find(person => person.name === post.author);
		if(authorDetails){
			post.author = authorDetails;
			resolve(post);
		} else {
			reject(Error("No such author in the post")); 
		}
	});
}

getPostById(22)
	.then(post => {
		console.log(post);
		return hydrateAuthor(post);
	})
	.then(post => {
		console.log(post);
	})
	.catch(err => {
		console.error(err);
	})



	