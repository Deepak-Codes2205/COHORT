let card=document.querySelector("#card")
let image=document.querySelector("#image")
let love=document.querySelector('#love')

image.addEventListener('click',function(){
    love.style.opacity=1
    love.style.transform="translate(-50%,-50%) scale(1) rotate(0deg)"
    console.log("Clicked")
     setTimeout(function(){
        love.style.transform="translate(-50%,-300%) scale(1) rotate(60deg)"
    },800)

    setTimeout(function(){
        love.style.opacity=0
    },1000)

    setTimeout(function(){
        love.style.opacity=0
        love.style.transform="translate(-50%,-50%) scale(0) rotate(-60deg)"
    },1200)
})