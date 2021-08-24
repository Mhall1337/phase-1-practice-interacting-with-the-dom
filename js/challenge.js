let num = 0;
const pauseButton = document.querySelector("#pause")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")
const heartButton = document.querySelector("#heart")
const submitButton = document.querySelector("#submit")
const pausedButtons = () => {plusButton, minusButton, heartButton, submitButton}

function timeoutHandler() {
  updateTimer();
  if (num < 60) {
    num++;
 var timer = setTimeout(timeoutHandler, 1000);
  }
  pauseButton.addEventListener('click', event => {clearTimeout(timer)
  pauseButton.textContent = 'resume'
  pauseButton.setAttribute('id', 'paused' )
})
}
function updateTimer() {
  document.querySelector("#counter").textContent = num;
}
timeoutHandler();

pauseButton.addEventListener('click', () => plusButton.setAttribute('disabled', 'true' ))
pauseButton.addEventListener('click', () => minusButton.setAttribute('disabled', 'true'))
pauseButton.addEventListener('click', () => heartButton.setAttribute('disabled', 'true'))
pauseButton.addEventListener('click', () => submitButton.setAttribute('disabled', 'true'))
plusButton.addEventListener('click', () => document.querySelector("#counter").textContent= num+=1 )
minusButton.addEventListener('click', () => document.querySelector("#counter").textContent= num-=1 )

