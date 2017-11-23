//Green Alien
var x = 5000;

//Red Alien
var y = 3000;

//Blue Alien
var z = 2000;
var warning;
function meanMachine (green, red, blue) {
  if ((x + y + z) == 10000) {
      warning = "There is 10,000 aliens.";
      
  } if (x > 5000) {
      warning = "MOTHER OF GOD, not the green ones!";
      
  } if ((x + y) > 8000) {    
      warning = "DOOOOOM!";
      
  } if ((y + z) < 3000) {
    warning = "We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!";
      
  }
} 
meanMachine(x, y, z);
console.log(warning);