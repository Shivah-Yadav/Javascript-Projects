// bu8xx1EuX3IcUIsofBEfWBu5rMXGHmTKSj0_yElBTs4
const imgContainer = document.getElementById('img-container')
const myLoader = document.getElementById('loader')

function controlLoader(){
    myLoader.hidden  = false;
}
controlLoader()
async function getImages(){
    const response = await fetch('https://api.unsplash.com/photos/?client_id=bu8xx1EuX3IcUIsofBEfWBu5rMXGHmTKSj0_yElBTs4')
    const imageData = await response.json()
    imageData.map(function(i){

        const imageUrl = i.urls.full;
        const imageAlt= i.user.name;

        const myImg = document.createElement('img')
        myImg.setAttribute('src',imageUrl)
        myImg.setAttribute('alt',imageAlt)
        imgContainer.append(myImg)
    })
}

setTimeout(function(){
    getImages();
    myLoader.hidden = true
},1000)

window.addEventListener('scroll',function(){
    const myClientHeight = document.documentElement.clientHeight
    const myScrollHeight = document.documentElement.scrollHeight
    const myScrollTop = document.documentElement.scrollTop
    // console.log(myClientHeight,myScrollHeight,myScrollTop)
    if(myClientHeight + myScrollTop >= myScrollHeight){
        getImages()
    }
})