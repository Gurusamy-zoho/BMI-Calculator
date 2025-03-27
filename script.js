
function calculateBMI() {
   const weight = parseFloat(document.getElementById('weightinputbox').value);
   const height = parseFloat(document.getElementById('heightinputbox').value) / 100;


   if (!weight || !height) {
    Swal.fire({
        title: 'Error',
        html: `Please enter valid values`,
        icon: 'error',
        confirmButtonText: 'Ok',
        timer: 3000,
        position: 'center',
        heightAuto: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    return;
   }

   const bmi = (weight / (height * height)).toFixed(2);
   document.getElementById('BMIValue').textContent = `BMI: ${bmi}`;

   moveIndicator(bmi);
}

function moveIndicator(bmi) {
   const indicator = document.getElementById('bmiIndicator');

   let position;
   if (bmi < 18) {
       position = (bmi / 18) * 25;
   } else if (bmi < 26) {
       position = 25 + ((bmi - 18) / (26 - 18)) * 25;
   } else if (bmi < 36) {
       position = 50 + ((bmi - 26) / (36 - 26)) * 25;
   } else {
       position = 75 + ((bmi - 36) / (40 - 36)) * 25;
   }
   
   position = Math.min(100, Math.max(0, position));
   

   indicator.style.transition = 'none';
   indicator.style.left = `${indicator.style.left || '0%'}`;

   setTimeout(() => {
       indicator.style.transition = 'left 3s ease'; 
       indicator.style.left = `${position}%`;
   }, 500);

   if (bmi < 18) {
       document.getElementById('BMIResult').textContent = 'Underweight 🥦';
   } else if (bmi < 26) {
       document.getElementById('BMIResult').textContent = 'Normal ✅';
   } else if (bmi < 36) {
       document.getElementById('BMIResult').textContent = 'Overweight 🍔';
   } else {
       document.getElementById('BMIResult').textContent = 'Obese 🚨';
   }
}



function clearBMI() {
   document.getElementById('weightinputbox').value = '';
   document.getElementById('heightinputbox').value = '';
   document.getElementById('BMIValue').textContent = '';
   document.getElementById('BMIResult').textContent = '';

   document.getElementById('bmiIndicator').style.left = '0%';
}

