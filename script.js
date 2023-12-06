// let fitnessTips = [];

// fitnessTips.push("Take a 30-minute walk every day.");
// fitnessTips.push("Drink at least 8 glasses of water daily.");
// fitnessTips.push("Include strength training exercises in your workout routine.");
// fitnessTips.push("Eat an apple for the day ,which eventually keeps doctor away.");


// function getRandomTip() {
//     const randomIndex = Math.floor(Math.random() * fitnessTips.length);
//     return fitnessTips[randomIndex];
// }
// tipElement.textContent = getRandomTip();




// fetch random tip
function fetchRandomTip() {
    fetch('/api/tips')
        .then(response => response.json())
        .then(data => {
            const tip = data.tip;
            // Display the tip on the website
            const tipContainer = document.querySelector(".qt");
            tipContainer.innerText = tip;
            console.log(tip);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
// window.addEventListener('load', fetchRandomTip);

// Or call the function when a button is clicked, for example
const  btnClick = document.querySelector(".btn");

btnClick.addEventListener("click",fetchRandomTip);



// document.addEventListener('DOMContentLoaded', () => {
//     const btnClick =  document.querySelector(".btndiv");
  
//     // Add event listener to the "Next Tip" button
//     btnClick.addEventListener('click', fetchRandomTip);
//   });