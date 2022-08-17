
function solution(num) {
    return num % 2 === 0 ? 'Even' : 'Odd'
}

console.log(solution(12))

function evenOrOdd(a) {
    if (a % 2 == 0) {
        console.log("number is even")
    } else {
        console.log("number is odd")
    }
}
evenOrOdd(409889)


function greeting(time, name) {
    if (time <= 0600) {
        console.log("Good night", name);
    } else if (time <= 1200) {
        console.log("Good morning", name);
    } else if (time <= 1500) {
        console.log("Good afternoon", name);
    } else {
        console.log("Good evening", name)
    }
 }     
greeting(2030, "Viviann");