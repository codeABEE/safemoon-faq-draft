
let questionBank = [
    {
        questionTitle:"What is Safemoon?",
        questionBody:"Safemon is a new cryptocurrency that is taking over the coin world.",
        id:1,
    },
    {
        questionTitle:"What is Safemoon?",
        questionBody:"Safemon is a new cryptocurrency that is taking over the coin world.",
        id:2,
    },
    {
        questionTitle:"Where can I buy safemoon?",
        questionBody:"You can buy safemoon from TRUST WALLET using Pancake Swap",
        id:3,
    },
    {
        questionTitle:"What is Slippage on Pancake swap?",
        questionBody:"Slippage is 11-13% -- Set it to 12% to buy safemoon via pancake swap",
        id:4,
    },
    {
        questionTitle:"Who is the CEO of safemoon?",
        questionBody:"John Karony - Capt Hodl",
        id:5,
    },
    {
        questionTitle:"When was the safemoon protocol created?",
        questionBody:"Safemoon was created in March, 2021",
        id:6,
    },
    {
        questionTitle:"What is TRUST WALLET?",
        questionBody:"TRUST WALLET is a safe place to store all  crypto-currencies including safemoon. It's safe and free from hacker's attack.",
        id:7,
    },
{
      questionTitle: "Where do I get reliable information aboutSafemoon?",
      questionBody: "https://safemoon.net/",
      Id:8
}
    
];

let mainSection = document.querySelector(".main-section");

document.addEventListener("DOMContentLoaded",function(){
let populateScreen = questionBank.map(function(item){
    
    return `<article class="article">
    <div class="question-section">
        <div class="question-title">
            <h3>${item.questionTitle}</h3>
          
            <button class="question-toggle">
                <span class="plus-icon">
                    <i class="far fa-plus-square"></i>
                  </span>
                  <span class="minus-icon">
                    <i class="far fa-minus-square"></i>
                  </span>
            </button>
            
        </div>
        <div class="question-body">
            <p>${item.questionBody}
            </p>
        </div>
    </div>
</article>`
});
populateScreen = populateScreen.join(" ");
mainSection.innerHTML = populateScreen;


let toggleBtn = document.querySelectorAll(".question-toggle")
toggleBtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
    let showText = ( e.currentTarget.parentElement.parentElement);
    console.log(showText)
    showText.classList.toggle("show-text")
})

})

});
