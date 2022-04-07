// Esercizio di oggi : **JS Hamburger menu**
// nome repo: js-hamburger
// **Hamburger menu:**
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio scaricando questa repo:
// https://bitbucket.org/teachersboolean/ex-hamburger-menu-base/downloads/
// Ricordate di **scrivere solo il codice JavaScript** e non modificare HTML e CSS
// **Consiglio del giorno:**
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a vostro vantaggio!
// P.S.: l’url del logo che trovate nell’html non è più raggiungibile, potete sostituirlo con questo:
// http://boolean.careers/images/misc/logo.png
// buon lavoro!

const logo = document.querySelector('img');

console.log(logo);

logo.style.cssText = 'width:100%';

const hamburgiMenuSososososo = document.querySelector('.fa-bars');
const hamburgiUl = document.querySelector('.hamburger-menu');
const closeHamburgerini = document.querySelector('.fa-times')
console.log(hamburgiMenuSososososo);
console.log(hamburgiUl);
console.log(closeHamburgerini);

//some tests
// hamburgiUl.style.cssText = 'display:block;';

hamburgiMenuSososososo.addEventListener('click', function(){
    hamburgiUl.style.cssText = 'display:block;';
})

closeHamburgerini.addEventListener('click', function(){
    hamburgiUl.style.cssText = 'display:none;'
    
})