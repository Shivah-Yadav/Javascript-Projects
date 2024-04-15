const myAudio = document.querySelector('audio')
const myPlay = document.getElementById('play')

isAudioPlaying = false

function playAudio(){
    isAudioPlaying = true
    myAudio.play();
    myPlay.classList.replace('fa-play','fa-pause')
}

function pauseAudio(){
    isAudioPlaying  = false
    myAudio.pause()
    myPlay.classList.replace('fa-pause','fa-play')
}

myPlay.addEventListener('click',function(){
    if(isAudioPlaying){
        pauseAudio()
    }else{
        playAudio()
    }
})

const data = [
    {
        singer:'Keeravani',
        songName:'Dandalayya',
        info:'dandalayya'
    },
    {
        singer:'Ram Nandamuri',
        songName:'Eeswarude',
        info:'eeswarude'
    },
    {
        singer:'Teja Sajja',
        songName:'Poolamme Pilla',
        info:'poolamme'
    },
]

const mySong = document.getElementById('song')
const mySinger = document.getElementById('singer')
const myImage = document.querySelector('img')

const myForward = document.getElementById('forward')
const myBackward = document.getElementById('backward')

function loadSong(song){
    mySinger.innerText = song.singer;
    mySong.innerText = song.songName
    myImage.src = `images/${song.info}.jfif`
    myAudio.src = `audio/${song.info}.mp3`
}

let songIndex = 0

function nextSong(){
}

myForward.addEventListener('click',function(){
    songIndex++;
    if(songIndex > data.length-1){
        songIndex = 0
    }
    console.log(songIndex);
    loadSong(data[songIndex])
})
myBackward.addEventListener('click',function(){
    songIndex--;
    if(songIndex < 0){
        songIndex = data.length - 1
    }
    console.log(songIndex);
    loadSong(data[songIndex])
})