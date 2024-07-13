document.getElementById("dark").addEventListener("click", function () {
  document.body.className = "dark";
  document
    .querySelector(".navbar-brand img")
    .setAttribute("src", "icon/calculate.svg");
  document
    .querySelector("#dropdownMenuButton img")
    .setAttribute("src", "icon/routine.svg");
  document.querySelector(".btn").classList.remove("btn-outline-light");
  document.querySelector(".btn").classList.add("btn-outline-dark");
});

document.getElementById("light").addEventListener("click", function () {
  document.body.className = "light";
  document
    .querySelector(".navbar-brand img")
    .setAttribute(
      "src",
      "icon/calculate_24dp_FILL0_wght400_GRAD0_opsz24 (2).svg"
    );
  document
    .querySelector("#dropdownMenuButton img")
    .setAttribute("src", "icon/routine_24dp_FILL0_wght400_GRAD0_opsz24.svg");
  document.querySelector(".btn").classList.remove("btn-outline-dark");
  document.querySelector(".btn").classList.add("btn-outline-light");
});

function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let result = 0;
  try {
    result = eval(document.getElementById("display").value);
  } catch (error) {
    result = "Ошибка!";
  }
  document.getElementById("display").value = result;
}

function power() {
  addToDisplay("**");
}

function sqrtNum() {
    let numberInput = document.getElementById("display").value;
  
    if (numberInput === "") {
        document.getElementById("display").value = "Поле ввода пустое!";
        return;
    }
  
    let result = Math.sqrt(parseFloat(numberInput));
  
    if (isNaN(numberInput) || numberInput < 0) {
        document.getElementById("display").value = "Ошибка! Введите неотрицательное число";
        return;
    }
  
    document.getElementById("display").value = result;
}

let button7Left = $('#first').offset().left;
let buttonEqualRight = $('#second').offset().left + $('#second').outerWidth(true);

let distance = buttonEqualRight - button7Left;
$('#display').css('width', distance + 'px');