
const array = [1, 2,'iqbal','iqram','jomman', 3, 4, 5, 6, 7, 8, 9];
const newArray = []
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > 5) {
        break;
    }
    newArray.push(element);
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element =='string') {
        continue;
    }
    newArray.push(element);
}
console.log(newArray);