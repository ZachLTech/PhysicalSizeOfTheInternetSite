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
} let UpdateInterval = setInterval(addSizeTB, 333.33);


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
    document.getElementById("WidthMiles").innerHTML = WidthMi.toFixed(5);
    document.getElementById("LengthMiles").innerHTML = LengthMi.toFixed(5);
    document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
} let DocMilesInterval = setInterval(Update, 333.33); 





let dropdown = document.querySelector('.dropdown');
let dropdownList = dropdown.querySelector('.dropdown-list');

function change(buttonId) {
 let dropdownList = document.querySelector('.dropdown-list');
 document.getElementById('DropdownTitle').textContent = buttonId;
 dropdownList.classList.toggle('show');

 //var stylesheet = document.styleSheets[1];
 //stylesheet.cssRules[0].style.backgroundColor="blue";

 var link = document.createElement('link');
 link.setAttribute('rel', 'stylesheet');
 link.setAttribute('type', 'text/css');
 link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Rubik&display=swap');
 document.head.appendChild(link);

 switch(buttonId){
    case("Units: Miles"):
    function UpdateMiles() {
        //document.getElementById("SizeTB").innerHTML = SizeTB;
        //document.getElementById("HeightStack").innerHTML = HeightFt;
        document.getElementById("WidthMiles").innerHTML = WidthMi.toFixed(5);
        document.getElementById("LengthMiles").innerHTML = LengthMi.toFixed(5);
        //document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateMiles, 333.33);
    document.querySelector(".WidthTEXT").textContent = "Width Miles";
    document.querySelector(".LengthTEXT").textContent = "Length Miles";
    document.querySelector(".WidthTEXT").style.color = "#3D5287";
    document.querySelector(".LengthTEXT").style.color = "#3D5287";
    document.querySelector(".WidthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".LengthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".WidthTEXT").style.fontFamily = "Arial";
    document.querySelector(".LengthTEXT").style.fontFamily = "Arial";
        break;
    case("Units: Feet"):
    function UpdateSquareFt() {
        //document.getElementById("SizeTB").innerHTML = SizeTB;
        //document.getElementById("HeightStack").innerHTML = HeightFt;
        document.getElementById("WidthMiles").innerHTML = (WidthMi*5280).toFixed(5);
        document.getElementById("LengthMiles").innerHTML = (LengthMi*5280).toFixed(5);
        //document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateSquareFt, 333.33);
    document.querySelector(".WidthTEXT").textContent = "Width Feet";
    document.querySelector(".LengthTEXT").textContent = "Length Feet";    
    document.querySelector(".WidthTEXT").style.color = "#3D5287";
    document.querySelector(".LengthTEXT").style.color = "#3D5287";
    document.querySelector(".WidthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".LengthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".WidthTEXT").style.fontFamily = "Arial";
    document.querySelector(".LengthTEXT").style.fontFamily = "Arial";
        break;
    case("Units: Inches"):
    function UpdateInches() {
        //document.getElementById("SizeTB").innerHTML = SizeTB;
        //document.getElementById("HeightStack").innerHTML = HeightFt;
        document.getElementById("WidthMiles").innerHTML = (WidthMi*63360).toFixed(5);
        document.getElementById("LengthMiles").innerHTML = (LengthMi*63360).toFixed(5);
        //document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateInches, 333.33);
    document.querySelector(".WidthTEXT").textContent = "Width Inches";
    document.querySelector(".LengthTEXT").textContent = "Length Inches";    
    document.querySelector(".WidthTEXT").style.color = "#3D5287";
    document.querySelector(".LengthTEXT").style.color = "#3D5287";
    document.querySelector(".WidthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".LengthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".WidthTEXT").style.fontFamily = "Arial";
    document.querySelector(".LengthTEXT").style.fontFamily = "Arial";
        break;
    case("Units: Kilometers"):
    function UpdateKilometers() {
        //document.getElementById("SizeTB").innerHTML = SizeTB;
        //document.getElementById("HeightStack").innerHTML = HeightFt;
        document.getElementById("WidthMiles").innerHTML = (WidthMi*1.60934).toFixed(5);
        document.getElementById("LengthMiles").innerHTML = (LengthMi*1.60934).toFixed(5);
        //document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateKilometers, 333.33);
    document.querySelector(".WidthTEXT").textContent = "Width Kilometers";
    document.querySelector(".LengthTEXT").textContent = "Length Kilometers";    
    document.querySelector(".WidthTEXT").style.color = "#3D5287";
    document.querySelector(".LengthTEXT").style.color = "#3D5287";
    document.querySelector(".WidthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".LengthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".WidthTEXT").style.fontFamily = "Arial";
    document.querySelector(".LengthTEXT").style.fontFamily = "Arial";
        break;
    case("Units: Meters"):
    function UpdateMeters() {
        //document.getElementById("SizeTB").innerHTML = SizeTB;
        //document.getElementById("HeightStack").innerHTML = HeightFt;
        document.getElementById("WidthMiles").innerHTML = (WidthMi*1609).toFixed(5);
        document.getElementById("LengthMiles").innerHTML = (LengthMi*1609).toFixed(5);
        //document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateMeters, 333.33);
    document.querySelector(".WidthTEXT").textContent = "Width Meters";
    document.querySelector(".LengthTEXT").textContent = "Length Meters";
    document.querySelector(".WidthTEXT").style.color = "#3D5287";
    document.querySelector(".LengthTEXT").style.color = "#3D5287";
    document.querySelector(".WidthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".LengthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".WidthTEXT").style.fontFamily = "Arial";
    document.querySelector(".LengthTEXT").style.fontFamily = "Arial";
        break;
    case("Units: Yards"):
    function UpdateYards() {
        //document.getElementById("SizeTB").innerHTML = SizeTB;
        //document.getElementById("HeightStack").innerHTML = HeightFt;
        document.getElementById("WidthMiles").innerHTML = (WidthMi*1760).toFixed(5);
        document.getElementById("LengthMiles").innerHTML = (LengthMi*1760).toFixed(5);
        //document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateYards, 333.33);
    document.querySelector(".WidthTEXT").textContent = "Width Yards";
    document.querySelector(".LengthTEXT").textContent = "Length Yards";    
    document.querySelector(".WidthTEXT").style.color = "#3D5287";
    document.querySelector(".LengthTEXT").style.color = "#3D5287";
    document.querySelector(".WidthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".LengthTEXT").style[font-size] = "1.65vw";
    document.querySelector(".WidthTEXT").style.fontFamily = "Arial";
    document.querySelector(".LengthTEXT").style.fontFamily = "Arial";
        break;
    default:
        document.getElementById("drowdownList").style.transform = "translate(-110px, 100px)";
        break;
    }

}

function toggle(){
  let dropdownList = document.querySelector('.dropdown-list');
  dropdownList.classList.toggle('show');
}