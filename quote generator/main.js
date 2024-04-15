const button = document.getElementById('btn')
const myquote = document.getElementById('myquote')
const myAuthor = document.getElementById('myauthor')

const i1 = document.getElementById('i-one')
const i2 = document.getElementById('i-two')

const copy = document.getElementById('copy')
const volume = document.getElementById('volume')
const minus = document.getElementById('minus')

const myContainer = document.getElementById('container')
const myLoader = document.getElementById('loader')

function first(){
    //Container should be visible
    //Loader should not be visible
    myContainer.hidden = false;
    myLoader.hidden = true
}
function second(){
    //Container should not be visible
    //Loader should be visible
    myContainer.hidden = true;
    myLoader.hidden = false;
}

first()

button.addEventListener('click',async function(){
    second()
    const response = await fetch('https://dummyjson.com/quotes/random')
    let quotes =await response.json()
    myquote.innerText = quotes.quote;
    myAuthor.innerText = quotes.author;
    i1.style.display = 'inline'
    i2.style.display = 'inline'
    copy.style.display = 'inline'
    volume.style.display = 'inline'
    minus.style.display = 'inline'
    first()
})

copy.addEventListener('click',function(){
    navigator.clipboard.writeText(myquote.innerText)
})

volume.addEventListener('click',function(){
    const speech = new SpeechSynthesisUtterance(myquote.innerText);
    speechSynthesis.speak(speech)
})

