var h1=document.querySelector('h2')
var inc=document.querySelector('#b1')
var dec=document.querySelector('#b2')

var a=0;
inc.addEventListener('click',function(){
    a++;
    h1.innerHTML=a
    if(a>0)
        h1.style.color="blue"
})

dec.addEventListener('click',function(){
    a--;
    h1.innerHTML=a
    if(a<0)
        h1.style.color="red"
})
