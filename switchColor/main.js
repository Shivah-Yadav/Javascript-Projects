
//access buttons
const btn1 = document.getElementsByClassName('btn1')[0];
const btn2 = document.getElementsByClassName('btn2')[0];

// const btn = document.getElementsByClassName('btn')[1];
const bgColor = document.querySelector('.container1')
const bgColor2 = document.querySelector('.container2')

const colorCode = document.querySelector('#colorCode')
const colorCode2 = document.querySelector('#colorCode2')


const numbers="0123456789";
const alphabets = "abcdef";

function getRandomNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getRandomAlphbet(){
    return alphabets[Math.floor(Math.random() * alphabets.length)]
}
function getRandom(){
    let arr = [];
    arr.push(getRandomNumber());
    arr.push(getRandomAlphbet());
    // console.log(arr);
    return arr[Math.floor(Math.random() * arr.length)]
}

btn1.addEventListener('click', function(){
    let hex ="#";
    for(let i=0; i<6; i++){
        hex += getRandom()
    }
    btn1.style.backgrounColor = hex;
    bgColor.style.backgroundColor = hex;
    colorCode.textContent = hex;
})

btn2.addEventListener('click', function(){
    let hex2 = '#';
    for(let j=0 ; j<6; j++){
        hex2 += getRandom();

    }
    bgColor2.style.backgroundColor = hex2;
    colorCode2.textContent = hex2;
})