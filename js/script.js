let findNumber = document.querySelector(".findnumber")
let evenNumber = document.querySelector(".evennumber")
let oddNumber = document.querySelector(".oddnumber")
let err = document.querySelector(".error")
let btn = document.querySelector(".search")
let btnClr = document.querySelector(".clear")

let multi = document.querySelector(".multi")
let multiBoder = document.querySelector(".multiborder")

btn.addEventListener("click", function () {
  let getValue = findNumber.value;

  evenNumber.innerHTML = "";
  evenNumber.style.color = ""
  evenNumber.style.border = ""
  evenNumber.style.borderRadius = ""

  oddNumber.innerHTML = "";
  oddNumber.style.color = ""
  oddNumber.style.border = ""
  oddNumber.style.borderRadius = ""
  err.innerHTML = "";
  multi.innerHTML = ""

  if (isNaN(findNumber.value)) {
    err.innerHTML = `You must enter a number!`
  } else if (findNumber.value === "") {
    err.innerHTML = `Enter a number!`
  } else {
    for (let i = 0; i <= getValue; i++) {
      if (i % 2 === 0) {
        evenNumber.innerHTML += i + "<br>"
        evenNumber.style.color = "red"
        evenNumber.style.border = "2px solid #017100"
        evenNumber.style.borderRadius = "15px"
      } else {
        oddNumber.innerHTML += i + "<br>"
        oddNumber.style.color = "red"
        oddNumber.style.border = "2px solid #017100"
        oddNumber.style.borderRadius = "15px"
      }
    }
  }

  if (findNumber.value == "") {
    multi.innerHTML = ""
  } else if (isNaN(findNumber.value)) {
    multi.innerHTML = ""
  } else {
    for (let i = 0; i <= 10; i++) {
      multi.innerHTML += getValue + " x " + i + " = " + getValue * i + "<br>"
      multi.style.color = "red"
      multiBoder.style.border = "2px solid #017100"
      multiBoder.style.borderRadius = "15px"
    }
  }
})


btnClr.addEventListener("click", function () {
  findNumber.value = ""
  evenNumber.innerHTML = ""
  evenNumber.style.color = ""
  evenNumber.style.border = ""

  oddNumber.innerHTML = ""
  oddNumber.style.color = ""
  oddNumber.style.border = ""
  err.innerHTML = "";

  multi.innerHTML = ""
  multi.style.color = ""
  multiBoder.style.border = ""

})