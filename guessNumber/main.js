console.log('connected😋');
//random number 
const randNum = parseInt(Math.random()*20+1);
console.log(randNum);

const btn = document.getElementsByClassName('btn')[0];

const notice=document.getElementById('notice');

const form = document.getElementsByClassName('border')[0];

const score=document.getElementsByClassName('score')[0]

const highScore = document.getElementsByClassName('highName');

var count = 0;

btn.addEventListener('click',function(s){
    s.preventDefault();

    const num = document.getElementById('num').value
    
    if(randNum < num){
        notice.innerText = "Try smaller number"
        form.style.borderColor = 'red'
        form.style.backgroundColor='rgb(0,255,255)'
        count++;
        score.innerText = count;

    } else if(randNum == num){
        notice.innerText = "Congrats!🤩🎉🎉"
        form.style.borderColor = 'green'
        form.style.backgroundColor='rgb(255,255,0)'
        score.innerText = count;
    }
    else{
        notice.innerText = "Try bigger number"
        form.style.borderColor = 'red'
        form.style.backgroundColor='rgb(255,0,0)'
        count++;
        score.innerText = count;
    }
    form.reset()
    num = ""
    count = 0
})