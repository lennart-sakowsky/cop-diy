import createElement from "../../ui-framework/main";
import QuestionList from "./QuestionList";

export default function QuestionButton(whenClicked) {
  const toggleAnswerButton = createElement(
    "button",
    "show answer",
    document.querySelector(".question-card")
  );
  toggleAnswerButton.addEventListener("click", function (event) {
    whenClicked("null");
  });
  return toggleAnswerButton;
}
