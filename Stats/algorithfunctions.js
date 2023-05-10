//According to some random source, the internet grows 43tb per second. (Don't know how long this statistic will last but who cares itll just be not completely accurate)
//2.5HDD: 2.8in wide 4.0in long

/**************************************************************************************************
 * ~VARIABLE SETTING THE KNOWN LANDMARK OF THE INTERNETS ESTIMATED SIZE AT THE BEGINNING OF 2023~ *
 **************************************************************************************************/
let size = (106000000000*1.000000000003185279359525295179);
/*******************************************************************************************************
 *    ~NEXT 43ISH LINES ARE TO UPDATE THE SIZE (TB) VARIABLE ACCORDING TO THE AMOUNT OF TIME THAT'S    *
 * PASSED (IN SECONDS SINCE INTERNET GROWS 43TB PER SECOND ACCORDING TO SOME RANDOM SOURCE) SINCE 2023 *
 *                   SO THAT EVERY TIME THE SITE IS OPENNED, THE SIZE IS UP TO DATE~                   *
 *******************************************************************************************************/
const date = new Date();

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
/***********************************************************************************************************************
 *                          ~FOLLOWING CODE SETS UP VARIABLES THAT INCLUDE THE MATH NEEDED TO                          *
 *                          CONVERT TB INTO PHYSICAL STORAGE DEVICE WIDTH, LENGTH, & HEIGHT~                           *
 *                             - WIDTH AND HEIGHT IS MAINTAINED TO FOLLOW THE GOLDEN RATIO                             *
 *                          - CODE UTILIZES LAYERED AREA DISTRIBUTION FORMULA (ADJUSTABLE W&H                          *
 *                           BASED ON THE AMOUNT OF LAYERS OF ITEMS WANTED WHILE MAINTAINING                           *
 *                          THE SAME AREA WHEN ADDING THE AREA OF EACH LAYER) WHICH KEEPS THE                          *
 *                          GOLDEN RATIO AS WELL (FORMULA CREATED BY ME ;) AND IMPROVED UPON                           *
 *                                              BY A GOOD FRIEND OF MINE)                                              *
 *             - WITH MY FORMULA, LAYER HEIGHT IS UNIFORMLY ADJUSTABLE BY DIFFERENT STORAGE DEVICE HEIGHT              *
 * - UPDATE FUNCTION HANDLES AND SETS THE INTERVAL TO UPDATE THE HEIGHT, WIDTH, LENGTH, AND PRICE STATS EVERY 333.33MS *
 ***********************************************************************************************************************/
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

