let rateNumbersTag = document.querySelector(".rate-numbers");
const ratingStartStates = document.querySelector(".rating-start");
const ratingEndStates = document.querySelector(".rating-end");
const submitBtn= document.querySelector(".btn");
const currentRate = document.querySelector(".current-rate");
const rateNumbers= [1,2,3,4,5];
for (let i = 0; i < rateNumbers.length; i++) {
    let div = document.createElement("div");
    div.id= i;
    div.classList.add("rate");
    div.innerText = rateNumbers[i];
    
    div.addEventListener("click", (event)=>{
        let clickId = event.target.id;
        let clickTag = document.getElementById(clickId);
        currentRate.innerText = clickTag.innerText;
       if(clickId === "4"){
        clickTag.classList.toggle("bg-orange");
       } else{
        clickTag.classList.toggle("bg-gray");
       }

    })
    rateNumbersTag.append(div);
}
submitBtn.addEventListener("click", () => {
    ratingStartStates.style.display = "none";
    ratingEndStates.style.display = "block";
})


