//According to some random source, the internet grows 43tb per second. (Don't know how long this statistic will last but who cares itll just be not completely accurate)
//2.5HDD: 2.8in wide 4.0in long
//3.5HDD: 

let SizeTB = 106000000000;

        // Initialize the variable
        let stackHeight = 1;
        let i = 1;
        // Function to update the variable and display the value
        
        function updateVariable() {
            // Get the input value
            const inputValue = parseInt(document.getElementById("inputNumber").value);
            // Update the variable
            stackHeight = inputValue;
            i = 1;
        }
        
//65536 harddrives wide
//52650.76955159505 long 
//above numbers found by getsquare.py to get an accurate size considering the length and width is filled in (bc realistically in a datacenter it is)


let amountadded = 0;


function addSizeTB(){
    SizeTB += 14;
    amountadded += 1;
}

let UpdateInterval = setInterval(addSizeTB, 333.33);
let HHDsNeeded = SizeTB/30.72;
let priceUSD = HHDsNeeded*4000; 
let HeightFt = stackHeight*(0.4*0.083);
function variabless(){
 HHDsNeeded = SizeTB/30.72;
 priceUSD = HHDsNeeded*4000; 
 HeightFt = stackHeight*(0.4*0.083);
}
let variablesssinterval = setInterval(variabless, 333.33);
let WidthMi = 0;
let LengthMi = 0;



function Width() {
    let HHDsNeeded = SizeTB/30.72;
    let HHDsNeeded1b4 = (SizeTB-14)/30.72;
    let growth = (HHDsNeeded-HHDsNeeded1b4)/2;
    let WidthHHDS = 65536;
    WidthHHDS += growth;
    let WidthInches = WidthHHDS*2.8;
    let WidthMiles = WidthInches*1.57828e-5;
    for (i; i<stackHeight; i++){
        WidthMiles = WidthMiles-(WidthMiles*(1/(i+1)));
    }
    return WidthMiles;
}
function WidthNoH() {
    let HHDsNeeded = SizeTB/30.72;
    let HHDsNeeded1b4 = (SizeTB-14)/30.72;
    let growth = (HHDsNeeded-HHDsNeeded1b4)/2;
    let WidthHHDS = 65536;
    WidthHHDS += growth;
    let WidthInches = WidthHHDS*2.8;
    let WidthMiles = WidthInches*1.57828e-5;
    return WidthMiles;
}
function Length() {
    let HHDsNeeded = SizeTB/30.72;
    let HHDsNeeded1b4 = (SizeTB-14)/30.72;
    let growth = (HHDsNeeded-HHDsNeeded1b4)/2;
    let LengthHHDS = 52650.76955159505;
    LengthHHDS += growth;
    let LengthInches = LengthHHDS*4.0;
    let LengthMiles = LengthInches*1.57828e-5;
    for (i; i<stackHeight; i++){
        LengthMiles = LengthMiles-(LengthMiles*(1/(i+1)));
    }
    return LengthMiles;
}
function LengthNoH() {
    let HHDsNeeded = SizeTB/30.72;
    let HHDsNeeded1b4 = (SizeTB-14)/30.72;
    let growth = (HHDsNeeded-HHDsNeeded1b4)/2;
    let LengthHHDS = 52650.76955159505;
    LengthHHDS += growth;
    let LengthInches = LengthHHDS*4.0;
    let LengthMiles = LengthInches*1.57828e-5;
    return LengthMiles;
}

function both(){
    Width();
    Length();
}
/**
let layers = 1;
let bothinterval= setInterval(both, 333.33)
function WidthBasedOnHeight(){
    let WidthMiles = Width()-(Width()*(1/(layers+1)));
    layers+= 1;
    return WidthMiles;
}  
function LengthBasedOnHeight(){
    let LengthMiles = Length()-(Length()*(1/(layers+1)));
    layers+= 1;
    return LengthMiles;
}
function Lengthmixingboth(){
    let withboth = LengthBasedOnHeight+(LengthBasedOnHeight()-length())
    return withboth
}
function Widthmixingboth(){
    let withboth = (WidthBasedOnHeight()-Width())
    return withboth
}
*/



let lorw = 0
function main(){
    while(i < stackHeight){
        if (lorw == 0){
            WidthMi = Width();
            lorw =1;
        }
        if (lorw == 1){
            LengthMi = Length();
            lorw = 0;
        }

        }
    if(i==stackHeight){
        LengthMi = LengthNoH();
        WidthMi = WidthNoH();
    }
    }
let maininterval = setInterval(main, 333.33)



/** 
function check(){
    
    while(i < stackHeight){
        if (Width() > Length()){
            WidthMi = heightWidth();30
        }
        if (Width() < Length()){
            LengthMi = heightLength();
        }
            i++;   
        }
    }
let whileinterval = setInterval(check, 333.33);
*/
/** 
function temporary(){
    console.log(heightLength());
    console.log(heightWidth());
    console.log(Length());
    console.log(Width());
    console.log(HeightFt);
    console.log(priceUSD);
}
*/

//let allInterval = setInterval(temporary, 333.33);



function Update() {
    document.getElementById("SizeTB").innerHTML = SizeTB;
    document.getElementById("HeightStack").innerHTML = HeightFt;
    document.getElementById("WidthMiles").innerHTML = WidthMi;
    document.getElementById("LengthMiles").innerHTML = LengthMi;
    document.getElementById("PriceHHDs").innerHTML = priceUSD;
}
let DocInterval = setInterval(Update, 333.33);