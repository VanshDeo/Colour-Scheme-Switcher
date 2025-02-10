const buttons = document.querySelectorAll('.button')
console.log(buttons);

buttons.forEach( (b) => {
    console.log(b);
    b.addEventListener('click',function(c) {
        console.log(c.target.style.backgroundColor)
        if(c.target.style.backgroundColor === 'red'){
            document.body.style.backgroundColor = c.target.style.backgroundColor
        }
        if(c.target.style.backgroundColor === 'blue'){
            document.body.style.backgroundColor = c.target.style.backgroundColor
        }
        if(c.target.style.backgroundColor === 'green'){
            document.body.style.backgroundColor = c.target.style.backgroundColor
        }
        if(c.target.style.backgroundColor === 'yellow'){
            document.body.style.backgroundColor = c.target.style.backgroundColor
        }
    })
} )