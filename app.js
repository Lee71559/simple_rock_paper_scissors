let userScore= 0;
let compScore= 0;
const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");
const scoreBoard_div= document.querySelector(".scoreBoard");
const userImg_img= document.getElementById("user-img");
const compImg_img= document.getElementById("comp-img");
const result_p= document.querySelector(".result> p");
const rock_div= document.getElementById("rock");
const paper_div= document.getElementById("paper");
const scissors_div= document.getElementById("scissors");

function getCompChoice(){
    const choice= ["r", "p", "s"];
    const randomNum= Math.floor(Math.random()*3);
    return choice[randomNum];
}

function convertToWord(letter){
    switch (letter){
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
    }
}

function convertToId(letter){
    switch (letter){
        case "r":
            return "rock";
        case "p":
            return "paper";
        case "s":
            return "scissors";
    }
}

function showChoice(user, comp){
    switch (user){
        case "r":
            userImg_img.src= "./images/rock.JPG";
            break;
        case "p":
            userImg_img.src= "./images/paper.JPG";
            break;
        case "s":
            userImg_img.src= "./images/scissors.JPG";
            break;
    }
    switch (comp){
        case "r":
            compImg_img.src= "./images/rock.JPG";
            break;
        case "p":
            compImg_img.src= "./images/paper.JPG";
            break;
        case "s":
            compImg_img.src= "./images/scissors.JPG";
            break;
    }
}

function win(user, comp){
    const userChoice_div= document.getElementById(convertToId(user));
    userScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    result_p.innerHTML= `${convertToWord(user)} beats ${convertToWord(comp)}. You win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(()=> userChoice_div.classList.remove("green-glow"), 1000);
}

function lose(user, comp){
    const userChoice_div= document.getElementById(convertToId(user));
    compScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    result_p.innerHTML= `${convertToWord(user)} loses to ${convertToWord(comp)}. You lost!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(()=> userChoice_div.classList.remove("red-glow"), 1000);
}

function draw(user, comp){
    const userChoice_div= document.getElementById(convertToId(user));
    result_p.innerHTML= `It's a draw!`;
    userChoice_div.classList.add("blue-glow");
    setTimeout(()=> userChoice_div.classList.remove("blue-glow"), 1000);
}

function game(userChoice){
    const compChoice= getCompChoice();
    showChoice(userChoice, compChoice);
    switch (userChoice+ compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function reset(){
    location.reload();
}

function main(){
    rock_div.addEventListener('click', ()=> game("r"));
    paper_div.addEventListener('click', ()=> game("p"));
    scissors_div.addEventListener('click', ()=> game("s"));
}

main();