function UpdateTB() {
    document.getElementById("SizeTB").innerHTML = (SizeTB.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
} let DocTeBInterval = setInterval(UpdateTB, 333.33);

function Update() {
    document.getElementById("HeightStack").innerHTML = HeightFt;
    document.getElementById("WidthMiles").innerHTML = WidthMi.toFixed(5);
    document.getElementById("LengthMiles").innerHTML = LengthMi.toFixed(5);
    document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
} let DocMilesInterval = setInterval(Update, 333.33); 
/*******************************************************************************************************
 *                                  ~HANDLES THE UNIT DROPDOWN MENU~                                   *
 *                                  - TOGGLE SHOWS AND HIDES DROPDOWN                                  *
 * - CHANGE HANDLES EDITING THE TEXT CSS, INTERVALS, AND VALUES NEEDED WHEN A DIFFERENT UNIT IS CHOSEN *
 *******************************************************************************************************/
let dropdown = document.querySelector('.dropdown');
let dropdownList = document.querySelector('.dropdown-listSizeButtonContainer');
let dropdownSize = document.querySelector('.dropdownSize')
let dropdownListSize = document.querySelector('.dropdown-listSize');
let toggledAmount = 1;

let sizebuttonClass= document.querySelector(".dropdown-listSize");
    

function toggleSize(){
    let dropdownListSize = document.querySelector('.dropdown-listSize');
    dropdownListSize.classList.toggle('showSize');
    let dropdownListSizeButtons = document.querySelector('.dropdown-listSizeButtonContainer');
    dropdownListSizeButtons.classList.toggle('showSizeButtons');
    toggledAmount += 1;
}
function hideSize(){
    let dropdownListSize = document.querySelector('.dropdown-listSize');
    dropdownListSize.classList.remove('showSize');
    let dropdownListSizeButtons = document.querySelector('.dropdown-listSizeButtonContainer');
    dropdownListSizeButtons.classList.remove('showSizeButtons');
}  
function hide(){
    let dropdownListSize = document.querySelector('.dropdownList');
    dropdownListSize.classList.remove('show');
    let dropdownListSizeButtons = document.querySelector('.dropdownListButtonContainer');
    dropdownListSizeButtons.classList.remove('showButtons');
}  

const listenoutsideSizeChange = (e) => {

    let containsActiveClass = false;
    let reviewNode = e.target;
    
    while (reviewNode.nodeName !== 'BODY') {
    
      if (reviewNode.classList.contains('dropdown-listSize') || reviewNode.classList.contains('dropdown-listSizeButtonContainer')) {
        containsActiveClass = true;
        break;
      }
      
      reviewNode = reviewNode.parentNode;
    }
    
    if (containsActiveClass === false) {
      hideSize();
    }
  }
  
  document.addEventListener('click', listenoutsideSizeChange, false);

  const listenoutsideChange = (e) => {

    let containsActiveClass = false;
    let reviewNode = e.target;
    
    while (reviewNode.nodeName !== 'BODY') {
    
      if (reviewNode.classList.contains('dropdownList') || reviewNode.classList.contains('dropdownListButtonContainer')) {
        containsActiveClass = true;
        break;
      }
      
      reviewNode = reviewNode.parentNode;
    }
    
    if (containsActiveClass === false) {
      hide();
    }
  }
  
  document.addEventListener('click', listenoutsideChange, false);


function toggle(){
    let dropdownList = document.querySelector('.dropdownList');
    dropdownList.classList.toggle('show');
    let dropdownListButton = document.querySelector('.dropdownListButtonContainer');
    dropdownListButton.classList.toggle('show2');
  }

function change(buttonId) {
    if(buttonId == "Kilometers"){
        document.querySelector(".dropdownList").style["font-size"] = "3.5em";
        document.querySelector(".dropdownList").style.transition = "0s";
    }
    else{
        document.querySelector(".dropdownList").style["font-size"] = "5.5em";
    }
    document.getElementById('dropdownList').textContent = buttonId;
    let dropdownListSize = document.querySelector('.dropdownList');
    dropdownListSize.classList.toggle('show');
    let dropdownListSizeButtons = document.querySelector('.dropdownListButtonContainer');
    dropdownListSizeButtons.classList.toggle('showButtons');
    
    switch(buttonId){
        case("Miles"):
            function UpdateMiles() {
                document.getElementById("HeightStack").innerHTML = HeightFt;
                document.getElementById("WidthMiles").innerHTML = (WidthMi.toFixed(5));
                document.getElementById("LengthMiles").innerHTML = (LengthMi.toFixed(5));
                document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateMiles, 333.33);
            break;
        case("Feet"):
            function UpdateSquareFt() {
                document.getElementById("HeightStack").innerHTML = HeightFt;
                document.getElementById("WidthMiles").innerHTML = (((WidthMi*5280).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("LengthMiles").innerHTML = (((LengthMi*5280).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateSquareFt, 333.33);
            break;
        case("Inches"):
            function UpdateInches() {
                document.getElementById("HeightStack").innerHTML = HeightFt;
                document.getElementById("WidthMiles").innerHTML = (((WidthMi*63360).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("LengthMiles").innerHTML = (((LengthMi*63360).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateInches, 333.33);
            break;
        case("Kilometers"):
            function UpdateKilometers() {
                document.getElementById("HeightStack").innerHTML = HeightFt;
                document.getElementById("WidthMiles").innerHTML = ((WidthMi*1.60934).toFixed(5));
                document.getElementById("LengthMiles").innerHTML = ((LengthMi*1.60934).toFixed(5));
                document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateKilometers, 333.33);
            break;
        case("Meters"):
            function UpdateMeters() {
                document.getElementById("HeightStack").innerHTML = HeightFt;
                document.getElementById("WidthMiles").innerHTML = (((WidthMi*1609).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("LengthMiles").innerHTML = (((LengthMi*1609).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateMeters, 333.33);
            break;
        case("Yards"):
            function UpdateYards() {
                document.getElementById("HeightStack").innerHTML = HeightFt;
                document.getElementById("WidthMiles").innerHTML = (((WidthMi*1760).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("LengthMiles").innerHTML = (((LengthMi*1760).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateYards, 333.33);
            break;
        default:
            break;
        }

}

function changeSize(buttonId) {
    document.getElementById('dropdown-listSize').textContent = buttonId;
    let dropdownListSize = document.querySelector('.dropdown-listSize');
    dropdownListSize.classList.toggle('showSize');
    let dropdownListSizeButtons = document.querySelector('.dropdown-listSizeButtonContainer');
    dropdownListSizeButtons.classList.toggle('showSizeButtons');

    switch(buttonId){
        case("PB"):
            function UpdatePetabytes() {
                document.getElementById("SizeTB").innerHTML = (SizeTB/1000);
            } clearInterval(DocTeBInterval); DocTeBInterval = setInterval(UpdatePetabytes, 333.33);
                break;
        case("TB"):
            function UpdateTerabytes() {
                document.getElementById("SizeTB").innerHTML = (SizeTB);
            } clearInterval(DocTeBInterval); DocTeBInterval = setInterval(UpdateTerabytes, 333.33);
            break;
        case("GB"):
            function UpdateGigabytes() {
                document.getElementById("SizeTB").innerHTML = (SizeTB*1000);
            } clearInterval(DocTeBInterval); DocTeBInterval = setInterval(UpdateGigabytes, 333.33);
            break;
        case("MB"):
            function UpdateMegabytes() {
                document.getElementById("SizeTB").innerHTML = (SizeTB*1000000);
            } clearInterval(DocTeBInterval); DocTeBInterval = setInterval(UpdateMegabytes, 333.33);
            break;
        case("KB"):
            function UpdateKilobytes() {
                document.getElementById("SizeTB").innerHTML = (SizeTB*1000000000);
            } clearInterval(DocTeBInterval); DocTeBInterval = setInterval(UpdateKilobytes, 333.33);
            break;
        case("B"):
            function Updatebytes() {
                document.getElementById("SizeTB").innerHTML = (SizeTB*1000000000000);
            } clearInterval(DocTeBInterval); DocTeBInterval = setInterval(Updatebytes, 333.33);
            break;
        default:
            /*document.getElementById("drowdownList").style.transform = "translate(-110px, 100px)";*/
            break;
        }

}