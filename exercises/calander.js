function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapYear(1900));
console.log(leapYear(1950));
console.log(leapYear(1999));
console.log(leapYear(2001));
console.log(leapYear(2000));
console.log(leapYear(2001));
console.log(leapYear(2012));
