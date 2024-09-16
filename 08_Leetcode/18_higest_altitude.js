

var largestAltitude = function(gain) {
   let currentAltitude = 0
   let highestAltitude = 0

   for(let i = 0; i < gain.length; i++){
    currentAltitude += gain[i]
    highestAltitude = Math.max(highestAltitude, currentAltitude)
   }
   return highestAltitude
};
console.log(largestAltitude([7,6,-4,6,9]));
