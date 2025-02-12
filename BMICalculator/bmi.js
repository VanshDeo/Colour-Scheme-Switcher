const button = document.querySelector('button')
console.log(button);
const info = document.querySelector('.info')
// info.textContent= 'Anything'
button.addEventListener('click', function(){
    const height = document.querySelector('.numheight').value;
    const weight = document.querySelector('.numweight').value;
    // console.log(height);
    // console.log(weight);
    

    const bmi = weight/(height*height);
    info.textContent = `Your BMI is ${bmi}`;
    
})



