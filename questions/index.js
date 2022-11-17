let ask = document.getElementById("question");
let container = document.querySelector(".questions");
let questions = document.querySelectorAll(".questions li");
let values = [];
for (let i = 0; i < questions.length; i++) {
  values.push(questions[i].innerText);
}

function askMe() {
  rand = values[(values.length * Math.random()) | 0];
  ask.innerHTML = rand;
  let ind = values.indexOf(rand);
  questions.forEach((el) => {
    if (el.innerText == String(values[ind])) {
      el.remove();
    }
  });
  if (ind > -1) {
    values.splice(ind, 1);
  }
}
