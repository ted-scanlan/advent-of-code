
aDirections = ['R8','U5','L5','D3']
bDirections = ['U7','R6','D4','L4']



let calculateIntersection = (aDirections, bDirections) => {
  let currentACoords = [0,0]
  let currentBCoords = [0,0]

  let aLineCoords = []
  let bLineCoords = []

function executeJourney (wire) {


}
  for(let i = 0; i < aDirections.length; i ++) {
    let direction = aDirections[i][0]
    if(direction == "R") {
      for(let j = currentACoords[0]; j < (parseInt(currentACoords[0] + aDirections[i].slice(1))); j++ ) {
      aLineCoords.push([j, currentACoords[1]])
      }
      currentACoords[0] = currentACoords[0] + parseInt(aDirections[i].slice(1));
    }
    if(direction == "L") {
      for(let j = currentACoords[0]; j > (parseInt(currentACoords[0] - aDirections[i].slice(1))); j-- ) {
      aLineCoords.push([j, currentACoords[1]])
      }
      currentACoords[0] = currentACoords[0] - parseInt(aDirections[i].slice(1));
    }

    if(direction == "U") {
      for(let j = currentACoords[1]; j < (parseInt(currentACoords[1] + aDirections[i].slice(1))); j++ ) {
      aLineCoords.push([currentACoords[0], j])
      }
      currentACoords[1] = currentACoords[1] + parseInt(aDirections[i].slice(1));
    }

    if(direction == "D") {
      for(let j = currentACoords[1]; j >= (parseInt(currentACoords[1] - aDirections[i].slice(1))); j-- ) {
      aLineCoords.push([currentACoords[0], j])
      }
      currentACoords[1] = currentACoords[1] - parseInt(aDirections[i].slice(1));
    }


  }
  console.log(currentACoords);
  console.log(aLineCoords);


}
calculateIntersection(aDirections, bDirections)









let aCoords = [8,5]
let bCoords = [6,7]

let crossCoords = []

// format the directions then add to aCoords and bCoords

//e.g. we are at:

let aNext = [3,5]
let bNext = [6,3]

let aLineCoords = []
let bLineCoords = []

let matchCoords = []

 // if L
 for(let i = aCoords[0]; i >= (aCoords[0] - 5); i-- ) {
   aLineCoords.push([i, aCoords[1]])
 }

 //if R
 // for(let i = aCoords[0]; i <= (aCoords[0] + 5); i++ ) {
 //   aLineCoords.push([i, aCoords[1]])
 // }

//if D
 for(let j = bCoords[1]; j >= (bCoords[1] - 4); j--) {
   bLineCoords.push([bCoords[0], j])
 }

for(let x = 0; x < bLineCoords.length; x++) {  // bline is the shortest
  for(let y = 0; y < bLineCoords.length; y++) {

    if((aLineCoords[x][0] == bLineCoords[y][0]) && (aLineCoords[x][1] == bLineCoords[y][1])) {
      console.log("theres a match");
       matchCoords.push(aLineCoords[x]);

      // console.log("theres a match");
      // console.log([x, y]);
       // return "dick"
    }
  }
}
// console.log(matchCoords);
