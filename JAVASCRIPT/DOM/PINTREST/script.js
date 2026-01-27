let arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Batman the dark knight", image: "https://i.pinimg.com/736x/86/a5/d4/86a5d4193c031c5cc8bbb9964824b13a.jpg"},
    {name: "Panda",image: "https://i.pinimg.com/736x/71/56/94/715694df2bf3f959e088b56f58de80be.jpg"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "I am batman", image: "https://i.pinimg.com/736x/21/cd/69/21cd690a3c0769f6c853061dabf0a122.jpg"},
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "Shelby Mustang", image: "https://i.pinimg.com/736x/0b/6b/29/0b6b29ffdec1c762e7b4ab458eb5025a.jpg"},
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "cars", image:   "https://i.pinimg.com/736x/2f/ed/c1/2fedc10cbc4d636644205fc98daa3cd9.jpg"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Red Bull", image: "https://i.pinimg.com/736x/b1/37/96/b1379601d833b0b78ced11fa44a50493.jpg"},
    {name :"football", image: "https://i.pinimg.com/736x/2c/3e/1b/2c3e1b2d816f7b76aa510de8c4340013.jpg"}

]

function showTheCards(){
    let clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;  
    })

    let container=document.querySelector(".container")
    container.innerHTML = clutter;
}

function handleSearch(){
    let input = document.querySelector("#searchinput");
    let overlay = document.querySelector(".overlay")

    input.addEventListener("focus", function(){
        overlay.style.display = "block";
    })

    input.addEventListener("input", function(){
        const filteredArray = arr.filter(obj => 
            obj.name.toLowerCase().startsWith(input.value));
        let clutter1 = "";
        console.log(clutter1);
        filteredArray.forEach(function(obj){
            clutter1 += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    let searchData = document.querySelector(".searchdata");
    searchData.style.display = "block";
    searchData.innerHTML = clutter1;

    let clutter2 = "";
    filteredArray.forEach(function(obj){
        clutter2 += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;  
    })

    document.addEventListener("click", function (e) {
    let searchBox = document.querySelector(".inputcontainer");

    if (!searchBox.contains(e.target)) {
        searchData.style.display =  "none";
        overlay.style.display = "none";
        input.blur();
    }
});


    let container=document.querySelector(".container")
    container.innerHTML = clutter2;
    })
}

handleSearch();
showTheCards();