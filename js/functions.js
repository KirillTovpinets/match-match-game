function onAnimationEndAction() {
    if(this.classList.contains("slide-to-start")){
        return;
    }
    this.style.display = "none";
    let current = document.querySelector(".active");
    let nextItem = document.querySelector(".active + .data-item");
    current.classList.remove("active");
    nextItem.classList.add("slide-to-start");
    nextItem.classList.add("active");
    if(nextItem.classList.contains("game-details")){
        let nextBtn = document.querySelector("#got-it");
        nextBtn.style.display = "none";
        startBtn.style.display = "inline-block";
    }
    if(nextItem.classList.contains("user-info")){
        let nextBtn = document.querySelector("#got-it");
        nextBtn.setAttribute("disabled", "");
        
    }
}
function updateTopList(){
    const topListElement = document.querySelector(".top10 ol");
    let topListItems = document.querySelectorAll(".top10 ol li");
    let topListStorage = JSON.parse(localStorage.getItem("top10"));
    const currentUserEmail = localStorage.getItem("user-email");

    if(topListItems.length > 0){
        topListItems.forEach((element) => {
            element.remove();
        })
    }
    if(topListStorage !== null){
        topListStorage.sort((a, b) => {
            let timeA = a.time.split(":");
            let timeB = b.time.split(":");
            return timeA[0] > timeB[0] || ((timeA[0] == timeB[0]) && (timeA[1] > timeB[1]));
        })
        let topList10 = topListStorage.slice(0, 10);
        for(let item of topList10){
            let listItem = document.createElement("li");
            if(item.email == currentUserEmail){
                listItem.style.color = "#fda403";
            }
            listItem.innerText = `${item.userFname} ${item.userName} - ${item.time}`;
            topListElement.appendChild(listItem); 
        }
    }
}
function buildGameField(){
    updateTopList();
    const statusBar = document.querySelector(".status-bar");
    const timer = document.querySelector("#timer");
    let icon = document.querySelector(".fa-play");
    if(icon !== null){
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
    }

    clearInterval(gameTime);
    timer.innerText = "00:00";

    const cardsOnField = document.querySelectorAll(".card");
    if(cardsOnField.length !== 0){
        cardsOnField.forEach(function(element, index, arr){
            element.remove();
        });
    }
    //For random colors of the card
    const chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    const details = document.querySelector(".wrapper");
    details.classList.add("slide-top");

    statusBar.classList.add("slide-down");
    let dificulty = localStorage.getItem("difficulty");
    let fieldWidth = 0;
    let fieldHeight = 0;
    let gameField = document.querySelector(".game-field");

    switch(dificulty){
        case 'easy': {fieldWidth = 5; fieldHeight = 2; break;}
        case 'normal': {fieldWidth = 6; fieldHeight = 3; break;}
        case 'expert': {fieldWidth = 8; fieldHeight = 3; break;}
    }

    const containerWidth = gameField.clientWidth;
    let row = document.createElement("div");
    row.classList.add("clearfix");
    row.style.textAlign = "center";

    let cardColors = [];
    for(let i = 0; i < (fieldWidth * fieldHeight) / 2; i++){
        cardColors.push(generateColors(chars));
    }
    let settedColors = [];
    let cardMargin = (containerWidth/fieldWidth)/10;
    for(let i = 0; i < fieldWidth*fieldHeight; i++){
        
        let cardWidth = Math.round((containerWidth / fieldWidth) - ((fieldWidth - 2) * cardMargin) * 0.7);
        let cardHeight = Math.round(cardWidth*1.5);
        let card = document.createElement("article");
        card.classList.add("card");
        card.style.marginRight = cardMargin + "px";
        card.style.marginBottom = cardMargin + "px";
        card.addEventListener("click", openCardAction)

        let back = document.createElement("div");
        back.style.height = String(cardHeight) + "px";
        back.classList.add("back");
        const image = localStorage.getItem("shirt");
        back.style.backgroundImage = `url('${image}')`
        back.style.backgroundPosition = "center";
        let front = document.createElement("div");
        front.classList.add("front");
        front.style.height = String(cardHeight) + "px";

        let index = Math.floor(Math.random() * cardColors.length);
        let colorHex = cardColors[index];
        if(settedColors.indexOf(colorHex) !== -1){
            cardColors.splice(index, 1);
        }else{
            settedColors.push(colorHex);
        }

        front.style.backgroundImage = `url("http://placehold.it/${cardWidth}x${cardHeight}/${colorHex}?text=${colorHex}")`;

        card.appendChild(back);
        card.appendChild(front);

        card.style.width = String(cardWidth) + "px";
        card.style.height = String(cardHeight) + "px";
        row.appendChild(card);
        if((i + 1) % fieldWidth === 0 && i !== 0){
            gameField.appendChild(row);
            row = document.createElement("div");
            row.classList.add("clearfix");
            row.style.textAlign = "center";
        }
    }
    gameField.appendChild(row);
    row = document.createElement("div");
    gameField.style.opacity = "1";

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

function generateColors(chars){
    let frontColor = [];
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        frontColor.push(chars[randomNumber]);
    }
    return frontColor.join('');
}

function openCardAction(){
    if(this.classList.contains('disabled')){
        return;
    }
    this.classList.toggle("open");
    let alreadyOpen = document.querySelectorAll(".open:not(.correct)");
    if(alreadyOpen.length == 2){
        if(alreadyOpen[0].children[1].style.backgroundImage == alreadyOpen[1].children[1].style.backgroundImage){
            setTimeout(function(){
                alreadyOpen.forEach(function(value, index, arr){
                    value.classList.add("correct");
                })
                let remainClosed = document.querySelectorAll(".card:not(.open)");

                if(remainClosed.length === 0){
                    const userFname = localStorage.getItem("user-fname");
                    const userName = localStorage.getItem("user-name");
                    const email = localStorage.getItem("user-email");
                    clearInterval(gameTime);
                    let result = document.createElement("h4");
                    let timer = document.querySelector("#timer");

                    result.classList.add("result");
                    result.innerHTML = "Your time is <br/>";
                    let time = document.createElement("span");
                    time.style.color = "#F44336";
                    time.innerText = timer.innerText;

                    let saveData = {
                        userFname,
                        userName,
                        email,
                        time: timer.innerText
                    }
                    
                    let topList = JSON.parse(localStorage.getItem("top10"));
                    if(topList !== null){
                        topList.push(saveData);
                    }else{
                        topList = [saveData];
                    }
                    localStorage.setItem("top10", JSON.stringify(topList));
                    updateTopList();
                    result.appendChild(time);
                    let body = document.querySelector("body");
                    body.prepend(result);

                    setTimeout(function(){
                        result.remove();
                    }, 2000)
                }
            }, 700)
        }else{
            setTimeout(function(){
                alreadyOpen.forEach(function(value, index, arr){
                    alreadyOpen[0].classList.add("shake");
                    alreadyOpen[1].classList.add("shake");
                })
            }, 500);
            setTimeout(function(){
                alreadyOpen.forEach(function(value, index, arr){
                    value.classList.remove("open");
                    value.classList.remove("shake");
                })       
            }, 1000);
        }
    }
}