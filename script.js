
function calculateBMI() {
   const weight = parseFloat(document.getElementById('weightinputbox').value);
   const height = parseFloat(document.getElementById('heightinputbox').value) / 100;


   if (!weight || !height) {
       alert('Please enter valid values!');
       return;
   }

   const bmi = (weight / (height * height)).toFixed(2);
   document.getElementById('BMIValue').textContent = `BMI: ${bmi}`;

   moveIndicator(bmi);
}

function moveIndicator(bmi) {
   const indicator = document.getElementById('bmiIndicator');

   let position = ((bmi - 10) / (40 - 10)) * 100;
   position = Math.min(100, Math.max(0, position)); 

   indicator.style.transition = 'none';
   indicator.style.left = `${indicator.style.left || '0%'}`;

   setTimeout(() => {
       indicator.style.transition = 'left 3s ease'; 
       indicator.style.left = `${position}%`;
   }, 500);

   if (bmi < 18) {
       document.getElementById('BMIResult').textContent = 'Underweight 🥦';
   } else if (bmi < 25) {
       document.getElementById('BMIResult').textContent = 'Normal ✅';
   } else if (bmi < 35) {
       document.getElementById('BMIResult').textContent = 'Overweight 🍔';
   } else {
       document.getElementById('BMIResult').textContent = 'Obese 🚨 ';
   }
}



function clearBMI() {
   document.getElementById('weightinputbox').value = '';
   document.getElementById('heightinputbox').value = '';
   document.getElementById('BMIValue').textContent = '';
   document.getElementById('BMIResult').textContent = '';

   document.getElementById('bmiIndicator').style.left = '0%';
}

