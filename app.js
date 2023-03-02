let myArr = [[1, 2],[3, 3]]

function loopArr(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          console.log(arr[i][j]);
        }
      }
}

let myArr2 = [[1,[3,4]],[3,[7,8]]]

function twoNum(a,b){
if(a > b){
    return a
    console.log(a)
} else (a < b) {
    return b
    console.log(b)
} else {
    return "equal"
}
}

twoNum(7,9)

function checkEqual(a,b){
    if (a === b){
        return 'They are equal';
    } else {
        return 'They are not equal'
    }
}

console.log(checkEqual(9,9))

console.log(checkEqual(4,5))