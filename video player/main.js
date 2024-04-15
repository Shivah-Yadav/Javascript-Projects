const playButton = document.getElementById('play')
const myVideo = document.querySelector('video')

let isVideoPlaying = false;

function playVideo(){
    isVideoPlaying = true;
    playButton.classList.replace('fa-play','fa-pause')
    myVideo.play()
}
function pauseVideo(){
    isVideoPlaying = false;
    playButton.classList.replace('fa-pause','fa-play')
    myVideo.pause()
}

function controlVideo(){
    if(isVideoPlaying){
        pauseVideo()
    }else{
        playVideo()
    }
}

playButton.addEventListener('click',controlVideo)
myVideo.addEventListener('click',controlVideo)


let displayCurrentTime = document.getElementById('currentTime')
let displayDuration = document.getElementById('duration')
let myprogressBar = document.getElementById('progress-bar')

myVideo.addEventListener('timeupdate',function(e){
    //logic for progress bar
    let myCurrentTime = e.srcElement.currentTime;
    let myDuration = e.srcElement.duration;
    let playedPercentage = (myCurrentTime / myDuration) * 100
    myprogressBar.style.width = `${playedPercentage}%`

    // logic for current time and duration
    let durationInMinutes = Math.floor(myDuration / 60)
    let durationInSeconds = Math.floor(myDuration % 60)
    if(durationInSeconds < 10){
        durationInSeconds = `0${durationInSeconds}`
    }
    let durationformat = `${durationInMinutes}:${durationInSeconds}`
    displayDuration.innerText = durationformat

    let currentTimeInMinutes = Math.floor(myCurrentTime / 60);
    let currentTimeInSeconds = Math.floor(myCurrentTime % 60)
    if(currentTimeInSeconds < 10){
        currentTimeInSeconds = `0${currentTimeInSeconds}`
    }
    let currentTimeFormat = `${currentTimeInMinutes}:${currentTimeInSeconds}`
    displayCurrentTime.innerText = currentTimeFormat
})

// Controlling Progress Bar Video Playback
const myProgressRange = document.getElementById('progress-range')
const myProgressBar = document.getElementById('progress-bar')

myProgressBar.addEventListener('click',function(e){
    let totalWidth = e.srcElement.offsetWidth;
    let totalWidthFromStart = e.offsetX
    const clickPercentage = (totalWidthFromStart / totalWidth) * 100
    myProgressBar.style.width = `${clickPercentage}%`
    myVideo.currentTime = (totalWidthFromStart / totalWidth) * myVideo.currentTime
    e.stopPropagation()
})

myProgressRange.addEventListener('click',function(e){
    let totalWidth = e.srcElement.offsetWidth
    let totalWidthFromStart = e.offsetX
    const clickPercentage = (totalWidthFromStart / totalWidth) * 100
    myProgressBar.style.width = `${clickPercentage}%`
    myVideo.currentTime = (totalWidthFromStart / totalWidth) * myVideo.duration;
    playVideo()
})

//Controlling Audio : Volume Cotroller with Slider

const volumeRange = document.getElementById('volume-range')
const volumeBar = document.getElementById('volume-bar')

// volumeBar.addEventListener('click',function(e){
//     //control the volume of the video
//     e.stopPropagation()
//     let totalWidth = e.srcElement.offsetWidth
//     let totalWidthFromStart = e.offsetX
//     const clickPercentage = (totalWidthFromStart / totalWidth) * 100
//     volumeBar.style.width = `${clickPercentage}%`
// })

volumeRange.addEventListener('click',function(e){
    //control the volume of the video
    let totalWidth = e.srcElement.offsetWidth
    let totalWidthFromStart = e.offsetX
    const clickPercentage = (totalWidthFromStart / totalWidth) * 100
    volumeBar.style.width = `${clickPercentage}%`

    let volumeInfo =totalWidthFromStart / totalWidth
    myVideo.volume = volumeInfo
})

const volumeButton = document.getElementById('volume')

let isVideoMuted = false

function muteVideo(){
    isVideoMuted = true;
    volumeButton.classList.replace('fa-volume-up','fa-volume-mute')
    myVideo.volume = 0
    volumeBar.style.width = `${0}%`
}
function unMuteVideo(e){
    isVideoMuted = false;
    let totalWidth = event.srcElement.offsetWidth
    let totalWidthFromStart = event.offsetX
    const clickPercentage = (totalWidthFromStart / totalWidth) * 100
    volumeBar.style.width = `${clickPercentage}%`
    let volumeInfo = totalWidthFromStart / totalWidth
    myVideo.volume = volumeInfo
    volumeButton.classList.replace('fa-volume-mute','fa-volume-up')
}

volumeButton.addEventListener('click',function(){
    if(isVideoMuted){
        unMuteVideo()
    }else{
        muteVideo()
    }
})

//playBack Speed control with Javascript

const Speed = document.getElementById('speed')
Speed.addEventListener('change',function(){
    myVideo.playbackRate = Speed.value;
    playVideo()
})

//Fullscreen Control
const fullscreen = document.getElementById('fullscreen')
const myContainer = document.getElementById('container')

let isfullscreen = false

function displayFullScreen(container){
    if(container.requestFullscreen){
        container.requestFullscreen()
    }
}

function closeFullScreen(container){
    if(container.exitFullscreen){
        container.exitFullscreen()
    }
}

fullscreen.addEventListener('type',function(){
    if(!isfullscreen){
        displayFullScreen(myContainer)
    }else{
        closeFullScreen(myContainer)
    }
})


const myBtn = document.querySelector('.myBtn')
myBtn.addEventListener('click',function(){
    console.log('object');
})