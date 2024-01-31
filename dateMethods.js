//new date()
let date = new Date();
console.log(date);

//Date.parse()
let dates = "January 30, 2024 9:11 PM";
let msec = Date.parse(dates);
console.log(msec);

//Date.UTC()
let dateutc = Date.UTC(2024, 1, 30);
console.log(dateutc);

//getDate()
let dayDate = new Date('January 30, 2024 9:28:30:77');
console.log(dayDate.getDate());

//getMonth()
console.log(dayDate.getMonth());

//getFullyear()
console.log(dayDate.getFullYear());

//getDay()
console.log(dayDate.getDay());

//getHours()
console.log(dayDate.getHours());

//getMinutes()
console.log(dayDate.getMinutes());

//getSeconds()
console.log(dayDate.getSeconds());

//getMilliseconds()
console.log(dayDate.getMilliseconds());

//setDate()
dayDate.setDate(15)
console.log(dayDate.getDate());

//setMonth()
dayDate.setMonth(10)
console.log(dayDate.getMonth());

//setFullyear()
dayDate.setFullYear(2023)
console.log(dayDate.getFullYear());

//setHours()
dayDate.setHours(5)
console.log(dayDate.getHours());

//setMinutes()
dayDate.setMinutes(58)
console.log(dayDate.getMinutes());

//setSeconds()
dayDate.setSeconds(59)
console.log(dayDate.getSeconds());

//setMillisconds()
dayDate.setMilliseconds(45)
console.log(dayDate.getMilliseconds());

//toString()
console.log(dayDate.toString());

//toLocaleDateString()
let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
}
console.log(dayDate.toLocaleDateString());
console.log(dayDate.toLocaleDateString("en-US",options));

//toTimeString()
console.log(dayDate.toTimeString());

//toLocaleTimeString()
console.log(dayDate.toLocaleTimeString());