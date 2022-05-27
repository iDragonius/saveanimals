const texts = ['ANIMALS', 'ENVIROMENT', 'WORLD'];
let count = 0;
let index = 0;
let currentText = '';
let letter ='';

(function type() {
    if(count == texts.length){
        count = 0;
    }
    currentText = texts[count]
    letter = currentText.slice(0, ++index)

    document.getElementById('typing').textContent = letter;
    if(letter.length == currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400)
}())



const nav = document.getElementById('navi');
const input = document.getElementById('mail');
const navFirst = document.getElementById('nav')
input.addEventListener('mouseover', function () {
    document.getElementById('my-video').style.opacity = 0.5;
    document.getElementById('video-text').style.background = '#97c628'
    
})

input.addEventListener('mouseout', function () {
    document.getElementById('my-video').style.opacity = 1;
    document.getElementById('video-text').style.background = 'transparent'
})

let scrolls = [];
window.addEventListener('scroll', function(e) {
    if(window.scrollY > 80) {
        scrolls.unshift(window.scrollY)
        
        if(scrolls[0] < scrolls[1]) {
            nav.style.display = 'block'
        } else {
            nav.style.display = 'none'
        }
    } else if (window.scrollY < 80) {
        nav.style.display = 'none'
    }
})




// $('a[href*="#initiative"]').on('click', function (e) {
//     e.preventDefault();
  
//     $('html, body').animate({
//       scrollTop: $($(this).attr('href')).offset().top
//     }, 500, 'linear');
//   });

