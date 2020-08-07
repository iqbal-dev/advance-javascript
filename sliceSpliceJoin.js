const array = [1, 2, 3, 45, 5, 6, 7, 8];
const slice = array.slice(5, 7);

const splice = array.splice(2, 4);
console.log(array);
console.log(splice);
console.log(slice);
const sliceOfSplice = slice.splice(0, 0, 1, 2, 3, 4, 5);
const sliceOfSpliceOfjoin = slice.join(", ");
console.log(sliceOfSpliceOfjoin);