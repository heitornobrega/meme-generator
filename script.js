let inputText = document.querySelector('#text-input');
inputText.addEventListener('keyup', printText);

function printText(event){
    let paragrafo = document.querySelector('#meme-text')
    paragrafo.innerText = event.target.value;
}