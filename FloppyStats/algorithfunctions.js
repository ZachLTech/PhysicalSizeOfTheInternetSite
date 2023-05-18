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
/* Year to Sec */
let yearnow = date.getFullYear();
let yearsec = yearnow.toString();
let yearnum = Number(yearsec);
let yearnumsec = yearnum*31540000;
/* Month to Sec */
let monthnow = date.getMonth();
let monthsec = monthnow.toString();
let monthnum = Number(monthsec);
let monthnumsec = monthnum*2628000;
/* Day to Sec */
let daynow = date.getDay();
let daysec = daynow.toString();
let daynum = Number(daysec);
let daynumsec = daynum*86400;
/* Hour to Sec */
let hournow = date.getHours();
let hoursec = hournow.toString();
let hournum = Number(hoursec);
let hournumsec = hournum*3600;
/* Minute to Sec */
let minutenow = date.getMinutes();
let minutesec = minutenow.toString();
let minutenum = Number(minutesec);
let minutenumsec = minutenum*60;
/* Second to Sec (teehee) */
let secondnow = date.getSeconds();
let secondsec = secondnow.toString();
let secondnumsec = Number(secondsec);
/* Adding them */
let nowsec = (yearnumsec+monthnumsec+daynumsec+hournumsec+minutenumsec+secondnumsec);
/* Declaring the original amount of seconds that passed to have the original value*/
let ogsec = 6.3797e+10;
/* So u can see the OG time it's based from */
let yearog = "2023"
let monthog = "01"
let dayog = "01"
let hourog = "00"
let secondog = "01"
/* Gets and adds difference (multiplied by 43 to convert into TB) between OG seconds 
   and Now seconds to the Size so it can be Up to date everytime you open the page :) */
let difference = nowsec-ogsec;
let SizeTB = (difference*43)+size;
/***********************************************************************************************************************
 *                          ~FOLLOWING CODE SETS UP VARIABLES THAT INCLUDE THE MATH NEEDED TO                          *
 *                          CONVERT TB INTO PHYSICAL STORAGE DEVICE WIDTH, LENGTH, & HEIGHT~                           *
 *                          - WIDTH AND HEIGHT IS MAINTAINED TO FOLLOW THE GOLDEN RATIO                                *
 *                          - CODE UTILIZES LAYERED AREA DISTRIBUTION FORMULA (ADJUSTABLE W&H                          *
 *                             BASED ON THE AMOUNT OF LAYERS OF ITEMS WANTED WHILE MAINTAINING                         *
 *                             THE SAME AREA WHEN ADDING THE AREA OF EACH LAYER) WHICH KEEPS THE                       *
 *                             GOLDEN RATIO AS WELL (FORMULA CREATED BY ME ;) AND IMPROVED UPON                        *
 *                             BY A GOOD FRIEND OF MINE)                                                               *
 *                          - WITH MY FORMULA, LAYER HEIGHT IS UNIFORMLY ADJUSTABLE BY DIFFERENT STORAGE DEVICE HEIGHT *
 *                          - UPDATE FUNCTION HANDLES AND SETS THE INTERVAL TO UPDATE THE HEIGHT,                      *
 *                             WIDTH, LENGTH, AND PRICE STATS EVERY 333.33MS                                           *
 ***********************************************************************************************************************/
