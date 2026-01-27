const data=[
    {
        dp:"https://i.pinimg.com/1200x/9b/15/b7/9b15b7a9a2627db586fb005459e59b86.jpg",
        story:"https://i.pinimg.com/736x/dd/76/38/dd76380282b6835fe939937d138743c1.jpg"
    },
    {
        dp:"https://i.pinimg.com/1200x/c4/02/8e/c4028eea0682e5119eae19769c87a42f.jpg",
        story:"https://i.pinimg.com/736x/9d/f2/5a/9df25a6dd8a503d79623e06fc20e4c44.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/af/d9/ed/afd9edaee9a608732c965b56d3850e20.jpg",
        story:"https://i.pinimg.com/736x/26/5b/7d/265b7dd0c1b0f5b6fb6b450cb1f7e062.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/9e/78/df/9e78dff5065744cc56fb72f8682b2d66.jpg",
        story:"https://i.pinimg.com/736x/e1/03/5f/e1035fdab09b9d85b97ceb19cc4e8e67.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/8c/26/9b/8c269bf7fb772f4a350e48c5b965af46.jpg",
        story:"https://i.pinimg.com/1200x/04/dc/b5/04dcb5a229a45684f109ffb258c42510.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/1a/46/bf/1a46bf65024791d367480558001dd17a.jpg",
        story:"https://i.pinimg.com/736x/dd/76/38/dd76380282b6835fe939937d138743c1.jpg"
    },
]
let stories=document.querySelector('#stories')
let clutter=" "
data.forEach(function(elem,ind){
    console.log(elem.dp);
    clutter += `<div id="story">
                <img id="${ind}" src="${elem.dp}" alt="">
            </div>`
})
stories.innerHTML=clutter;

stories.addEventListener('click',function(dets){
    let fullScreen=document.querySelector('#fullScreen')
    fullScreen.style.display='block'
    fullScreen.style.backgroundImage = `url(${data[dets.target.id].story})`

    setTimeout(function(){
        fullScreen.style.display='none'
    },2000)

});