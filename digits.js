const num = 876
let sum = 0
let first = Math.floor(num/100)
let second = Math.floor(num/10)-Math.floor(num/100)*10
let third = num- first*100 - second*10
sum = first+second + third;
console.log(sum)


