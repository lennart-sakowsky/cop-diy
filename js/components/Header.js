import createElement from "../../ui-framework/main";
import "../../css/components/header.css";

export default function Header() {
  const element = createElement("header", "", document.body, "header");
  const headline = createElement("h1", "Dashboard", element);

  return { element, update };

  function update(title) {
    headline.textContent = title;
  }
}
