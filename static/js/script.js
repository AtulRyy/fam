function setHomeActive() {
  document.getElementById("homeOption").classList.add("ACTIVE");
  document.getElementById("aboutOption").classList.remove("ACTIVE");
  document.getElementById("eventsOption").classList.remove("ACTIVE");
}

function setAboutActive() {
  document.getElementById("homeOption").classList.remove("ACTIVE");
  document.getElementById("aboutOption").classList.add("ACTIVE");
  document.getElementById("eventsOption").classList.remove("ACTIVE");
}

function setEventsActive() {
  document.getElementById("homeOption").classList.remove("ACTIVE");
  document.getElementById("aboutOption").classList.remove("ACTIVE");
  document.getElementById("eventsOption").classList.add("ACTIVE");
}

function openNav() {
  document.getElementById("mySidebar").style.width = "70vw";
  document.getElementById("main").style.display = "hidden";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display = "flex";
}

