let text = document.querySelector("#text").innerHTML.replace(/\B'/g, '"');
document.querySelector("#text").innerHTML = text;