function changeColors() {
    var colorLight = "hsl("+Math.floor(Math.random()*360)+"deg,100%,75%)"
    var colorDark = "hsl("+Math.floor(Math.random()*360)+"deg,100%,10%)"
    var colorMiddle = "hsla(" + Math.floor(Math.random() * 360) + "deg,100%,10%,0.5)"
    let root = document.documentElement;
    root.style.setProperty('--colorLight', colorLight);
    root.style.setProperty('--colorDark', colorDark);  
    root.style.setProperty('--colorMiddle', colorMiddle);
}

changeColors()

document.querySelector("#image-label").addEventListener ('click', function(){
    console.log('clicked')
    if(!document.querySelector("#opening").checked) {
        changeColors()
    }
})

setTimeout(function(){
    document.querySelector("#opening").click()  
},1500)

console.log("**********js起動log**********")