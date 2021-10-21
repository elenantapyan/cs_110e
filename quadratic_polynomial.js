

const a = 0
const b = 4
const c = 2

let d = b**2-4*a*c

if (a !== 0){
    if (d > 0){
        let x1 = (-b+d**1/2)/2*a
        let x2 = (-b-d**1/2)/2*a
        console.log ("X1 = " + x1 + " and X2 = " + x2)
    }
    else if (d === 0){
        let x = -b/2*a
        console.log ("X = " + x)
    }
    else {
        console.log ("No Answer")
    }
}
else {
    console.log ("No Answer")
}