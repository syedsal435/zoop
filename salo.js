function switchOff() {
  document.getElementById("bulbImage").src =
    "img/Zoop1.png";
  document.getElementById("sss").style.backgroundColor  = "black";
  document.getElementById("switchStatus").textContent = "LESS INFORMATION";
  document.getElementById("switchStatu").textContent = "Live View";
}


function switchOn() {
  document.getElementById("bulbImage").src =
    "img/Zoop.png";
  document.getElementById("sss").style.backgroundColor = "white"; 
  document.getElementById("switchStatus").textContent = "MORE INFORMATION";
  document.getElementById("switchStatu").textContent = "Address In Google Map";
}

