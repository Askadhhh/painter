import "./style.css";

const app = document.getElementById("app");

Array(100)
  .fill(null)
  .forEach(() => {
    const div = document.createElement("div");
    div.classList.add("cell");

    app.append(div);
  });

app.addEventListener("click", handlerClickDiv);

function handlerClickDiv(event) {
  // event.target - элемент на который кликнули
  // .style.backgroundColor - свойство фона элемента
  // .className - строка с именем класса у элемента
}
