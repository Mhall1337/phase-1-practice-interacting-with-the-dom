let num = 0;
const pauseButton = document.querySelector("#pause")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")
const heartButton = document.querySelector("#heart")
const submitButton = document.querySelector("#submit")
let timer ;


function timeoutHandler() {
  updateTimer();
  if (num < 60) {
    num++;
 timer = setTimeout(timeoutHandler, 1000);
  }
}
function updateTimer() {
  document.querySelector("#counter").textContent = num;
}
timeoutHandler();

pauseButton.addEventListener('click', event => {clearTimeout(timer)
    pauseButton.textContent = 'resume'
  if(pauseButton.id === 'paused'){
      //console.log('resuming')
      timeoutHandler()
    pauseButton.setAttribute('id', 'pause')
    plusButton.removeAttribute('disabled')
    minusButton.removeAttribute('disabled')
    heartButton.removeAttribute('disabled')
    submitButton.removeAttribute('disabled')
}
else{
    //console.log('pausing')
  pauseButton.setAttribute('id', 'paused' )
  plusButton.setAttribute('disabled', 'true')
  minusButton.setAttribute('disabled', 'true')
  heartButton.setAttribute('disabled', 'true')
  submitButton.setAttribute('disabled', 'true')
}
})
plusButton.addEventListener('click', () => document.querySelector("#counter").textContent= num+=1)
minusButton.addEventListener('click', () => document.querySelector("#counter").textContent= num-=1)

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    handleSubmit(e.target.comment.value)
})
function handleSubmit(comments){
    let p = document.createElement('p')
    p.textContent = comments
    document.querySelector("#list").appendChild(p)
}