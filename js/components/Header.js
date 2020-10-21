import createElement from "../../ui-framework/main";

export default function Header() {
  const header = createElement("header", "", document.body);
  const headline = createElement("h1", "Dashboard", header);

  return {
    update: (title) => (headline.textContent = title),
  };
}
