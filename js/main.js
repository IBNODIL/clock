let hour = document.getElementById('hour')
let minut = document.getElementById('minut')
let seconds = document.getElementById('seconds')

function getDate(){
  let data = new Date()

  hour.textContent = data.getHours();
  minut.textContent = data.getMinutes();
  seconds.textContent = data.getSeconds();
}

setInterval(getDate, 1000)