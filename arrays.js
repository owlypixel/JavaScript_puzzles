const inventors = [
	{first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
	{first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
	{first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
	{first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
	{first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
	{first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
];

const guitarists = ['Jason, Becker', 'Marty, Friedman', 'Paul, Gilbert', 'Chick, Corea', 'Aldi, Meola', 'John, McLauglin', 'Chris, Impelliterri', 'Yngwie, Malmsteen', 'Randy, Rhoads', 'David, Micic', 'Paul, Wardingham'];

// filter the list of inventors for those who lived during 1500's

// variant 1
// const fifteen = inventors.filter(function(inventor){
// 	if(inventor.year >= 1500 && inventor.year <= 1600 ){
// 		return true;
// 	}
// });

// variant 2 - arrow function in one line
// const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1600))
// console.table(fifteen);

// Get an array of inventors first and last names

// const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(fullNames);

// Sort the inventors by birthdate oldest to youngest

// variant 1
// const ordered = inventors.sort(function(a, b){
// 	if(a.year > b.year){
// 		return 1
// 	} else {
// 		return -1
// 	}
// });
// console.table(ordered);

// variant 2 - arrow function and ternary operator
// const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

// How many years did all the inventors live?

// const totalYears = inventors.reduce((total, inventor) => {
// 	return total + (inventor.passed - inventor.year)
// }, 0)

// console.log(totalYears);

// Sort the inventors by years lived

// const oldest = inventors.sort((a, b) =>{
// 	const curGuy = a.passed - a.year;
// 	const nextGuy = b.passed - b.year;
// 	return curGuy > nextGuy ? -1 : 1
// })
// console.table(oldest);

// Create a list of coulevards in Paris that contains 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links.map( link => link.textContent).filter(street => street.includes('de')); 