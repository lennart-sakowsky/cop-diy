export default function createElement(tag, text, parent, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  parent.appendChild(element);
  element.className = className;

  return element;
}
