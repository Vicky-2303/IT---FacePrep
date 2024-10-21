function brandsview(){
   let x=document.querySelector(".brands").checked;
   let y=x.value;
   document.querySelector("#output").textContent=y;
}


  // Select the button by its ID
const button = document.getElementById('add');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Change the text of the button
    button.textContent = 'You Clicked Me!';
});

  
