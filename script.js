


const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rulesDiv = document.getElementById('right-div');



// This method (localStorage.getItem) Get previous scores from local storage or set them to zero
let prevPlayerScore = localStorage.getItem('playerScore') || 0;
let prevComputerScore = localStorage.getItem('computerScore') || 0;
playerScore.textContent = prevPlayerScore;
computerScore.textContent = prevComputerScore;

rulesBtn.addEventListener("click", () => {
  rulesDiv.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  rulesDiv.style.display = "none";
});
const leftDiv = document.getElementById('left-div');
const images = leftDiv.querySelectorAll('img');

const playAgainBtn = document.getElementById('play-again-btn');

playAgainBtn.addEventListener('click', () => {
  // Reload the page to play again
  location.reload();
});
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => {
  
     window.location.href = '/newPage.html';
  
 
});





images.forEach(img => {
  img.addEventListener('click', () => {
   
    playAgainBtn.style.display = "block";
    const newDiv = document.createElement('div');
    newDiv.classList.add('frame-1');


    const userTitle = document.createElement('h3');
    userTitle.classList.add('userTitle');
    userTitle.textContent = 'You picked';
    newDiv.appendChild(userTitle);

    const userImg = document.createElement('img');
    userImg.classList.add('user-clicked-img');

    userImg.src = img.src;
    userImg.alt = img.alt;

     const compTitle = document.createElement('h3');
    compTitle.textContent = 'Computer picked';
    compTitle.classList.add('comTitle');
    newDiv.appendChild(compTitle);

    const result = document.createElement('h4');
    result.classList.add('result');
    const computerImg = document.createElement('img');
    computerImg.classList.add('comp-gen-img');
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerImg.src = `images/${randomChoice}.png`;
    computerImg.alt = randomChoice;

    // This section is to Compare user's and computer's image choices and generate result
    let gameResult = '';
   
    if (userImg.alt === 'rock') {
      if (computerImg.alt === 'scissors') {
        gameResult = ' HURRAY ! YOU WIN AGAINST PC';
        prevPlayerScore++;
        localStorage.setItem('playerScore', prevPlayerScore);
        playerScore.textContent = prevPlayerScore;
        localStorage.setItem('gameResult', gameResult);

      } else if (computerImg.alt === 'paper') {
        gameResult = 'YOU LOSE AGAINST PC.';
         rulesDiv.style.display = "block";
        prevComputerScore++;
        localStorage.setItem('computerScore', prevComputerScore);
        computerScore.textContent = prevComputerScore;
        localStorage.setItem('gameResult', gameResult);
       
      } else {
        gameResult = "It's a tie!";
        rulesDiv.style.display = "block";
        localStorage.setItem('gameResult', gameResult);
        
       
      }
    } else if (userImg.alt === 'paper') {
      if (computerImg.alt === 'rock') {
        gameResult = 'HURRAY ! YOU WIN AGAINST PC.';
        prevPlayerScore++;
        localStorage.setItem('playerScore', prevPlayerScore);
        playerScore.textContent = prevPlayerScore;
         localStorage.setItem('gameResult', gameResult);
        
        

       
      } else if (computerImg.alt === 'scissors') {
        gameResult = 'YOU LOSE AGAINST PC.';
         rulesDiv.style.display = "block";
        prevComputerScore++;
        localStorage.setItem('computerScore', prevComputerScore);
        computerScore.textContent = prevComputerScore;
        localStorage.setItem('gameResult', gameResult);
      
      } else {
        gameResult = "It's a tie!";
        rulesDiv.style.display = "block";
        
       localStorage.setItem('gameResult', gameResult);
      }
    } else if (userImg.alt === 'scissors') {
      if (computerImg.alt === 'paper') {
        gameResult = 'HURRAY ! YOU WIN AGAINST PC.';
        prevPlayerScore++;
        localStorage.setItem('playerScore', prevPlayerScore);
        playerScore.textContent = prevPlayerScore;
         localStorage.setItem('gameResult', gameResult);
        
       

       
      } else if (computerImg.alt === 'rock') {
        gameResult = 'YOU LOSE AGAINST PC.';
         rulesDiv.style.display = "block";
        prevComputerScore++;
        localStorage.setItem('computerScore', prevComputerScore);
        computerScore.textContent = prevComputerScore;
        localStorage.setItem('gameResult', gameResult);
       
      } else {
        gameResult = "It's a tie!";
        rulesDiv.style.display = "block";
        localStorage.setItem('gameResult', gameResult);
       
      }
    }
    result.textContent = gameResult;

    newDiv.appendChild(userImg);
    newDiv.appendChild(result);
    newDiv.appendChild(computerImg);
    newDiv.appendChild(compTitle)
    leftDiv.replaceWith(newDiv);




  });
});


