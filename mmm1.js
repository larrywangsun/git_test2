let a = [123, 23, 45, 56];
let b = [23, 41, 24, 65];

let c = [...a, ...b];

c.sort((a, b) => a - b)
