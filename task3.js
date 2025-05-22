let side1 = 11
let side2 = 11
let side3 = 11

console.log("Below is the length of side of a triangle, I will determine the type of triangle.")
console.log()

console.log("Side one = " + side1)
console.log("Side two = " + side2)
console.log("Side three = " + side3)
console.log()

if(side1 === side2 && side1 ===3){
  console.log("This is a right angle triangle.")
} 
else if (side1 === side2 || side1 === side3 || side2 === side3){
  console.log("This is a right angle triangle.")
}
else{
  console.log("This is a strange triangle")
}
