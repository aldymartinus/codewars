const summation = ((num:number) => {
    let sum:number = 0;
    for (let i:number = 1; i <= num; i++) {
        sum+=i;
    }

    return sum;
});