const arr = ['5', '0', 9, 3, 2, 1, '9', 6, 7];

const sumMix = x => {
    return +x.reduce((acc, curr) => parseInt(acc) + parseInt(curr));
};

console.log((sumMix(arr)));