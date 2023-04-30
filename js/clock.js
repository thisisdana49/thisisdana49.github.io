const clock = document.querySelector("#clock");

getTime();
setInterval(getTime, 1000);

function getTime() {
  const date = new Date();
  let hour;
  let minute;
  let second; 

  hour = String(date.getHours()).padStart(2,"0");
  minute = String(date.getMinutes()).padStart(2,"0");
  second = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hour}:${minute}:${second}`;
}