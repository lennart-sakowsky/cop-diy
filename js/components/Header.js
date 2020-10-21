import createElement from "../../ui-framework/main";

export default function Header() {
  const element = createElement("header", "", document.body);
  const headline = createElement("h1", "Dashboard", element);

  return { element, update };

  function update(title) {
    headline.textContent = title;
  }
}
