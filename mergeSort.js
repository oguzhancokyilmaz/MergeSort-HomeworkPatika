let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

let sort_left = [16,21,11]
let sort_right = [8,12,22]


console.log(merge(sort_left,sort_right))

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}