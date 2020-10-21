import createElement from "../../ui-framework/main";

export default function fieldCopy() {
    const copyAnchor = createElement("h3", "LoremYpsum", document.body);
    let input = document.createElement("input");
    input.type = "text";
    input.className = "Text__Feld";
    document.body.appendChild(input);
}