let container=document.querySelector('#container')
let root=ReactDOM.createRoot(container)

let logo=React.createElement('img',{id:img1, src:'./mammal.png'},null)
var h3=[
    React.createElement('h3',{},'About Me'),
    React.createElement('h3',{},'About Me'),
    React.createElement('h3',{},'About Me'),
    React.createElement('h3',{},'About Me'),
    React.createElement('h3',{},'About Me')
]
let h2=React.createElement('h3',{},'About Me')
let nav=React.createElement('div',{className:nav},[logo,h3,h2])
export default nav


