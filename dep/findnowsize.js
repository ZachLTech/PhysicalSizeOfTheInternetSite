const date = new Date();

let size = 106000000000;

let yearnow = date.getFullYear();
let yearsec = yearnow.toString();
let yearnum = Number(yearsec);
let yearnumsec = yearnum*31540000;

let monthnow = date.getMonth();
let monthsec = monthnow.toString();
let monthnum = Number(monthsec);
let monthnumsec = monthnum*2628000;

let daynow = date.getDay();
let daysec = daynow.toString();
let daynum = Number(daysec);
let daynumsec = daynum*86400;

let hournow = date.getHours();
let hoursec = hournow.toString();
let hournum = Number(hoursec);
let hournumsec = hournum*3600;

let minutenow = date.getMinutes();
let minutesec = minutenow.toString();
let minutenum = Number(minutesec);
let minutenumsec = minutenum*60;

let secondnow = date.getSeconds();
let secondsec = secondnow.toString();
let secondnumsec = Number(secondsec);

let nowsec = (yearnumsec+monthnumsec+daynumsec+hournumsec+minutenumsec+secondnumsec);
let ogsec = 6.3797e+10;

let yearog = "2023"
let monthog = "01"
let dayog = "01"
let hourog = "00"
let secondog = "01"

let difference = nowsec-ogsec;
let sizeTB = (difference*43)+size;

console.log(sizeTB);