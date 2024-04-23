const result = document.querySelector(".result");
const netice = document.querySelector(".netice");

const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const addBtn = document.querySelector(".addition");
const subBtn = document.querySelector(".substract");
const multBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".division");
const reset = document.querySelector(".reset");



addBtn.addEventListener("click", (e) => {
  let sum = +value1.value + +value2.value;
  netice.textContent = sum;
});
subBtn.addEventListener("click", (e) => {
  let sum = +value1.value - +value2.value;
  netice.textContent = sum;
});
multBtn.addEventListener("click", (e) => {
  let sum = +value1.value * +value.value;
  netice.textContent = sum;
});
divBtn.addEventListener("click", (e) => {
  let sum = +value1.value / +value2.value;
  netice.textContent = sum;
});

reset.addEventListener("click", (e) => {
  result.textContent = "0";
  value1.value = 0;
  value2.value = 0;
});