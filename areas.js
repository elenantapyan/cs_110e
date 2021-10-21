

const height = 6
const base = 8
const lenght = 6
const width = 4

let areaTri = height * base / 2
let areaRec = lenght * width

if (areaTri > areaRec){
    console.log ("The triangle has a bigger area!")
}
else if (areaTri < areaRec) {
    console.log ("The rectangle has a bigger area!")
}
else {
    console.log ("The areas of the triangle and rectangle are equal")
}