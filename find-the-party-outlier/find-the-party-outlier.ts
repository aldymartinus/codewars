export function findOutlier(integers: number[]): number {
    const remainder = integers.map(num => Math.abs(num) % 2);
    const index = remainder.filter(num => num === 1).length === 1 ? remainder.indexOf(1) : remainder.indexOf(0);

    return integers[index];
}