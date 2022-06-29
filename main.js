//-----------Define Constants and variables-----------------
const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");
const avatar = document.querySelector(".avatar");
const testimonial = document.querySelector(".testimonial p")
const personName = document.querySelector(".name");
const position = document.querySelector(".position");
let index = 0;
let data;

//---------Fetch Data---------
fetch("./data.json")
.then(response => response.json())
.then(result => data = result)
.catch(error => console.log(error));

//----------Functions--------
const getUserInfo = (index) => {
    avatar.src = data[index].img;
    testimonial.innerText = data[index].testimoani;
    personName.innerText = data[index].name;
    position.innerText = data[index].position;
}

//-----------EventListeners-------------
nextBtn.addEventListener("click", ()=> {
    index++;
    if (index == data.length) 
    index = 0;
    getUserInfo(index);
})

prevBtn.addEventListener("click", ()=> {
    index--;
    if (index < 0) 
    index = data.length - 1;
    getUserInfo(index);
})