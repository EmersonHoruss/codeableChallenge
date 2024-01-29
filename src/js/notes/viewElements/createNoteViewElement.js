import NoteController from "../NoteController.js";

const zoneCreateView = () => {
  const element = document.createElement("div");
  element.classList.add("zone-create");
  return element;
};
const placeholderInput = "Algo para recordar...";
const idInput = "inputCreateNote";
const createdInput = () => {
  const element = document.createElement("textarea");
  element.classList.add("input");
  element.classList.add("text");
  element.placeholder = placeholderInput;
  element.id = idInput;
  element.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      const note = e.target.value;
      new NoteController().add(note);
    }
  });
  return element;
};
const buttonText = "Crear";
const createdButton = () => {
  const element = document.createElement("button");
  element.classList.add("button-big");
  element.classList.add("text-button-big");
  element.textContent = buttonText;
  element.addEventListener("click", () => {
    const note = document.getElementById(idInput).value;
    new NoteController().add(note);
  });
  return element;
};
const createNoteViewElement = () => {
  const zoneCreateViewElement = zoneCreateView();
  const input = createdInput();
  zoneCreateViewElement.appendChild(input);
  const button = createdButton();
  zoneCreateViewElement.appendChild(button);
  return zoneCreateViewElement;
};

export default createNoteViewElement;
