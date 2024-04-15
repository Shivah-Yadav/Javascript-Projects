console.log('connected😋');
//random number 
const randNum = parseInt(Math.random()*20+1);
console.log(randNum);

// accessing button
const btn = document.getElementsByClassName('btn')[0];

//access notice

const notice=document.getElementById('notice');

//access form
const form = document.getElementsByClassName('border')[0];

//access score class
const score=document.getElementsByClassName('score')[0]

//access highScore
const highScore = document.getElementsByClassName('highName');

var count = 0;

btn.addEventListener('click',function(s){
    s.preventDefault();

    const num = document.getElementById('num').value
    console.log(num)

    if(randNum < num){
        // console.log("Try smaller number");

        notice.innerText = "Try smaller number"
        form.style.borderColor = 'red'
        form.style.backgroundColor='rgb(255,0,0)'
        count++;
        score.innerText = count;
    } else if(randNum == num){
        // console.log('Congrats!🤩🎉🎉');

        notice.innerText = "Congrats!🤩🎉🎉"
        form.style.borderColor = 'green'
        form.style.backgroundColor='rgb(255,255,0)'
        score.innerText = count;

    }
    else{
        // console.log('Try bigger number');

        notice.innerText = "Try bigger number"
        form.style.borderColor = 'red'
        form.style.backgroundColor='rgb(255,0,0)'
        count++;
        score.innerText = count;

    }
    form.reset()
})