let h1=document.querySelector('h1');
let card=document.querySelector('#card')
let inner=document.querySelector('#inner')
let btn=document.querySelector('#btn')
let outer=document.querySelector('#outer')
let d=0;
let tm=0; 
  
btn.addEventListener('click',function(){
    btn.style.pointerEvents='none'
    let num=50 + Math.floor(Math.random()*50)
    let h2=document.createElement('h2');
    h2.style.color='black';
    h2.style.fontSize='20px'
    h2.style.marginTop='-50px'
	
    let intr=setInterval(function(){
        console.log('hello')
        d++;
        h1.innerHTML = d+'%'
        btn.innerHTML="Downloading"
        inner.style.width = d+'%'
        tm= ((100 - d) * num) / 1000;
        h2.innerHTML=`Time Remaining ${tm.toFixed(0)} seconds`;
        outer.appendChild(h2);


    },num) 

    setTimeout(function(){
        clearInterval(intr)
        btn.innerHTML="Downloaded"
        btn.style.opacity=0.4
        h2.innerHTML="Downloaded";
		
		/*
		//Enable button again
		btn.style.pointerEvents = 'auto';
		btn.innerHTML="Download"
        btn.style.opacity=1
        h2.innerHTML="Download";
		//Optional: reset progress
		d = 0;
		inner.style.width = '0%';
		h1.innerHTML = '0%';
		*/

    },num*100)
})