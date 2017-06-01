import { uniq } from 'lodash';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './my_modules/config';
console.log(apiKey, url);
console.log(sayHi('owlypixel'));

const ages = [1,5,43,52];

console.log(uniq(ages));
