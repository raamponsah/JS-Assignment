// excercies on Array
// generate an array of fruits
// always find the last fruit
let fruits = ["Pear","Pine","Mango","Cherry","Watermelon"]
let lastFruit = fruits[fruits.length-1] ///fruits[4]//output: watermelon
console.log(lastFruit)

// 2
// With this array, always find the middle item
// [Hint] write a function for this ensure it is for all odd arrays
// ["a", "b", "c", "d", "e"]
let letters = ["a", "b", "c", "d", "e","f"]

function findMiddleItem(arr){
        let arrLength = arr.length
        if(arrLength % 2 == 0){
            console.log("It is even ")
        }else{
            let middlePositionValue = Math.floor(arr.length/2)
            console.log(middlePositionValue)
            console.log(arr[middlePositionValue])
        }
       
}

// findMiddleItem(letters);



// 3
//  remove the last item and place it as the first item
// [Hint] you'll need a function
// ["a", "b", "c", "d", "e"]

function switchLastWithFirst(arr){
    let last = arr[arr.length-1]
    let first =arr[0]
    arr[0] = last;
    arr[arr.length-1] = first
    console.log(arr)
}

switchLastWithFirst(["Pear","Pine","Mango","Cherry","Watermelon"])

// 4
// create an object with two arrays; one of girl names and the other boy names
// write a function that pair the names up into another array
// You''ll need one array with sub arrays at the end

