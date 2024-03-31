let hour = document.getElementById('hour')
let minut = document.getElementById('minut')
let seconds = document.getElementById('seconds')

function getDate(){
  let data = new Date()

  hour.textContent = data.getHours();
  minut.textContent = data.getMinutes();
  seconds.textContent = data.getSeconds();

  if(data.getSeconds() < 10){
    seconds.textContent = "0"+data.getSeconds();
  }
  if(data.getMinutes() < 10){
    minut.textContent = "0"+data.getMinutes();
  }
  if(data.getHours() < 10){
    hour.textContent = "0"+data.getHours();
  }
}

setInterval(getDate, 1000)