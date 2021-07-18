function isLeapYear(year){
  if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
    return (year + " is a leap year");
  }
  else{
    return (year +  " is not a leap year");
  }
}

var checkYear  = isLeapYear(2020);
console.log(checkYear);