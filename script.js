//Once number of inputs by user=sequence.length check if inputs match
//Make each button add to array, then check if inputs match

let red=document.getElementById("red")
let green=document.getElementById("green")
let blue=document.getElementById("blue")
let yellow=document.getElementById("yellow")
let start=document.getElementById("start")
let randomColorArray=["red","green","blue","yellow"]
let sequence=[]
let userSequence=[]

function pickColor() {
let colorIndex=Math.floor(Math.random()*4)
return randomColorArray[colorIndex]
}

function addToSequence() {
sequence.push(pickColor())
console.log(sequence)
}

function checkNextRound(){
  if (userSequence.length==sequence.length){
    if (checkArrays()){
      gameLoop()
    }
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

start.addEventListener("click",gameLoop)

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function gameLoop(){
    userSequence=[]
    addToSequence()
    await flashColors() 
  }