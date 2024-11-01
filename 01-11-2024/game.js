const boxs=document.querySelectorAll('.box');
const status1=document.querySelector('#status');
const btnRestart=document.querySelector('#restart');
let x="<img src='x.png'>";
let o="<img src='o.png'>";

//possiblities of winning index postion

const win=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let options=["","","","","","","","",""];

//need to select who plays first
let currentPlayer=x;
let Player="X";

let running=false;
init();
function init(){//to start the game
  boxs.forEach(box=>box.addEventListener(/*click event*/'click',/*after click method calls*/boxClick));
  
 btnRestart.addEventListener('click',restartGame);
 status1.textContent=`${Player} Your Turn`;

 running=true;
}

function boxClick(){//to select  the box
//console.log(this.dataset.index);//dataset is a predefined, used to collect the data attributes
const index=this.dataset.index;
if(options[index]!="" || !running){
    return;
}
updateBox(this,index);
checkWinner();//for every click checking for the winners.

}

function updateBox(box,index){// after click it display X or O
    options[index]=Player;//assigning the current player either X or O
    box.innerHTML=currentPlayer;
  }

function changePlayer(){//game turns changes
 Player=(Player=="X") ? "O" : "X";//ternary perator to change the game'
 currentPlayer=(currentPlayer==x) ? o : x;//change the image X or O
 status1.textContent=`${Player} Your Turn`;

}



function checkWinner(){
  let isWon=false;
  for(let i=0;i<win.length;i++){//checking the possiblities
    const condition=win[i];
    const box1=options[condition[0]];
    const box2=options[condition[1]];
    const box3=options[condition[2]];
    if(box1=="" || box2=="" || box3==""){//if any box is empty go to next turn
      continue;
    }
    if(box1==box2 && box2==box3){
      isWon=true;
      boxs[condition[0].classList.add('win')];
      boxs[condition[1].classList.add('win')];
      boxs[condition[2].classList.add('win')];
    }
  }//loop ends
  if(isWon){
    status1.textContent=`${Player} Won..`;
    running=false;
  }
  else if(!options.includes("")){
    status1.textContent="Game Draw..!"
    running=false;
  }
  else{
    changePlayer();
  }

}

function restartGame(){//once game draw,to restart it
  //need to clear and start from first
  options=["","","","","","","","",""];
//need to select who plays first
currentPlayer=x;
Player="X";
 running=false;
 status1.textContent=`${Player} Your Turn`;

 boxs.forEach(box=>{
   box.innerHTML="";
   box.classList.remove('win');
 });

}

