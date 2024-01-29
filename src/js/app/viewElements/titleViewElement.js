const title = "Mis Notas";
const titleViewElement = () => {
  const element = document.createElement("h1");
  element.classList.add("title");
  element.classList.add("text-title-1");
  element.textContent = title;
  return element;
};

export default titleViewElement;
