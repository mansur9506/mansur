// // обратботка кнопки 
// let toggleBtn = document.querySelector(".toggle-btn");
// let menu = document.querySelector('.menu');
// let closeMenuBtn = menu.querySelector('.close-btn');
// toggleBtn.onclick = function(){
//     menu.classList.remove('hide-menu')
// }
// closeMenuBtn.onclick = function(){
//     menu.classList.add('hide-menu')
// }



function toggleMenu () {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("hide-menu");
}

new WOW().init();

$(".slider").owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    margin:15,
     responsive: { 
       0: {items:2}, 
        768:{items:4}
    }
});

let drinksPlase = document.querySelector("#drinks").querySelector('.grid-4');
let desertsPlase = document.querySelector("#deserts").querySelector('.grid-4');
let snacksPlase = document.querySelector("#snakcs").querySelector('.grid-4');
let drinkCard = "";
let desertCard ="";
let snacksCard="";


function renderCards(data, cards, place){
    data.forEach(item => {
        cards += `
        <div class="product-card">
            <img src="${item.img}" alt="">
            <span class="type">${item.type}</span>
            <h3>${item.title}</h3>
            <span>${item.price}</span>
        </div>
    `;
    });
    
    place.innerHTML = cards;
}
renderCards(coffeeData, drinkCard,drinksPlase);
renderCards(desertData, desertCard, desertsPlase);
renderCards(snacksData, snacksCard,snacksPlase);