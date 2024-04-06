export const between = ((a: number, b:number):number[] => {
    if (a > b) throw new Error("Invalid inputs: param 'A' can't be bigger than param 'B'");

    const nums:number[] = [];
    for (let i:number = a; i <= b; i++) {
        nums.push(i);
    }

    return nums;
});