export function isUpperCase(str: string):boolean {
    return(str.match(/[a-z]/g) == null)
}