let amountadded = 0;
let stackHeight = 1;
/* Update User Stack Input */
function updateVariable() {
    const inputValue = parseInt(document.getElementById("inputNumber").value);
    stackHeight = inputValue/2;
}
/* TB adding Interval */
function addSizeTB(){
    SizeTB += 14;
    amountadded += 1;
} let UpdateInterval = setInterval(addSizeTB, 333.33);
/* Declarations (Slightly cursed ik) */
let HHDsNeeded = 0;
let HHDsNeeded1b4 = 0;
let growth =0;
let WidthInches =0;
let WidthMiles =0;
let priceUSD = 0;
let HeightFt = 0;
let HHDSizeEach = 30.72;
let WidthMi = 0;
let LengthMi = 0;
/* Math Functions */
function Width() {
    HHDsNeeded = SizeTB/HHDSizeEach;
    HHDsNeeded1b4 = ((SizeTB-14)/HHDSizeEach);
    growth = ((HHDsNeeded-HHDsNeeded1b4)/2);
    WidthHHDS = 59093.38477579753+(growth*amountadded);
    WidthInches = WidthHHDS*3.54331;
    WidthMiles = WidthInches*1.57828e-5;
    WidthMi = ((WidthMiles*(1/stackHeight))-((WidthMiles*(1/stackHeight))*(1/(stackHeight+1))));
} let Widthinterval = setInterval(Width, 333.33);
function Length() {
    HHDsNeeded = SizeTB/HHDSizeEach;
    HHDsNeeded1b4 = (SizeTB-14)/HHDSizeEach;
    growth = (HHDsNeeded-HHDsNeeded1b4)/2;
    LengthHHDS = 59093.38477579753+(growth*amountadded);
    LengthInches = LengthHHDS*3.54331;
    LengthMiles = LengthInches*1.57828e-5;
    LengthMi = ((LengthMiles*(1/stackHeight))-((LengthMiles*(1/stackHeight))*(1/(stackHeight+1))));
} let Lengthinterval = setInterval(Length, 333.33)
function HeightAndPrice(){
    HeightFt = stackHeight*(0.0328084);
    switch(HHDSizeEach){
        case(30.72):
            priceUSD = HHDsNeeded*2960.31;
            break;
        case(15.4):
            priceUSD = HHDsNeeded*1192;
            break;
        case(1):
            priceUSD = HHDsNeeded*40;
            break;
        case(0.5):
            priceUSD = HHDsNeeded*18;
            break;
        case(0.24):
            priceUSD = HHDsNeeded*16;
            break;
        case(0.064):
            priceUSD = HHDsNeeded*14;
            break;
    }
} let HeightAndPriceinterval = setInterval(HeightAndPrice, 333.33);
/* Intervals */
function UpdateTB() {
    document.getElementById("SizeTB").innerHTML = (SizeTB.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
} let DocTeBInterval = setInterval(UpdateTB, 333.33);

function UpdateHeight(){
    document.getElementById("HeightStack").innerHTML = HeightFt.toFixed(5);
} let DocHeightInterval = setInterval(UpdateHeight, 333.33);

function UpdatePrice(){
    document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
} let DocPriceInterval = setInterval(UpdatePrice, 333.33);

function Update() {
    document.getElementById("WidthMiles").innerHTML = WidthMi.toFixed(5);
    document.getElementById("LengthMiles").innerHTML = LengthMi.toFixed(5);
} let DocMilesInterval = setInterval(Update, 333.33); 
/*******************************************************************************************************
 *                                  ~HANDLES THE UNIT DROPDOWN MENU~                                   *
 *                                  - TOGGLE SHOWS AND HIDES DROPDOWN                                  *
 *                                  - CHANGE HANDLES EDITING THE TEXT CSS, INTERVALS, AND              *
 *                                     VALUES NEEDED WHEN A DIFFERENT UNIT IS CHOSEN                   *
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
    dropdownListSizeButtons.classList.remove('show2');
}  
function hideHeight(){
    let heightDropdown = document.querySelector('.heightBannerButton');
    heightDropdown.classList.remove('heightGrow');
    let heightOptionsDropdown = document.querySelector('.heightButtonContainer');
    heightOptionsDropdown.classList.remove('heightShow');
}  
function hideStorage(){
    let sizePerDropdown = document.querySelector('.storageButton');
    sizePerDropdown.classList.remove('showSizePerContainer');
    let sizePerOptionsDropdown = document.querySelector('.storageButtonsContainer');
    sizePerOptionsDropdown.classList.remove('showSizePerButtons');
} 
function hideStorageCurrency(){
    let sizePerDropdown = document.querySelector('.insertTBorGB');
    sizePerDropdown.classList.remove('insertTBorGBHide');
    let sizePerOptionsDropdown = document.querySelector('.storedInButtonContainer');
    sizePerOptionsDropdown.classList.remove('storedInButtonContainerShow');
    document.getElementById("changeStoredInButton").disabled = true;
    document.getElementById("changeStoredInButton2").disabled = true;
    document.getElementById("changeStoredInButton3").disabled = true;
    document.getElementById("changeStoredInButton4").disabled = true;
    document.getElementById("changeStoredInButton5").disabled = true;
    document.getElementById("changeStoredInButton6").disabled = true;
}

let pos = 0;
function MoveMeEasterEgg(){
    let moveBanner = document.querySelector('.adjustmentsBanner');
    switch(pos){
        case(0):
            moveBanner.classList.toggle('adjustmentsBannerMid');
            pos = 1;
            break;
        case(1):
            moveBanner.classList.remove('adjustmentsBannerMid');
            moveBanner.classList.toggle('adjustmentsBannerEnd');
            pos = 2;
            break;
        case(2):
            moveBanner.classList.remove('adjustmentsBannerEnd');
            pos = 0;
            break;
    }
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

  const listenoutsideHeightChange = (e) => {

    let containsActiveClass = false;
    let reviewNode = e.target;
    
    while (reviewNode.nodeName !== 'BODY') {
    
      if (reviewNode.classList.contains('heightBannerButton') || reviewNode.classList.contains('heightButtonContainer')) {
        containsActiveClass = true;
        break;
      }
      
      reviewNode = reviewNode.parentNode;
    }
    
    if (containsActiveClass === false) {
      hideHeight();
    }
  }
  
  document.addEventListener('click', listenoutsideHeightChange, false);

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

  const listenoutsideAdjust = (e) => {

    let containsActiveClass = false;
    let reviewNode = e.target;
    
    while (reviewNode.nodeName !== 'BODY') {
    
      if (reviewNode.classList.contains('storageButton') || reviewNode.classList.contains('storageButtonsContainer')) {
        containsActiveClass = true;
        break;
      }
      
      reviewNode = reviewNode.parentNode;
    }
    
    if (containsActiveClass === false) {
      hideStorage();
    }
  }
  
  document.addEventListener('click', listenoutsideAdjust, false);

  const listenoutsideCurrencyAdjust = (e) => {

    let containsActiveClass = false;
    let reviewNode = e.target;
    
    while (reviewNode.nodeName !== 'BODY') {
    
      if (reviewNode.classList.contains('storedInButtonContainer') || reviewNode.classList.contains('insertTBorGB')) {
        containsActiveClass = true;
        break;
      }
      
      reviewNode = reviewNode.parentNode;
    }
    
    if (containsActiveClass === false) {
      hideStorageCurrency();
    }
  }
  
  document.addEventListener('click', listenoutsideCurrencyAdjust, false);

function toggle(){
    document.querySelector(".dropdownList").style.transition = "0.3s";
    let dropdownListSizeButtonsKM = document.querySelector('.Kilometers');
    dropdownListSizeButtonsKM.classList.remove('showKilometers');
    let dropdownList = document.querySelector('.dropdownList');
    dropdownList.classList.toggle('show');
    let dropdownListButton = document.querySelector('.dropdownListButtonContainer');
    dropdownListButton.classList.toggle('show2');
  }
function heightButtonToggle(){
    let heightDropdown = document.querySelector('.heightBannerButton');
    heightDropdown.classList.toggle('heightGrow');
    let heightOptionsDropdown = document.querySelector('.heightButtonContainer');
    heightOptionsDropdown.classList.toggle('heightShow');
}
function storedInToggle(){
    let storedInDropdown = document.querySelector('.insertTBorGB');
    storedInDropdown.classList.toggle('insertTBorGBHide');
    let storedInOptionsDropdown = document.querySelector('.storedInButtonContainer');
    storedInOptionsDropdown.classList.toggle('storedInButtonContainerShow');
    document.getElementById("changeStoredInButton").disabled = false;
    document.getElementById("changeStoredInButton2").disabled = false;
    document.getElementById("changeStoredInButton3").disabled = false;
    document.getElementById("changeStoredInButton4").disabled = false;
    document.getElementById("changeStoredInButton5").disabled = false;
    document.getElementById("changeStoredInButton6").disabled = false;
}
function toggleStoragePer(){
    let sizePerDropdown = document.querySelector('.storageButton');
    sizePerDropdown.classList.toggle('showSizePerContainer');
    let sizePerOptionsDropdown = document.querySelector('.storageButtonsContainer');
    sizePerOptionsDropdown.classList.toggle('showSizePerButtons');
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function slideAllRight(){
    let background = document.querySelector('.sectionBackground1');
    let money = document.querySelector('.sectionBackground2');
    let header = document.querySelector('.headerBackgroundContainer');
    let priceback = document.querySelector('.priceInfoContainerUnder');
    let price = document.querySelector('.priceInfoContainer');
    header.classList.toggle('invis');
    background.classList.toggle('moveRight');
    money.classList.toggle('moveRightUp');
    priceback.classList.toggle('moveRightBottm');
    price.classList.toggle('moveRightBottm');
    topFunction();
}




function change(buttonId) {
    let dropdownListSize = document.querySelector('.dropdownList');
    dropdownListSize.classList.toggle('show');
    let dropdownListSizeButtons = document.querySelector('.dropdownListButtonContainer');
    dropdownListSizeButtons.classList.toggle('show2');
    /**/ 
    switch(buttonId){
        case("Miles"):
        document.getElementById('dropdownList').textContent = buttonId;
            
            
            function UpdateMiles() {
                document.getElementById("WidthMiles").innerHTML = (WidthMi.toFixed(5));
                document.getElementById("LengthMiles").innerHTML = (LengthMi.toFixed(5));
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateMiles, 333.33);
            break;
        case("Feet"):
        document.getElementById('dropdownList').textContent = buttonId;
            
            
            function UpdateSquareFt() {
                document.getElementById("WidthMiles").innerHTML = (((WidthMi*5280).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("LengthMiles").innerHTML = (((LengthMi*5280).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateSquareFt, 333.33);
            break;
        case("Inches"):
        document.getElementById('dropdownList').textContent = buttonId;
            
            
            function UpdateInches() {
                document.getElementById("WidthMiles").innerHTML = (((WidthMi*63360).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("LengthMiles").innerHTML = (((LengthMi*63360).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateInches, 333.33);
            break;
        case("Kilometers"):
            document.getElementById('dropdownList').textContent = " ";
            let dropdownListSizeButtonsKM = document.querySelector('.Kilometers');
            dropdownListSizeButtonsKM.classList.toggle('showKilometers');
            function UpdateKilometers() {
                document.getElementById("WidthMiles").innerHTML = ((WidthMi*1.60934).toFixed(5));
                document.getElementById("LengthMiles").innerHTML = ((LengthMi*1.60934).toFixed(5));
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateKilometers, 333.33);
            break;
        case("Meters"):
        document.getElementById('dropdownList').textContent = buttonId;
            function UpdateMeters() {
                document.getElementById("WidthMiles").innerHTML = (((WidthMi*1609).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("LengthMiles").innerHTML = (((LengthMi*1609).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            } clearInterval(DocMilesInterval); DocMilesInterval = setInterval(UpdateMeters, 333.33);
            break;
        case("Yards"):
        document.getElementById('dropdownList').textContent = buttonId;
            
            
            function UpdateYards() {
                document.getElementById("WidthMiles").innerHTML = (((WidthMi*1760).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                document.getElementById("LengthMiles").innerHTML = (((LengthMi*1760).toFixed(2)).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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

function changeStoragePer(buttonId) {
    document.getElementById('storagePerButton').textContent = buttonId;
    document.getElementById('storedInButton').textContent = buttonId;
    let sizePerDropdown = document.querySelector('.storageButton');
    sizePerDropdown.classList.toggle('showSizePerContainer');
    let sizePerOptionsDropdown = document.querySelector('.storageButtonsContainer');
    sizePerOptionsDropdown.classList.toggle('showSizePerButtons');
    let storedInOptionsDropdown = document.querySelector('.storedInButtonContainer');
    storedInOptionsDropdown.classList.remove('storedInButtonContainerShow');
    let storedInOptionsButton = document.querySelector('.insertTBorGB');
    storedInOptionsButton.classList.remove('insertTBorGBHide');
    document.getElementById("changeStoredInButton").disabled = true;
    document.getElementById("changeStoredInButton2").disabled = true;
    document.getElementById("changeStoredInButton3").disabled = true;
    document.getElementById("changeStoredInButton4").disabled = true;
    document.getElementById("changeStoredInButton5").disabled = true;
    document.getElementById("changeStoredInButton6").disabled = true;

    switch(buttonId){
        case("30TB"):
            HHDSizeEach = 30.72;
            storedInOptionsButton.style["font-size"] = "25px";
            break;
        case("15TB"):
            HHDSizeEach = 15.4;
            storedInOptionsButton.style["font-size"] = "25px";
            break;
        case("1TB"):
            HHDSizeEach = 1;
            storedInOptionsButton.style["font-size"] = "25px";
            break;
        case("500GB"):
            HHDSizeEach = 0.5;
            storedInOptionsButton.style["font-size"] = "20px";
            break;
        case("240GB"):
            HHDSizeEach = 0.24;
            storedInOptionsButton.style["font-size"] = "20px";
            break;
        case("64GB"):
            HHDSizeEach = 0.064;
            storedInOptionsButton.style["font-size"] = "25px";
            break;
        default:
            /*document.getElementById("drowdownList").style.transform = "translate(-110px, 100px)";*/
            break;
        }

}

function changeHeight(buttonId) {
    document.getElementById('heightBannerButton').textContent = buttonId;
    let heightDropdown = document.querySelector('.heightBannerButton');
    heightDropdown.classList.toggle('heightGrow');
    let heightOptionsDropdown = document.querySelector('.heightButtonContainer');
    heightOptionsDropdown.classList.toggle('heightShow')

    switch(buttonId){
        case("Centimeters"):
            function UpdateHCentimeters() {
                document.getElementById("HeightStack").innerHTML = (HeightFt*30.48).toFixed(5);
            } clearInterval(DocHeightInterval); DocHeightInterval = setInterval(UpdateHCentimeters, 333.33);
            document.getElementById("heightBannerButton").style["font-size"] = "1.6em";
                break;
        case("Millimeters"):
            function UpdateHMillimeters() {
                document.getElementById("HeightStack").innerHTML = (HeightFt*304.8).toFixed(5);
            } clearInterval(DocHeightInterval); DocHeightInterval = setInterval(UpdateHMillimeters, 333.33);
            document.getElementById("heightBannerButton").style["font-size"] = "1.7em";
            break;
        case("Inches"):
            function UpdateHInches() {
                document.getElementById("HeightStack").innerHTML = (HeightFt*12).toFixed(5);
            } clearInterval(DocHeightInterval); DocHeightInterval = setInterval(UpdateHInches, 333.33);
            break;
        case("Feet"):
            function UpdateHFeet() {
                document.getElementById("HeightStack").innerHTML = (HeightFt).toFixed(5);
            } clearInterval(DocHeightInterval); DocHeightInterval = setInterval(UpdateHFeet, 333.33);
            break;
        case("Meters"):
            function UpdateHMeters() {
                document.getElementById("HeightStack").innerHTML = (HeightFt/3.281).toFixed(5);
            } clearInterval(DocHeightInterval); DocHeightInterval = setInterval(UpdateHMeters, 333.33);
            break;
        case("Yards"):
            function UpdateHYards() {
                document.getElementById("HeightStack").innerHTML = (HeightFt/3).toFixed(5);
            } clearInterval(DocHeightInterval); DocHeightInterval = setInterval(UpdateHYards, 333.33);
            break;
        default:
            /*document.getElementById("drowdownList").style.transform = "translate(-110px, 100px)";*/
            break;
        }

}
function changeCurrency(buttonId){
    priceHHD = document.getElementById("PriceHHDs");
    highlight = document.getElementById("highlighterButtons");
    switch(buttonId){
        case("USD"):
            function clickedUSD(){
                document.getElementById("PriceHHDs").innerHTML = ("$"+((priceUSD.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocPriceInterval); DocPriceInterval = setInterval(clickedUSD, 333.33);
            priceHHD.style["font-size"] = "85px";
            highlight.style.transform = "translate(232px, 17px)"
            break;
        case("JPY"):
            function clickedJPY(){
                document.getElementById("PriceHHDs").innerHTML = ("¥"+(((priceUSD*134.66).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocPriceInterval); DocPriceInterval = setInterval(clickedJPY, 333.33);
            priceHHD.style["font-size"] = "77px";
            highlight.style.transform = "translate(372px, 17px)"
            break;
        case("GBP"):
            function clickedGBP(){
                document.getElementById("PriceHHDs").innerHTML = ("£"+(((priceUSD*0.8).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocPriceInterval); DocPriceInterval = setInterval(clickedGBP, 333.33);
            priceHHD.style["font-size"] = "85px";
            highlight.style.transform = "translate(512px, 17px)"
            break;
        case("AUD"):
            function clickedAUD(){
                document.getElementById("PriceHHDs").innerHTML = ("A$"+(((priceUSD*1.49).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocPriceInterval); DocPriceInterval = setInterval(clickedAUD, 333.33);
            priceHHD.style["font-size"] = "85px";
            highlight.style.transform = "translate(232px, 104px)"
            break;
        case("CAD"):
            function clickedCAD(){
                document.getElementById("PriceHHDs").innerHTML = ("$"+(((priceUSD*1.35).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocPriceInterval); DocPriceInterval = setInterval(clickedCAD, 333.33);
            priceHHD.style["font-size"] = "85px";
            highlight.style.transform = "translate(372px, 104px)"
            break;
        case("CNY"):
            function clickedCNY(){
                document.getElementById("PriceHHDs").innerHTML = ("CN¥"+(((priceUSD*6.95).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocPriceInterval); DocPriceInterval = setInterval(clickedCNY, 333.33);
            priceHHD.style["font-size"] = "80px";
            highlight.style.transform = "translate(512px, 104px)"
            break;
        case("MXN"):
            function clickedMXN(){
                document.getElementById("PriceHHDs").innerHTML = ("Mex$"+(((priceUSD*17.59).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocPriceInterval); DocPriceInterval = setInterval(clickedMXN, 333.33);
            priceHHD.style["font-size"] = "76px";
            highlight.style.transform = "translate(232px, 190px)"
            break;
        case("RUB"):
            function clickedRUB(){
                document.getElementById("PriceHHDs").innerHTML = ("₽"+(((priceUSD*76.56).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocPriceInterval); DocPriceInterval = setInterval(clickedRUB, 333.33);
            priceHHD.style["font-size"] = "83px";
            highlight.style.transform = "translate(372px, 190px)"
            break;
        case("COP"):
            function clickedCOP(){
                document.getElementById("PriceHHDs").innerHTML = ("Col$"+(((priceUSD*4596.25).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            } clearInterval(DocPriceInterval); DocPriceInterval = setInterval(clickedCOP, 333.33);
            priceHHD.style["font-size"] = "70px";
            highlight.style.transform = "translate(512px, 190px)"
            break;
    }
}


window.addEventListener(
    "scroll",
    () => {
      const largeText = document.getElementById("large-text");
      const midText = document.getElementById("mid-text");
      const scrollPercentage = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
  
      if (scrollPercentage > 1.7) {
        largeText.classList.add("priceTextHide");
        midText.classList.add("priceTextHide");
      } else {
        largeText.classList.remove("priceTextHide");
        midText.classList.remove("priceTextHide");
      }
    },
    false
  );

 