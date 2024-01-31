let date = new Date();

//getUTCDate()
console.log(date.getUTCDate());

//getUTCDay()
console.log(date.getUTCDay());

//getUTCFullyear()
console.log(date.getUTCFullYear());

//getUTCHours()
console.log(date.getUTCHours());

//getUTCMinutes()
console.log(date.getUTCMinutes());

//getUTCSeconds()
console.log(date.getUTCSeconds());

//getUTCMilliseconds()
console.log(date.getUTCMilliseconds());

let setdate = new Date('January 31, 2024 12:50:11:77');

//setUTCDate()
setdate.setUTCDate(5)
console.log(setdate.getUTCDate());

//setUTCFullyear()
setdate.setUTCFullYear(2003)
console.log(setdate.getUTCFullYear());

//setUTCHours()
setdate.setUTCHours(15)
console.log(setdate.getUTCHours());

//setUTCMinutes()
setdate.setUTCMinutes(59)
console.log(setdate.getUTCMinutes());

//setUTCSeconds()
setdate.setUTCSeconds(35)
console.log(setdate.getUTCSeconds());

//setUTCMilliseconds
setdate.setUTCMilliseconds(120)
console.log(setdate.getUTCMilliseconds());