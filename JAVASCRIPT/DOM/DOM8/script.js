let main=document.querySelector('main')
let cscr=document.querySelector('#cursor')

main.addEventListener('mousemove',function(dets){
    cscr.style.left=dets.x+"px"
    cscr.style.top=dets.y+"px"
})