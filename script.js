//Once number of inputs by user=sequence.length check if inputs match
//Make each button add to array, then check if inputs match

let red=document.getElementById("red")
let green=document.getElementById("green")
let blue=document.getElementById("blue")
let yellow=document.getElementById("yellow")
let start=document.getElementById("start")
let lossText=document.getElementById("lossText")
let lossLevel=document.getElementById("lossLevel")
let levelText=document.getElementById("levelText")
let randomGameStart=document.getElementById("randomGameStart")
let randomColorArray=["red","green","blue","yellow"]
let sequence=[]
let userSequence=[]
let gameMode=""
let level=0
lossText.innerHTML=""
function pickColor() {
let colorIndex=Math.floor(Math.random()*4)
return randomColorArray[colorIndex]
}

function addToSequence() {
sequence.push(pickColor())
console.log(sequence)
}

function createRandomSequence(){
sequence=[]
for (let i=0;i<Math.random()*10+1;i++){
sequence.push(pickColor())
}
}

function checkNextRound(){
  if (userSequence[userSequence.length-1]!=sequence[userSequence.length-1]){
   lossText.innerHTML="You Lost! You got to level "+level
      sequence=[]
 }
 else if(userSequence.length==sequence.length){
  gameLoop()
} 
}



    red.addEventListener("click",()=>{
    userSequence.push("red")
    console.log("red")
    checkNextRound()
    })

green.addEventListener("click",()=>{
  userSequence.push("green")
  console.log("green")
 checkNextRound()})

  blue.addEventListener("click",()=>{
  userSequence.push("blue")
  console.log("blue")
 checkNextRound()})

  yellow.addEventListener("click",()=>{
    userSequence.push("yellow")
    console.log("yellow")
 checkNextRound()})
  

   function checkArrays(){
    console.log("userSequence",userSequence)
    for (let i=0;i<sequence.length;i++){
      if (sequence[i]!=userSequence[i]){
        return false
      }
    }
    return true
  } 
   

 async function flashColors(){
 for (const color of sequence){
    await flashOneColor(color)
 }
}

async function flashOneColor(color){
    await sleep(100)
    document.getElementById(color).style.backgroundColor=color
        await sleep(1000)
        document.getElementById(color).style.backgroundColor=""

}

start.addEventListener("click",()=>{
  level=0
  gameMode="classic"
  gameLoop()
})

randomGameStart.addEventListener("click",()=>{
  level=0
  gameMode="random"
  gameLoop()
})

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function gameLoop(){
    level++
    levelText.innerHTML="Level "+level
    lossText.innerHTML=""
    userSequence=[]
    if (gameMode=="classic"){
    addToSequence()
    }
    else {
      createRandomSequence()
    }
    await flashColors() 
  }