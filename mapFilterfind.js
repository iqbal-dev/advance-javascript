const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(x => x / 2);
console.log(result);
console.log(numbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 89];
const result = numbers.filter(x => x > 4);
console.log(result);


const value = ['10', 10, 45, '34'];
const result = value.map(x => parseInt(x));
console.log(result);

const map = Array.prototype.map;
const a = map.call('Md Iqbal Hossain', x => x.charCodeAt(0));
console.log(a);


const string = 'iqbal';
const result = Array.prototype.map.call(string, x => x.charCodeAt(0));
console.log(result)

const numbers = [2, 23, 345, 46, 56, 456, 78, 90];
const result = numbers.filter(x => x % 2 == 0).map(x => x * 2).find(x => x==156);
console.log(result);




