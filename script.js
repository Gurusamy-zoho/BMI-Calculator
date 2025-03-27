
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

setTimeout(() => {
    Swal.fire({
        title: `Basic Recommendations`,
        html: `
            <style>
                ol { padding-left: 20px; text-align: left; }
                ol li { display: flex; align-items: flex-start; gap: 5px; margin-bottom: 14px; }
                ol li b { width: 100px; flex-shrink: 0; }
            </style>
            <ol> 
                <li><b>Balanced Diet:</b> Eat proteins (eggs, fish, poultry), healthy fats (nuts, avocado), and complex carbs (whole grains).</li>
                <li><b>Frequent Meals:</b> Have small, nutrient-rich meals every 3-4 hours to maintain energy.</li>
                <li><b>Exercise:</b> Focus on strength training to build muscle, avoid excessive cardio.</li>
                <li><b>Hydration:</b> Drink high-calorie smoothies and stay hydrated.</li>
            </ol>

            <p style="color:red; font-weight:bold; text-align: center;">⚠ Best to consult your doctor for personalized advice.</p>
        `,
        icon: 'warning',
        confirmButtonText: 'Got it',
        position: 'center',
        width: '450px',
        heightAuto: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
}, 2000);




   } else if (bmi < 26) {
       document.getElementById('BMIResult').textContent = 'Normal ✅';

       setTimeout(() => {
    Swal.fire({
        title: `Healthy Lifestyle Tips`,
        html: `
            <style>
                ol { padding-left: 20px; text-align: left; }
                ol li { display: flex; align-items: flex-start; gap: 5px; margin-bottom: 10px; }
                ol li b { width: 120px; flex-shrink: 0; }
            </style>
            <ol> 
                <li><b>Balanced Diet:</b> Maintain a healthy mix of proteins, healthy fats, and whole grains.</li>
                <li><b>Exercise:</b> Combine strength training and moderate cardio for overall fitness.</li>
                <li><b>Hydration:</b> Drink enough water daily to stay hydrated and support digestion.</li>
                <li><b>Rest & Sleep:</b> Ensure 7-9 hours of quality sleep for overall well-being.</li>
            </ol>

            <p style="color:green; font-weight:bold; text-align: center;">✅ Keep up your healthy habits for long-term well-being!</p>
        `,
        icon: 'success',
        confirmButtonText: 'Got it',
        position: 'center',
        width: '450px',
        heightAuto: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
}, 2000);

   } else if (bmi < 36) {
       document.getElementById('BMIResult').textContent = 'Overweight 🍔';
       setTimeout(() => {
    Swal.fire({
        title: `Weight Management Tips`,
        html: `
            <style>
                ol { padding-left: 20px; text-align: left; }
                ol li { display: flex; align-items: flex-start; gap: 5px; margin-bottom: 10px; }
                ol li b { width: 130px; flex-shrink: 0; }
            </style>
            <ol> 
                <li><b>Balanced Diet:</b> Reduce processed foods and excess sugar, focus on whole foods.</li>
                <li><b>Portion Control:</b> Eat smaller portions and avoid overeating to regulate calorie intake.</li>
                <li><b>Regular Exercise:</b> Engage in a mix of cardio and strength training for fat loss.</li>
                <li><b>Sleep & Stress:</b> Manage stress and ensure proper sleep to support weight control.</li>
            </ol>

            <p style="color:red; font-weight:bold; text-align: center;">⚠ Consult a doctor or nutritionist for a personalized weight-loss plan.</p>
        `,
        icon: 'warning',
        confirmButtonText: 'Got it',
        position: 'center',
        width: '450px',
        heightAuto: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
}, 3500);

   } else {
       document.getElementById('BMIResult').textContent = 'Obese 🚨';
       setTimeout(() => {
    Swal.fire({
        title: `Overweight Management`,
        html: `
            <style>
                ol { padding-left: 20px; text-align: left; }
                ol li { display: flex; align-items: flex-start; gap: 5px; margin-bottom: 10px; }
                ol li b { width: 140px; flex-shrink: 0; }
            </style>
            <ol> 
                <li><b>Healthy Diet:</b> Reduce processed foods, sugars, and excess carbs. Eat fiber-rich and protein-packed meals.Avoid overeating</li>
                <li><b>Regular Exercise:</b> Combine strength training and cardio (walking, cycling) for effective weight loss.</li>
                <li><b>Sleep & Stress:</b> Get 7-8 hours of sleep and manage stress, as they impact weight gain.</li>
            </ol>

            <p style="color:red; font-weight:bold; text-align: center;">⚠ Consult your doctor for a personalized weight-loss plan.</p>
        `,
        icon: 'error',
        confirmButtonText: 'Got it',
        position: 'center',
        width: '450px',
        heightAuto: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
}, 4000);

   }
}



function clearBMI() {
   document.getElementById('weightinputbox').value = '';
   document.getElementById('heightinputbox').value = '';
   document.getElementById('BMIValue').textContent = '';
   document.getElementById('BMIResult').textContent = '';

   document.getElementById('bmiIndicator').style.left = '0%';
}

