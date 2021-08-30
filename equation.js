const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
let root = b*b -4*a*c;
solutionA = (-b + Math.sqrt(root))/2*a
solutionB =(-b - Math.sqrt(root))/2*a
console.log(solutionA,solutionB)
