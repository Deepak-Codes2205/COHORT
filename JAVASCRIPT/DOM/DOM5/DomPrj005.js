let main=document.querySelector('main')
let btn=document.querySelector('button')

const quotes = [
  "Do what you love, love what you do.",
  "Every moment is a fresh beginning.",
  "Believe you can and you're halfway there.",
  "The best time to start was yesterday. The next best time is now.",
  "Success is the sum of small efforts repeated daily.",
  "Your limitation is only your imagination.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "The harder you work, the luckier you get.",
  "Don't stop when you're tired. Stop when you're done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It's going to be hard, but hard does not mean impossible.",
  "Don't wait for opportunity. Create it.",
  "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream it. Believe it. Build it.",
  "Push yourself, because no one else is going to do it for you.",
  "Turn your obstacles into opportunities and your problems into possibilities."
];
btn.addEventListener('click',function(){
    let h1= document.createElement('h1')
    let x=Math.floor(Math.random()*100)
    let y=Math.floor(Math.random()*100)
    //let rot=Math.floor(Math.random()*360)
    let scl=Math.random()*3
    let c1=Math.random()*256
    let c2=Math.random()*256
    let c3=Math.random()*256
    let a=Math.floor(Math.random()*quotes.length)
    h1.innerHTML=quotes[a]
    h1.style.color=`rgb(${c1},${c2},${c3})`
    h1.style.fontSize='24px'
    h1.style.left=x+'%'
    h1.style.top=y+'%'
    //h1.style.rotate=rot+'deg'
    h1.style.scale=scl
    h1.style.position='absolute'
    main.appendChild(h1)
})