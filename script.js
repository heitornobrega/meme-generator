let inputText = document.querySelector('#text-input');
inputText.addEventListener('input', printText);

function printText(event){
    let paragrafo = document.querySelector('#meme-text')
    paragrafo.innerText = event.target.value;
}

let memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('change', putImage);

function putImage(){
    let img = document.getElementById('meme-image');
    let url = URL.createObjectURL(memeInsert.files[0]);
    img.src = url;
}

let water = document.getElementById('water');
water.addEventListener('click', function(){
    let imageContainer = document.getElementById('meme-image-container');
    imageContainer.style.border = 'double blue 5px';
})

let vermelho = document.getElementById('fire');

vermelho.addEventListener('click', function(){
    let imageContainer = document.getElementById('meme-image-container');
    imageContainer.style.border = 'dashed red 3px';
})

let earth = document.getElementById('earth');

earth.addEventListener('click', function(){
    let imageContainer = document.getElementById('meme-image-container');
    imageContainer.style.border = 'groove green 6px';
})

let meme1 = document.getElementById('meme-1');

meme1.addEventListener('click', function(){
    let img = document.getElementById('meme-image');
    img.setAttribute('src', 'imgs/meme1.png');
})

let meme2 = document.getElementById('meme-2');

meme2.addEventListener('click', function(){
    let img = document.getElementById('meme-image');
    img.setAttribute('src', 'imgs/meme2.png');
})

let meme3 = document.getElementById('meme-3');

meme3.addEventListener('click', function(){
    let img = document.getElementById('meme-image');
    img.setAttribute('src', 'imgs/meme3.png');
})

let meme4 = document.getElementById('meme-4');

meme4.addEventListener('click', function(){
    let img = document.getElementById('meme-image');
    img.setAttribute('src', 'imgs/meme4.png');
})


