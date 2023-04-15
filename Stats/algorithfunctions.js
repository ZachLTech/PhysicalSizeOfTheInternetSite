//According to some random source, the internet grows 43tb per second. (Don't know how long this statistic will last but who cares itll just be not completely accurate)
//2.5HDD: 2.8in wide 4.0in long
//3.5HDD: 

let SizeTB = 9196800;

        // Initialize the variable
        let stackHeight = 0;
        // Function to update the variable and display the value
        function updateVariable() {
            // Get the input value
            const inputValue = parseInt(document.getElementById("inputNumber").value);
            // Update the variable
            stackHeight = inputValue;
        }

let HHDsNeeded = SizeTB/30.72;
let HDD35Stack = stackHeight*3;
let WidthInches = (HHDsNeeded/2)*2.8;
let WidthMiles = WidthInches*1.57828e-5;
let LengthInches = (HHDsNeeded/2)*4.0;
let LenghtMiles = LengthInches*1.57828e-5;
let price = (SizeTB/30.72)*4000; //each 2.5 HHD has 30.72 TB


function addSizeTB(){
    SizeTB += 14;
}

let UpdateInterval = setInterval(addSizeTB, 333.33);
let DocInterval = setInterval(Update, 333.33);
function Update() {
    document.getElementById("SizeTB").innerHTML = SizeTB;
}

function Width() {
    let HHDsNeeded = SizeTB/30.72;
    let HDD35Stack = stackHeight*3;
    let WidthInches = (HHDsNeeded/2)*2.8;
    let WidthMiles = (WidthInches*1.57828e-5).toFixed(2);
    document.getElementById("WidthMiles").innerHTML = WidthMiles;
}
let widthinterval = setInterval(Width,333.33);

function Length() {
    let HHDsNeeded = SizeTB/30.72;
    let HDD35Stack = stackHeight*3;
    let LengthInches = (HHDsNeeded/2)*4.0;
    let LenghtMiles = (LengthInches*1.57828e-5).toFixed(2);
    document.getElementById("LengthMiles").innerHTML = LenghtMiles;
}
let lengthinterval = setInterval(Length,333.33);

function Price() {

}
