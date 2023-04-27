//According to some random source, the internet grows 43tb per second. (Don't know how long this statistic will last but who cares itll just be not completely accurate)
//2.5HDD: 2.8in wide 4.0in long

//The next 43ish lines are just to get the TB size of internet according to the date and time it is when the site is oppened 
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

let SizeTB = (difference*43)+size;



let amountadded = 0;
let stackHeight = 1;


function updateVariable() {
    const inputValue = parseInt(document.getElementById("inputNumber").value);
    stackHeight = inputValue/2;
}


function addSizeTB(){
    SizeTB += 14;
    amountadded += 1;
} let UpdateInterval = setInterval(addSizeTB, 333.3);


let HHDsNeeded = 0;
let HHDsNeeded1b4 = 0;
let growth =0;
let WidthInches =0;
let WidthMiles =0;
let priceUSD = 0;
let HeightFt = 0;

let WidthMi = 0;
let LengthMi = 0;


function HeightAndPrice(){
    HeightFt = stackHeight*(0.0332);
    priceUSD = HHDsNeeded*4000; 
} let HeightAndPriceinterval = setInterval(HeightAndPrice, 333.33);
function Width() {
    HHDsNeeded = SizeTB/30.72;
    HHDsNeeded1b4 = ((SizeTB-14)/30.72);
    growth = ((HHDsNeeded-HHDsNeeded1b4)/2);
    WidthHHDS = 65536+(growth*amountadded);
    WidthInches = WidthHHDS*2.8;
    WidthMiles = WidthInches*1.57828e-5;
    WidthMi = ((WidthMiles*(1/stackHeight))-((WidthMiles*(1/stackHeight))*(1/(stackHeight+1))));
} let Widthinterval = setInterval(Width, 333.33)
function Length() {
    HHDsNeeded = SizeTB/30.72;
    HHDsNeeded1b4 = (SizeTB-14)/30.72;
    growth = (HHDsNeeded-HHDsNeeded1b4)/2;
    LengthHHDS = 52650.76955159505+(growth*amountadded);
    LengthInches = LengthHHDS*4.0;
    LengthMiles = LengthInches*1.57828e-5;
    LengthMi = ((LengthMiles*(1/stackHeight))-((LengthMiles*(1/stackHeight))*(1/(stackHeight+1))));
} let Lengthinterval = setInterval(Length, 333.33)

function Update() {
    document.getElementById("SizeTB").innerHTML = SizeTB;
    document.getElementById("HeightStack").innerHTML = HeightFt;
    document.getElementById("WidthMiles").innerHTML = WidthMi;
    document.getElementById("LengthMiles").innerHTML = LengthMi;
    document.getElementById("PriceHHDs").innerHTML = priceUSD;
} let DocInterval = setInterval(Update, 333.33);