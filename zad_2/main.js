function poNacisnieciu() {
    document.getElementById("redbutton").style.background = "red"
    }

function poNacisnieciu1() {
    document.getElementById("yellowbutton").style.background = "yellow"
    }


function poNacisnieciu2() {
    document.getElementById("greenbutton").style.background = "green"
    }


const btns = document.querySelectorAll("button");

let activation;
for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  btn.addEventListener("click", () => {
    if (activation) {
      activation.classList.remove("button");
    }

    btn.classList.add("button");
    activation = btn;
  });
}
