var MyButton = document.querySelector('#myButton')
var yellow = document.querySelector(".yellow")
var green = document.querySelector(".green")
var red = document.querySelector(".red")
var result = document.querySelector('#displayText')
var trafficLight = document.querySelector('.traffic-light')

MyButton.onclick = () => {
  var value = prompt('выберите цвет светофора')

  if (value === 'green') {
    result.innerText = 'Go'
    trafficLight.style.background = 'green'
  }
  else if (value === 'yellow') {
    result.innerText = 'Wait'
    trafficLight.style.background = 'yellow'
  }
  else if (value === 'red') {
    result.innerText = 'stop'
    trafficLight.style.background = 'red'
  }
}