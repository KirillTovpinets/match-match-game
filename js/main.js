const gotItBtn = document.querySelector("#got-it");
const userInfoBtn = document.querySelector("#save-user-info");
const startBtn = document.querySelector(".start");
let blocks = document.querySelectorAll(".data-item");
let cards = document.querySelectorAll(".image img");
let difficulties = document.querySelectorAll(".dificulty-setting");
let difficultiesMenuItems = document.querySelectorAll("#difficulty ul li a");
let newGameBtn = document.querySelector("#new-game");
let shirtsBtn = document.querySelector("#change-shirts");
let dificultyBtn = document.querySelector("#change-dificulty");
let pauseBtn = document.querySelector("#pause");
let shirtList = document.querySelectorAll(".submenu ul li img");
let sidebar = document.querySelector("#sidebar");
let formInputs = document.querySelectorAll(".user-info input");
let gameTime;

difficultiesMenuItems.forEach((element) => {
    element.addEventListener("click", () => {
        const difficulty = element.innerText;
        localStorage.setItem("difficulty", difficulty)
        buildGameField();
    });
})
formInputs.forEach((element) => {
    element.addEventListener("keydown", (element) => {
        let allAreNotEmpty = true;
        formInputs.forEach((element) => {
            if(element.value == ""){
                allAreNotEmpty = false;
                return;
            }
        })
        if(allAreNotEmpty){
            userInfoBtn.removeAttribute("disabled");
        }
    })
})
newGameBtn.addEventListener("click", () => buildGameField());

sidebar.addEventListener("click", (event) => {
    let list = document.querySelector(".top10");
    event.target.classList.toggle('open');
    list.classList.toggle("show");
    list.classList.toggle("hide");
})
shirtsBtn.addEventListener("click", () => {
    let subMenu = document.querySelector("#shirts");
    subMenu.classList.toggle("open");
})
pauseBtn.addEventListener("click", (event) => {
    let icon = document.querySelector("#pause .fa");
    let cards = document.querySelectorAll("article");
    if(icon.classList.contains("fa-pause")){
        clearInterval(gameTime);
        cards.forEach(element => {
            element.classList.add("disabled");
        });
    }else{
        cards.forEach(element => {
            element.classList.remove("disabled");
        });
        gameTime =  setInterval(() => {
            let current = timer.innerHTML.split(":");
            let minutes = Number(current[0]);
            let seconds = Number(current[1]);
    
            let nextSecond = String(seconds + 1);
            if(seconds == 59){
                nextSecond = 0;
                minutes = String(minutes + 1);            
            }
    
            if(nextSecond < 10){
                nextSecond = '0' + nextSecond;
            }
            if(minutes < 10){
                minutes = '0' + minutes;
            }
            timer.innerHTML = minutes + ":" + nextSecond;
        }, 1000);
    }
    icon.classList.toggle("fa-pause");
    icon.classList.toggle("fa-play");
});
shirtList.forEach(element => {
    element.addEventListener("click", (event) => {
        let newShirt = event.target.getAttribute("src");
        let selected = document.querySelector(".selected-shirt");
        if(selected !== null){
            selected.classList.remove("selected-shirt");
        }
        event.target.classList.add("selected-shirt");
        localStorage.setItem("shirt", newShirt);
        let backAll = document.querySelectorAll(".back");
        backAll.forEach(element => {
            element.style.backgroundImage = `url('${newShirt}')`
        });
    })
});
dificultyBtn.addEventListener("click", function(){
    let subMenu = document.querySelector("#difficulty");
    subMenu.classList.toggle("open");
})
gotItBtn.addEventListener('click', function(event){
    const activeBlock = document.querySelector(".active");
    activeBlock.classList.remove("slide-to-start");
    activeBlock.classList.add("slide-right");
})

userInfoBtn.addEventListener('click', function(event){
    event.preventDefault();
    let fname = document.querySelector("#first-name");
    let name = document.querySelector("#last-name");
    let email = document.querySelector("#email");

    localStorage.setItem("user-fname", fname.value);
    localStorage.setItem("user-name", name.value);
    localStorage.setItem("user-email", email.value);
    
    gotItBtn.removeAttribute("disabled");
})

blocks.forEach(function(value, index, list){
    value.addEventListener("webkitAnimationEnd", onAnimationEndAction);
    value.addEventListener("animationend", onAnimationEndAction);
})

cards.forEach(function(item, index, arr){
    item.addEventListener("click", function(event){
        let current = document.querySelector(".selected-shirt");
        if(current !== null){
            current.classList.remove("selected-shirt");
        }
        const selectedShirt = this.getAttribute("src");
        localStorage.setItem("shirt", selectedShirt);
        this.classList.add("selected-shirt");
        const dificulty = document.querySelector(".dificulty input:checked");
        if(dificulty !== null){
            startBtn.removeAttribute("disabled");
        }
    })
})

difficulties.forEach(function(item, index, arr){
    item.addEventListener("click", function(event){
        localStorage.setItem("difficulty", this.getAttribute("id"));
        const card = document.querySelector(".images .selected-shirt");
        if(card !== null){
            startBtn.removeAttribute("disabled");
        }
    })
})

startBtn.addEventListener("click", buildGameField)
