const buttons = document.querySelectorAll("nav button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);

    const isVisible = target.style.display !== "none";

    target.style.display = isVisible ? "none" : "block";
  });
});

document.getElementById("item1").onclick = function () {
  window.location.href = "https://www.instagram.com/mollymokich/";
};

document.getElementById("item2").onclick = function () {
  window.location.href = "https://m.facebook.com/moldir.amantay/";
};

document.getElementById("item3").onclick = function () {
  window.location.href = "https://mollymokich.github.io/Molly/";
};

var button = document.querySelector(".btn");

var modal = document.querySelector("#myModal");

var close = document.querySelector(".close");

button.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

var button = document.querySelector(".btn");

var modal = document.querySelector("#myModal");

var close = document.querySelector(".close");

button.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
var form = document.querySelector("form");
var messageContainer = document.querySelector("#message-container");

form.addEventListener("submit", function () {
  modal.style.display = "none";
  var message = document.createElement("div");
  message.textContent = "Ваше сообщение успешно отправлено!";
  messageContainer.appendChild(message);
});
