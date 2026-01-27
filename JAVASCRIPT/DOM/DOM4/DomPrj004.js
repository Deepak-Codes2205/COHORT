let btn=document.querySelector('#btn')
let h2=document.querySelector('#Name')
let h3=document.querySelector('#Team')
let captian=document.querySelector('#captian')
let trophies=document.querySelector('#trophies')
let upp=document.querySelector('#upper')
let low=document.querySelector('#lower')
let arr=[
    {
        name:'CSK',
        team:'Chennai Super Kings',
        captian:'Ruturaj Gaikwad',
        trophies:5,
        primary:'yellow',
        secondary:'blue'
    },
    {
        name:'MI',
        team:'Mumbai Indians',
        captian:'Hardik Pandya',
        trophies:5,
        primary:'blue',
        secondary:'gold'
    },
    {
        name:'KKR',
        team:'Kolkata Knight Riders',
        captian:'Shreyas Iyer',
        trophies:2,
        primary:'purple',
        secondary:'gold'
    },
    {
        name:'SH',
        team:'Sunrisers Hyderabad',
        captian:'Pat Cummins',
        trophies:1,
        primary:'orange',
        secondary:'black'
    },
    {
        name:'RR',
        team:'Rajasthan Royals',
        captian:'Sanju Samson',
        trophies:1,
        primary:'pink',
        secondary:'blue'
    },
    {
        name:'GT',
        team:'Gujarat Titans',
        captian:'Shubman Gill',
        trophies:1,
        primary:'darkblue',
        secondary:'aqua'
    },
    {
        name:'LSG',
        team:'Lucknow Super Giants',
        captian:'KL Rahul',
        trophies:0,
        primary:'skyblue',
        secondary:'navyblue'
    },
    {
        name:'DC',
        team:'Delhi Capitals',
        captian:'Rishabh Pant',
        trophies:0,
        primary:'blue',
        secondary:'red'
    },
    {
        name:'RCB',
        team:'Royal Challengers Bengaluru',
        captian:'Faf du Plessis',
        trophies:1,
        primary:'red',
        secondary:'black'
    },
    {
        name:'PK',
        team:'Punjab Kings',
        captian:'Shikhar Dhawan',
        trophies:0,
        primary:'red',
        secondary:'gold'
    }

]

btn.addEventListener('click',function(){
    let a=Math.floor(Math.random()*arr.length)
    console.log(arr[a]);
    h2.innerHTML=`${arr[a].name}`
    h3.innerHTML=`${arr[a].team}`

    captian.innerHTML=`Captian : ${arr[a].captian}`;
    trophies.innerHTML=`Trophies Won : ${arr[a].trophies}`;
    upp.style.backgroundColor = arr[a].primary;
    low.style.backgroundColor = arr[a].secondary;
    h3.style.color = arr[a].primary;
    captian.style.color = arr[a].primary;
    trophies.style.color = arr[a].primary;
    h2.style.color = 'transparent';
    h2.style.webkitTextStroke = `3px ${arr[a].secondary}`;


})