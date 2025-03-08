
function validateNumberInput(event){
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); 
}


function calculateBMI(){

    let weight = document.getElementById("weightinputbox").value;
    let height = document.getElementById("heightinputbox").value;

    const mheight = height/100;

    const bmi = (weight/(mheight*mheight)).toFixed(2);

    if(weight==''){
        alert("Weight can't be empty");
        return;
    }

    if(height==''){
        alert("Height can't be empty");
        return;
    }

 if(weight<20 || weight>200){ 
    const weightRange = document.getElementById("weightRange");
    weightRange.style.display="block";

    return;
 }

 else{
   const weightRange = document.getElementById("weightRange");
   weightRange.style.display="none";
 }

 if(height<120 || height>250){
    const heightRange = document.getElementById("heightRange");
    heightRange.style.display = "block";

    return;
 }

 else{
   const heightRange = document.getElementById("heightRange");
   heightRange.style.display = "none";
 }

 if(weight>=20 && height>=120){
    let Result ="";

    if(bmi>=0 && bmi<=18){
       Result = "Underweight";
    }
    else if(bmi>18 && bmi<=25){
       Result = "Normal";
    }
    else if(bmi>25 && bmi<=40){
       Result = "Overweight";
    }
    else{
        Result ="Obese";
    }
    document.getElementById("BMIValue").innerText ="BMI = "+bmi;
    document.getElementById("BMIResult").innerText=Result;

    return;
 }

 else{
   document.getElementById("BMIValue").innerText =" ";
    document.getElementById("BMIResult").innerText=" ";
 }

}

function clearBMI(){
   document.getElementById("weightinputbox").value="";
   document.getElementById("heightinputbox").value="";

//    const heightRange = document.getElementById("heightRange");
//    heightRange.style.display = "none";

//    const weightRange = document.getElementById("weightRange");
//    weightRange.style.display="none";

   const subMain = document.getElementById("subMain");
   subMain.style.display="none";

   location.reload();


}