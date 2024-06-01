function funfacts(){
    let fact=[
        "Beards have a health-benefit effect.They prevent pollen from entering the mouth so that the possibility of getting hay fever is decreased",

"Beavers have orange teeth, as they contain a lot of iron. The mineral makes the teeth particularly resistant to external forces.",

 "Gray whales exclusively mate in a threesome.",

" The average rent for a one room apartment in Manhattan is 3,400 dollars.",

" The most common zodiac sign among billionaires is Aquarius. The least common one is Cancer.",

 "Hitler planned to celebrate his victory over Russia in the Hotel Astoria in Saint Petersburg." 
    ]

let btn=document.getElementById("btn");
let clr=document.getElementById("facts");

btn.addEventListener("click",()=>{
    let random =getRandomNumber();
    clr.textContent=fact[random];
});
function getRandomNumber() {
    return Math.floor(Math.random() * fact.length);
  }
}
funfacts();