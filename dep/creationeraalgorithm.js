//According to some random source, the internet grows 43tb per second. (Don't know how long this statistic will last but who cares itll just be not completely accurate)
//2.5HDD: 2.8in wide 4.0in long
//3.5HDD: 

let SizeTB = 106000000000;

        // Initialize the variable
        let stackHeight = 1;

        // Function to update the variable and display the value
        
        function updateVariable() {
            // Get the input value
            const inputValue = parseInt(document.getElementById("inputNumber").value);
            // Update the variable
            stackHeight = inputValue/2;

        }
        
//65536 harddrives wide
//52650.76955159505 long 
//above numbers found by getsquare.py to get an accurate size considering the length and width is filled in (bc realistically in a datacenter it is)


let amountadded = 0;


function addSizeTB(){
    SizeTB += 14;
    amountadded += 1;
}

let UpdateInterval = setInterval(addSizeTB, 333.3);

let HHDsNeeded = 0;
let HHDsNeeded1b4 = 0;
let growth =0;
let WidthInches =0;
let WidthMiles =0;
let priceUSD = 0;
let HeightFt = 0;
let WidthMi = 0;
let LengthMi = 0;






function Width() {
    HHDsNeeded = SizeTB/30.72;
    priceUSD = HHDsNeeded*4000; 
    HeightFt = stackHeight*(0.4*0.083);
    HHDsNeeded1b4 = ((SizeTB-14)/30.72);
    growth = ((HHDsNeeded-HHDsNeeded1b4)/2);
    WidthHHDS = 65536+(growth*amountadded);
    WidthInches = WidthHHDS*2.8;
    WidthMiles = WidthInches*1.57828e-5;
    WidthMi = ((WidthMiles*(1/stackHeight))-((WidthMiles*(1/stackHeight))*(1/(stackHeight+1))));
}
function Length() {
    HHDsNeeded = SizeTB/30.72;
    HHDsNeeded1b4 = (SizeTB-14)/30.72;
    growth = (HHDsNeeded-HHDsNeeded1b4)/2;
    LengthHHDS = 52650.76955159505+(growth*amountadded);
    LengthInches = LengthHHDS*4.0;
    LengthMiles = LengthInches*1.57828e-5;
    LengthMi = ((LengthMiles*(1/stackHeight))-((LengthMiles*(1/stackHeight))*(1/(stackHeight+1))));
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




function mainn(){
        Width();
        Length();
    }
let maininterval = setInterval(mainn, 333.33)



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