
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
function gradedef(grades){


let lowest =grades[0];
let highest =grades[0];
// your code goes here
for (let i =0; i< grades.length ;i++) {
    if (grades[i]>highest)
    highest=grades[i];
    if (grades[i]<lowest)
    lowest=grades[i];
}
console.log(highest- lowest);
}
gradedef(grades);

function median(grade) {
    let size = Math.floor(grade.length/2);
    let newarr = [...grade].sort((a, b) => a - b);
    return newarr[size];

}
console.log(median(grades));

function defhalf(grades) {
    let lowest =grades[grades.length/2];
let highest =grades[grades.length/2];
for (let i =grades.length/2; i< grades.length ;i++) {
    if (grades[i]>highest)
    highest=grades[i];
    if (grades[i]<lowest)
    lowest=grades[i];
}
console.log(highest - lowest);

}
defhalf(grades);
