export function correct(s:string):string {
    while (s.includes('0') || s.includes('1') || s.includes('5')) {
        s = s.replace("0", 'O')
             .replace("5", "S")
             .replace("1", "I")
    }
    return s
}