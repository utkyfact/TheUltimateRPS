const input = document.querySelectorAll('.input')
const yoket = document.querySelector('.yoket')

const playerImg = document.getElementById('player')
const computerImg = document.getElementById('computer')
const computerScore = document.getElementById('computer-score')
const playerScore = document.getElementById('player-score')
const beraberlik = document.getElementById('beraberlik-score')


const wrapper = document.querySelector('.wrapper')
const container = document.querySelector('.container')
const winLose = document.querySelector('.win-lose')
const winLoseParagraf = document.querySelector('.win-lose-text')
const buttonAgain = document.querySelector('.button-again')

function computerChoose(){
    const list = ['tas','kagit','makas']
    const random = Math.round(Math.random()*(list.length-1))
    return list[random]
}
let sayac = 0
input.forEach((radio)=>{
    radio.addEventListener('change',function(e){
        const player = e.target.value
        const computer = computerChoose()
        sayac++
        if(player == computer){
            beraberlik.textContent = Number(beraberlik.textContent) + 1
            handleGame(player,computer,'bg-warning','BERABERE',sayac)
        }else if((player == 'makas' && computer == 'kagit' )|| (player == 'kagit' && computer == 'tas') || player == 'tas' && computer == 'makas'){
            handleGame(player,computer,'bg-success','KAZANDIK',sayac)
            playerScore.textContent = Number(playerScore.textContent) + 1
        }else{
            handleGame(player,computer,'bg-danger','KAYBETTIN',sayac)
            computerScore.textContent = Number(computerScore.textContent) + 1
        }
        wrapper.classList.remove('d-none')
        e.target.checked = false
        
        endGame(sayac)    
    
    })
})


function handleGame(player,computer,winLoseColor,winLoseText,sayac){
    playerImg.setAttribute('src',`./assets/${player}.png`)
    computerImg.setAttribute('src',`./assets/${computer}.png`)  
}       

function endGame(sayac){

  if(sayac == 6 && (playerScore.textContent > computerScore.textContent)){
    winLoseParagraf.textContent='OYUN BITTI KAZANDIN!'
    winLose.classList.add('bg-success')
    winLose.classList.remove('d-none')

  }else if(sayac == 6 && (playerScore.textContent < computerScore.textContent)){
    winLoseParagraf.textContent='OYUN BITTI KAYBETTIN!'
    winLose.classList.add('bg-danger')
    winLose.classList.remove('d-none')

  }else if(sayac == 6 && (playerScore.textContent == computerScore.textContent)){
    winLoseParagraf.textContent='OYUN BITTI BERABERLIK SAGLANDI!'
    winLose.classList.add('bg-warning')
    winLose.classList.remove('d-none')

  }
  if(sayac >= 6){
    input.forEach(e=>{
        e.disabled = true
        buttonAgain.classList.remove('d-none');
        buttonAgain.classList.add('animate__animated', 'animate__bounce');
    })
  }
}

buttonAgain.addEventListener('click',function(){
    console.log(location.reload())
})