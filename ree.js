//Green Alien
var x = 6500;

//Red Alien
var y = 1501;

//Blue Alien
var z = 1999;
var warning;
function meanMachine (green, red, blue) {
  if ((x + y + z) == 10000) {
      console.log("There is 10,000 aliens.");
      
  } if (x > 5000) {
      console.log("MOTHER OF GOD, not the green ones!");
      
  } if ((x + y) > 8000) {    
      console.log("DOOOOOM!");
      
  } if ((y + z) < 3000) {
      console.log("We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!");
      
  }
} 
meanMachine(x, y, z);
