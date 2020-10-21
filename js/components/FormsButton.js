import createElement from "../../ui-framework/main";

export default function clickButt() {
    const button = document.createElement("BUTTON");
    const buttonCopy = document.createTextNode("CLICK ME");

    button.setAttribute("style", "bgcolor:#F8F8F8; fontcolor: #193251; font-size:1em");

    button.appendChild(buttonCopy);
    document.body.appendChild(button);
}