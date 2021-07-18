// Problem 1
function feetToMile(feet){
  if( feet > 0){
    const mile = feet / 5280 ;
    return mile;
  }
  else{
    return "The value of feet is never negative. So that's it can't be calculated!";
  }
  
}


const result = feetToMile(2000);
console.log(result);




//Problem 2
function woodCalculator(chair,table,bed){
  var totalWood = chair * 1 + table * 3 + bed * 5;
  return totalWood;
}

var result2 = woodCalculator(3,5,9);
console.log(result2);


//Problem 3
function brickCalculator(floor){
  if( floor <= 10){
    return floor * 15 * 1000;
  }
  if( floor > 10 && floor <= 20){
    var extra = floor - 10;
    return (10 * 15 * 1000 + (extra * 12 * 1000))
  }
  if( floor > 20){
    var extra = floor - 20;
    return ( 10 * 15 * 1000 + 10 * 12 * 1000 + (extra * 10 * 1000) )
  }
}

var result3 = brickCalculator(9);
console.log(result3);



//Problem 4
function tinyFriend(names){
  return names.sort((a, b) => a.length - b.length)[0];
}

var smallestName = tinyFriend(["Sajib", "Rafi", "Mou"]);
console.log(smallestName);