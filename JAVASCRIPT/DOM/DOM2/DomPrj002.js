var h4=document.querySelector('h4')
var btn=document.querySelector('#btn')
var c=0;

btn.addEventListener('click',function(){
    if(c==0)
    {
        h4.innerHTML="Friend"
        h4.style.color="green"
        btn.innerHTML="Remove"
        c=1
    }
    else
    {
        h4.innerHTML="Stranger"
        h4.style.color="red"
        btn.innerHTML="Add Friend"
        c=0
    }

})
