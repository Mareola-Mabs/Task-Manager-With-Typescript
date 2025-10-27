const btn1 = document.querySelector<HTMLButtonElement>('.test-btn')! // btn.disabled = true // Works for specific properties

// btn1.addEventListener //Won't work, btn could be null or undefined

// btn1?.addEventListener // Works (best)

// if(btn1){} else{} // Using if statements to check also works

// const btn = document.querySelector('.test-btn')! // Using exclamation(non -null assertion) also works, but will crash at runtime if the element doesn't 


