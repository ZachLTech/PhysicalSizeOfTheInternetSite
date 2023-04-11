//According to some random source, the internet grows 43tb per second. (Don't know how long this statistic will last but who cares itll just be not completely accurate)
//2.5HDD: 2.8in wide 4.0in long
//3.5HDD: 

let SizeTB = 9196800;
let HDD35Stack14 = 14*3;
let WidthInches = SizeTB*2.8;
let WidthMiles = WidthInches*1.57828e-5;
let LengthInches = SizeTB*4.0;
let LenghtMiles = LengthInches*1.57828e-5;

function addSizeTB(){
    SizeTB += 14;
}

let UpdateInterval = setInterval(addSizeTB, 333.33);
let DocInterval = setInterval(Update, 333.33);
function Update() {
    document.getElementById("SizeTB").innerHTML = SizeTB;
}

function Width() {
    let WidthInches = SizeTB*2.8;
    let WidthMiles = WidthInches*1.57828e-5;
    document.getElementById("WidthMiles").innerHTML = WidthMiles;
}
let widthinterval = setInterval(Width,333.33);

function Length() {
    let LengthInches = SizeTB*4.0;
    let LenghtMiles = LengthInches*1.57828e-5;
    document.getElementById("LengthMiles").innerHTML = LenghtMiles;
}
let lengthinterval = setInterval(Length,333.33);