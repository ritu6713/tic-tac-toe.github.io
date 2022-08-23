 // X => <i class="fas fa-solid fa-xmark"></i> 
//  O => <i class="fas fa-solid fa-circle-notch"></i>

// Selecting All "Starting Page" Tags
let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose");

// Selecting All "Main Page" Tags
let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

//sound
const audio = new Audio();
audio.src ="./sound_effect/Mouse-Click-Sound.mp3";

const audio1 = new Audio();
audio1.src ="./sound_effect/click.mp3";

// const audioGrid = new audioGrid();
// audioGrid.src = "./sound_effect/click.mp3";

// Selecting All "Winner Page" Tags
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");


// how can we change turns
// false => X's turns
// true => O's turns
let changeTurn =null;


//Select which you want to be>
// X or O
choose.forEach(chooseNow => {
   chooseNow.addEventListener("click", () =>{
     if (chooseNow.id === "playerX") {
        changeTurn = false;
        // console.log(changeTurn);
        showChange.style.left = '0px';
     }else{
        changeTurn = true;
        // console.log(changeTurn);
        showChange.style.left = '160px';
     }
     startingPage.style.display = 'none';
     mainPage.style.display = 'block';

   })
}); 

boxes.forEach(items =>{
    items.addEventListener("click" , ()=>{
        //Add "X" Icon if"ChangeTurn" = False
        //Add "Y" Icon if"ChangeTurn" = True
         if(changeTurn == false){
            items.innerHTML = '<i class="fas fa-solid fa-xmark"></i>';
            items.id ="X";
            items.style.pointerEvents = "none";
            showChange.style.left = '160px';

            // change the "changeTurn" value false into true
            changeTurn = true;

         }else{
            items.innerHTML = '<i class="fas fa-solid fa-circle-notch"></i>';
            items.id ="O";
            items.style.pointerEvents = "none";
            showChange.style.left = '0px';

            // change the "changeTurn" value false into true
            changeTurn = false;
         }
         winningFunc();
         drawFunc();
    })
})
//All possible winning combinations
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let winningFunc = ()=>  {
   for (let  a = 0;  a <= 7;  a++) {
     let b = winningCombinations[a];
   //   console.log(b);
       
      if(boxes[b[0]].id == "" || boxes[b[1]].id =="" || boxes[b[2]].id ==""){
      continue;
      }
      else if(boxes[b[0]].id == "X" && boxes[b[1]].id =="X" && boxes[b[2]].id =="X"){
      //   console.log("X is The Winner");

      // Adding winner text
      winnerName.innerText = 'Player X Win The Game!';

      // show "winner Page" and hide main page
       mainPage.style.display = 'none';
       winner.style.display = 'block';

      }
      else if(boxes[b[0]].id == "O" && boxes[b[1]].id =="O" && boxes[b[2]].id =="O"){
         // console.log("O is The Winner");

       // Adding winner text
      winnerName.innerText = 'Player O Win The Game!';

      // show "winner Page" and hide main page
       mainPage.style.display = 'none';
       winner.style.display = 'block';
      }
      else
      {
         continue;
      }
   }
   
}

// Match draw function
   let drawFunc = ()=>{
      if(boxes[0].id != "" && boxes[1].id !="" &&
      boxes[2].id != "" && boxes[3].id !="" &&
      boxes[4].id != "" && boxes[5].id !="" &&
      boxes[6].id != "" && boxes[7].id !="" && boxes[8].id !=""){

      // Adding " draw" text
      winnerName.innerText = 'Match Draw!';

      // show "winner Page" and hide main page
       mainPage.style.display = 'none';
       winner.style.display = 'block';
      }
   }

   // reset game
   quit.addEventListener("click", ()=>{
      window.location.reload();
   })