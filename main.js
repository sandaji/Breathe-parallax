const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
  text.innerHTML = 'Breathe in'
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'Hold'

    setTimeout(() => {
      text.innerText = 'Breathe out'
     container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}
setInterval(breatheAnimation, totalTime);


//parallax effect
const msg = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
 text.innerHTML += "<span>"
  + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
 const span = text.querySelectorAll('span')[char];
 span.classList.add('fade');
 char++;
 if (char === splitText.length) {
  complete();
  return;
 }
}

function complete() {
 clearInterval(timer);
 timer = null;
}